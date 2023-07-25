let projectButtons = document.querySelectorAll('.js-projectButton');

projectButtons.forEach(item => {
    item.addEventListener("click", e =>{
        projectChildren = item.parentElement.children
        item.parentElement.classList.toggle("-active");
        for (let index = 0; index < projectChildren.length; index++) {
            const element = projectChildren[index];
            element.classList.toggle("-active");
        }
    })
});

imageViewer = document.querySelector('.imageViewer');
let images = document.querySelectorAll('.js-images');

images.forEach(item => {
    item.addEventListener("click", e =>{
        imageViewer.classList.toggle("-active");
        imageViewer.children[0].setAttribute("src", item.getAttribute("src"));
    })
});

imageViewer.addEventListener("click",e=>{
    imageViewer.classList.toggle("-active");
})