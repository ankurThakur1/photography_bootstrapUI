console.log("Photography website for interview");

const imgCol = document.querySelectorAll(".img-col");
const modalContainer = document.querySelector(".modal-container");

imgCol.forEach((item) => {
    item.addEventListener("click", function(e) {
        // console.log(e);
        console.log(e.target.src);
        const modalImage = e.target.src;
        showModal(modalImage);
    });
});


const showModal = (imageSrc) => {
    const modalImage = document.createElement("div");
    modalImage.classList.add("modal-image");
    modalImage.innerHTML = `
        <img src="${imageSrc}" >
        <button class="imgBtn" onclick=removeModal()><i class="fa-solid fa-xmark"></i></button>
    `;
    modalContainer.innerHTML = "";
    modalContainer.appendChild(modalImage);
    modalContainer.classList.add("show-modal");
}

const removeModal = () => {
    modalContainer.classList.remove("show-modal");
}


