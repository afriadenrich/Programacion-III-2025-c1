const API_URL = "http://localhost:3000";
const form = document.getElementById("uploadForm");
const messageDiv = document.getElementById("message");
const fileList = document.getElementById("fileList");

// Evento de envío del formulario
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const fileInput = document.getElementById("file");
  const file = fileInput.files[0];

  if (!file) {
    showMessage("Por favor selecciona un archivo", "warning");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("clave", "valor");

  try {
    const response = await fetch(`${API_URL}/api/upload`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      showMessage("Archivo subido exitosamente", "success");
      form.reset();
      loadFiles();
    } else {
      showMessage(data.error || "Error al subir el archivo", "danger");
    }
  } catch (error) {
    showMessage("Error de conexión: " + error.message, "danger");
  }
});

// Mostrar mensajes
function showMessage(text, type) {
  messageDiv.textContent = text;
  messageDiv.className = `alert alert-${type} mt-3`;
  messageDiv.style.display = "block";

  setTimeout(() => {
    messageDiv.style.display = "none";
  }, 5000);
}

// Cargar lista de archivos
async function loadFiles() {
  try {
    const response = await fetch(`${API_URL}/api/files`);
    const data = await response.json();
    console.log(data);

    if (data.success && data.files.length > 0) {
      fileList.innerHTML = data.files
        .map(
          (file) => `
                <div class="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <i class="bi bi-file-earmark me-2"></i>
                        <strong>${file.originalname}</strong>
                        <small class="text-muted d-block">
                            ${file.sizeFormatted} - ${new Date(
            file.uploadDate
          ).toLocaleString()}
                        </small>
                    </div>
                    <div>
                        <a href="${API_URL}${
            file.url
          }" target="_blank" class="btn btn-sm btn-outline-primary">
                            <i class="bi bi-eye"></i>
                        </a>
                        <button class="btn btn-sm btn-outline-danger" onclick="deleteFile('${
                          file.filename
                        }')">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            `
        )
        .join("");
    } else {
      fileList.innerHTML =
        '<div class="text-center text-muted">No hay archivos subidos</div>';
    }
  } catch (error) {
    fileList.innerHTML =
      '<div class="text-center text-danger">Error al cargar archivos</div>';
  }
}

// Eliminar archivo
async function deleteFile(filename) {
  if (!confirm("¿Eliminar este archivo?")) return;

  try {
    const response = await fetch(`${API_URL}/api/files/${filename}`, {
      method: "DELETE",
    });

    const data = await response.json();

    if (data.success) {
      showMessage("Archivo eliminado", "success");
    } else {
      showMessage(data.error || "Error al eliminar", "danger");
    }
  } catch (error) {
    showMessage("Error: " + error.message, "danger");
  }
}

// Cargar archivos al inicio
document.addEventListener("DOMContentLoaded", () => {
  loadFiles();
});
