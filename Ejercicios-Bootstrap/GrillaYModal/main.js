console.log(bootstrap);

const imagenes = document.getElementsByClassName("logo");
const modalImage = document.getElementById("modal-image");
const modalContainer = document.getElementById("modal");
const modal = new bootstrap.Modal(modalContainer);

for(let i = 0; i < imagenes.length; i++) {
    const img = imagenes.item(i);
    img.addEventListener("click", () => {
        const srcDeLaImagen = img.getAttribute("src");
        modalImage.setAttribute("src", srcDeLaImagen);
        modal.show();
    });
}