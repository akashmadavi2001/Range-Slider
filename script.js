let slideValue = document.querySelector('span');
let inputSlider = document.querySelector('input');
inputSlider.oninput = (()=>{
    let value = inputSlider.value;
    slideValue.textContent = value;
    slideValue.style.left = (value/2)+'%';
    slideValue.classList.add("show");
});
inputSlider.onblur = (()=>{
    slideValue.classList.remove('show');
});