(function () {
    const upBtn = document.querySelector('.up-button');
    const downBtn = document.querySelector('.down-button');

    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');
    const mainSlide = document.querySelector('.main-slide');
    const slidesCount = mainSlide.querySelectorAll('div').length;

    let activeSlideIndex = 0;

    sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

    upBtn.addEventListener('click', () => {
        changeSlide('up');
    });

    downBtn.addEventListener('click', () => {
        changeSlide('down');
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'ArrowUp') {
            changeSlide('up');
        } else if (event.key === 'ArrowDown') {
            changeSlide('down');
        }
    });

    function slideIndex(index) {
        if (index === slidesCount) {
            activeSlideIndex = 0;
        }
        else if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    function changeSlide(direction) {
        if (direction === 'up') {
            activeSlideIndex++;
            slideIndex(activeSlideIndex);

        } else if (direction === 'down') {
            activeSlideIndex--;
            slideIndex(activeSlideIndex);
        }
        const height = container.clientHeight;

        mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
        sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
    }
})()