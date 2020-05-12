const board = document.querySelector(".board");
const cross =  document.querySelector(".cross");

board.addEventListener("mousemove", function(e) {

    cross.style.left = `${e.pageX}px`
    cross.style.top =  `${e.pageY}px`

})


setInterval(function() {
    let pos = 0;

    const div = document.createElement("div");
    div.classList.add("zombie");

    {
        const min = 20;
        const max = 230;
        pos = Math.floor(Math.random()*(max-min+1)+min);
        div.style.bottom = `${pos}px`
    }

    {
        const min = 6;
        const max = 9;
        const speed = Math.floor(Math.random()*(max-min+1)+min);
        div.style.animationDuration = `0.7s, ${speed}s`
    }

    {
        div.style.zIndex = 230 - pos;
    }

    div.addEventListener("animationend", function() {
        this.remove();
    })

    div.addEventListener("click", function() {
        this.remove();
    })

    board.appendChild(div);

}, 1200)