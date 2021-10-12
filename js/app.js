//UI
const imgcontainers = document.querySelectorAll('.imgs');
const emptycontainers = document.querySelectorAll('.empty');


const imgboxes = document.querySelectorAll('.imgbox');


function removebox() {
    imgboxes.forEach(imgbox => {

        if (imgbox.childElementCount !== 1) {
            imgbox.remove();
        }
    });
}

imgcontainers.forEach(imgcontainer => {

    imgcontainer.addEventListener('dragstart', dragstart);
    imgcontainer.addEventListener('dragend', dragend);

});

var selectimg = null;


function dragstart(e) {

    selectimg = e.target;

    this.className += " hold";

    setTimeout(() => {
        this.className = "invisible";
    }, 0);
}

function dragend() {
    this.className = "imgs";

    selectimg = null;
}

emptycontainers.forEach(emptycontainer => {
    // console.log(emptycontainer);

    emptycontainer.addEventListener('dragover', dragover);

    emptycontainer.addEventListener('dragenter', () => {
        emptycontainer.classList.add("hovered");

        if (emptycontainer.id !== selectimg.getAttribute('img-id')) {
            emptycontainer.style.backgroundColor = "rgba(255, 0, 0, 0.6)";
        } else {
            emptycontainer.style.backgroundColor = "#36d957";
        }
    });

    emptycontainer.addEventListener('dragleave', () => {
        emptycontainer.classList.remove("hovered");

        if (emptycontainer.id !== selectimg.getAttribute('img-id')) {
            emptycontainer.style.backgroundColor = "white";
        } else {
            emptycontainer.style.backgroundColor = "white";
        }
    });

    emptycontainer.addEventListener('drop', (e) => {
        const text = emptycontainer.querySelector('h3');

        e.target.classList.remove("hovered");

        if (emptycontainer.id === selectimg.getAttribute('img-id')) {
            text.style.display = "none";
            e.target.classList.add("drop");
            emptycontainer.style.backgroundColor = "white";
            emptycontainer.appendChild(selectimg);
            removebox();
        } else {
            emptycontainer.style.backgroundColor = "white";
        }
    });
});


function dragover(e) {
    e.preventDefault();
}