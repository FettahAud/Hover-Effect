let i = 1;
const img = document.querySelector('.img');
const select = document.querySelector('select');

select.addEventListener('change', () => {
    img.replaceChildren()
    new hoverEffect({
        parent: document.querySelector('.img'),
        intensity: 0.4,
        angle: 90,
        image1: './src/Assets/bg1.jpg',
        image2: './src/Assets/bg2.jpg',
        displacementImage: `./../Displacement/dis${select.value}.jpg`,
    });
})
const hover = new hoverEffect({
    parent: document.querySelector('.img'),
    intensity: 0.4,
    image1: './src/Assets/bg1.jpg',
    image2: './src/Assets/bg2.jpg',
    displacementImage: `./../Displacement/dis${i}.jpg`,
});