const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const fileLimit = 2;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Crear directorio uploads si no existe
const uploadsDir = "uploads";
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Configuración de Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const mimetype = file.mimetype;
    const [tipo, extension] = mimetype.split("/"); // ["image", "jpeg"]
    if (tipo !== "image") {
      cb(new Error("No es imagen"));
    } else {
      const nombre = file.originalname + "-" + Date.now() + "." + extension;
      cb(null, nombre);
    }
  },
});

// Filtro de archivos
const fileFilter = (req, file, cb) => {
  // Aceptar cualquier tipo de archivo o restringir según necesites
  //   cb(null, true);

  // Si quieres restringir tipos de archivo, descomenta esto:

  const allowedTypes = /jpeg|jpg|png|gif|pdf|doc|docx|txt|zip|rar|mp4|mp3/;
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error("Tipo de archivo no permitido"));
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: fileLimit * 1024 * 1024, // Límite
  },
  fileFilter: fileFilter,
});

// Función helper para formatear tamaño de archivo
function formatFileSize(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({
    message: "API de Upload de Archivos",
    endpoints: {
      upload: "POST /api/upload",
      list: "GET /api/files",
      delete: "DELETE /api/files/:filename",
    },
  });
});

// Upload de un solo archivo
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: "No se ha enviado ningún archivo",
      });
    }

    console.log(req.body.clave);
    const fileInfo = {
      filename: req.file.filename,
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size,
      sizeFormatted: formatFileSize(req.file.size),
      uploadDate: new Date().toISOString(),
      url: `/uploads/${req.file.filename}`,
    };

    res.json({
      success: true,
      message: "Archivo subido exitosamente",
      file: fileInfo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Listar todos los archivos
app.get("/api/files", (req, res) => {
  try {
    const files = fs.readdirSync(uploadsDir);

    const filesInfo = files.map((filename) => {
      const filePath = path.join(uploadsDir, filename);
      const stats = fs.statSync(filePath);

      // Extraer el nombre original del archivo si es posible
      const parts = filename.split("-");
      const originalname =
        parts.length > 2 ? parts.slice(2).join("-") : filename;

      return {
        filename: filename,
        originalname: originalname,
        size: stats.size,
        sizeFormatted: formatFileSize(stats.size),
        uploadDate: stats.mtime.toISOString(),
        url: `/uploads/${filename}`,
      };
    });

    // Ordenar por fecha de subida (más reciente primero)
    filesInfo.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));

    res.json({
      success: true,
      count: filesInfo.length,
      files: filesInfo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Eliminar archivo
app.delete("/api/files/:filename", (req, res) => {
  try {
    const filename = req.params.filename;
    const filePath = path.join(uploadsDir, filename);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        success: false,
        error: "Archivo no encontrado",
      });
    }

    fs.unlinkSync(filePath);

    res.json({
      success: true,
      message: "Archivo eliminado exitosamente",
      filename: filename,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Manejo de errores de Multer
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        success: false,
        error: `El archivo es demasiado grande. Límite: ${fileLimit}MB`,
      });
    }
    return res.status(400).json({
      success: false,
      error: error.message,
    });
  }
  res.status(500).json({
    success: false,
    error: error.message,
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});
