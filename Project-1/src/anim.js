const txtWrapper1 = document.querySelector('.title-1');
const txtWrapper2 = document.querySelector('.title-2');
const txtWrapper3 = document.querySelector('.title-3');
const img = document.querySelector('.img');
const cursorCir = document.querySelector('.cursor');

txtWrapper2.innerHTML = txtWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
txtWrapper1.innerHTML = txtWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
txtWrapper3.innerHTML = txtWrapper3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


window.addEventListener('load', () => {
    const tl = gsap.timeline()
        .to('.title-1 .letter', { opacity: 1, y: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', stagger: '0.03' })
        .to('.title-2 .letter', { opacity: 1, y: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', stagger: '0.03' }, '-=0.7')
        .to('.title-3 .letter', { opacity: 1, y: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', stagger: '0.03' }, '-=0.7')
        .fromTo('p', { opacity: 0, y: '-50px' }, { opacity: 1, y: 0 }, '-=.7')
        .to('.img', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', ease: 'back.out', duration: 0.75, }, '-=.25')
})

const anim = new hoverEffect({
    parent: document.querySelector('.img'),
    intensity: 0.4,
    image1: './src/Assets/bg1.jpg',
    image2: './src/Assets/bg2.jpg',
    displacementImage: './src/Assets/dis.jpg',
});


let cursor = {
    x: 0,
    y: 0
}

document.addEventListener('mousemove', (e) => {
    cursor.x = -e.clientX * .1;
    cursor.y = -e.clientY * .1;

    img.style.transform = `translate(${cursor.x}px, ${cursor.y}px)`;
    cursorCir.style.top = `${e.clientY}px`;
    cursorCir.style.left = `${e.clientX}px`;
});