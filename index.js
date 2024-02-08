const pageTurnbtn = document.querySelectorAll('.nextprev-btn');

pageTurnbtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnid = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnid);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
})

const pages = document.querySelectorAll('.book-page.page-right');
const contactMebtn = document.querySelector('.btn.contact');

contactMebtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index
            }, 500);
        }, (index + 1) * 200 + 100)
    })
}

let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

const backProfilebtn = document.querySelector('.back-profile');

backProfilebtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            },500);
        }, (index + 1) * 200 + 100);
    })
}

const coverRight = document.querySelector('.cover.cover-right');

setTimeout(() => {
    coverRight.classList.add('turn');
},2100);

setTimeout(() => {
    coverRight.style.zIndex = -1;
},2800);

pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        },500);
    }, (index + 1) * 200 + 2100);
})