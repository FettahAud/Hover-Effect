let i = 1;
let timeout = null
const img = document.querySelector('.img');
const select = document.querySelector('select');
const angel = document.querySelector('input[type="number"]');

angel.addEventListener('input', () => {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        hover();
    }, 1000);
})
select.addEventListener('change', () => hover());

const hover = () => {
    img.replaceChildren()
    new hoverEffect({
        parent: document.querySelector('.img'),
        intensity: 0.4,
        angle: angel.value,
        image1: './src/Assets/bg1.jpg',
        image2: './src/Assets/bg2.jpg',
        displacementImage: `./../Displacement/dis${select.value}.jpg`,
    });
}
hover();