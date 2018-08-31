var product = document.getElementsByClassName("products");
var sliderContainer = document.getElementsByClassName('img-line')[0];
var slidesCount = product.length;
var checker = true;
var timeout = 600;


var screensize = screen.width;
sliderResize(screensize);

window.onresize = function () {
    screensize = screen.width
    sliderResize(screensize)
};
function sliderResize(size) {
    if (size <= 575) {

        var productHeight = product[0].clientHeight;
        var productWidth = product[0].clientWidth;
        sliderContainer.style.height = productHeight + "px";
        sliderContainer.style.width = productWidth + "px";
    } else {
        sliderContainer.style.height = "auto";
        sliderContainer.style.width = "auto";
    }
}

function f(direction) {

    var productActive = document.getElementsByClassName("products active")[0];
    var productNext = document.getElementsByClassName("products next")[0];
    var productPrev = document.getElementsByClassName("products prev")[0];

    var activeSlide = sliderContainer.getAttribute("data-active");

    slide(direction);

    function slide(dir) {
        if (dir === 'next' && checker) {
            checker = false;
            activeSlide < slidesCount ? activeSlide++ : activeSlide = 1;
            changeClassNext(activeSlide);
            setTimeout(function () {
                checker = true;
            }, timeout);

        }
        if (dir === 'prev' && checker) {
            checker = false;
            activeSlide > 1 ? activeSlide-- : activeSlide = slidesCount;
            changeClassPrev(activeSlide);
            setTimeout(function () {
                checker = true;
            }, timeout);
        }
    }

    sliderContainer.setAttribute("data-active", activeSlide);

    function changeClassNext(active) {
        var next = active;
        if (active === slidesCount) next = 0;

        console.log(activeSlide);

        productActive.classList.add("animate_next");
        productNext.classList.add("animate");

        setTimeout(function () {
            productPrev.classList.remove("prev");

            productActive.classList.remove("active");
            productActive.classList.add("prev");

            productNext.classList.remove("next");
            productNext.classList.add("active");

            product[next].classList.add("next");

            productActive.classList.remove("animate_next");
            productNext.classList.remove("animate");

        }, timeout);
    }

    function changeClassPrev(active) {
        var prev = active - 2;
        if (active === 1) prev = slidesCount - 1;


        console.log(activeSlide);

        productActive.classList.add("animate_prev");
        productPrev.classList.add("animate");

        setTimeout(function () {
            productNext.classList.remove("next");

            productActive.classList.remove("active");
            productActive.classList.add("next");

            productPrev.classList.remove("prev");
            productPrev.classList.add("active");

            product[prev].classList.add("prev");

            productActive.classList.remove("animate_prev");
            productPrev.classList.remove("animate");
        }, timeout);
    }


}
