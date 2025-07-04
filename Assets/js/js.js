const slider = document.querySelector('.slider');
let autoSlideInterval;

function activate(e) {
    const items = document.querySelectorAll('.item');
    if (e.target.matches('.next')) {
        slider.append(items[0]);
        resetAutoSlide();
    } else if (e.target.matches('.prev')) {
        slider.prepend(items[items.length - 1]);
        resetAutoSlide();
    }
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        const items = document.querySelectorAll('.item');
        slider.append(items[0]);
    }, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
}

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopAutoSlide();
    } else {
        startAutoSlide();
    }
});

document.addEventListener('click', activate, false);
startAutoSlide();

// Core services interactivity
document.querySelectorAll('.core-service-card').forEach(card => {
    card.addEventListener('click', () => {
        const service = card.querySelector('h6').textContent.toLowerCase().replace(' ', '-');
        window.location.href = `/services/${service}`;
    });
});

// Stats counter animation
// document.querySelectorAll('.counter').forEach(counter => {
//     const target = +counter.getAttribute('data-target');
//     let count = 0;
//     const increment = target / 100;
//     const updateCounter = () => {
//         if (count < target) {
//             count += increment;
//             counter.textContent = Math.ceil(count);
//             requestAnimationFrame(updateCounter);
//         } else {
//             counter.textContent = target;
//         }
//     };
//     const observer = new IntersectionObserver(entries => {
//         if (entries[0].isIntersecting) {
//             updateCounter();
//             observer.disconnect();
//         }
//     });
//     observer.observe(counter);
// });