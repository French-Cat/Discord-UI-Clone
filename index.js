function randomAvi() {
  return `imgs/avatars/${Math.floor(Math.random() * 6)}.png`
}
function openModal() {
    const modal = document.querySelector("#modal");
    document.querySelector(".main").classList.add("modal-open");

    modal.classList.add("open");
}

function closeModal() {
    modal.classList.remove("open");
    document.querySelector(".main").classList.remove("modal-open");
}

window.addEventListener("keydown", (event) => {
    if (event.keyCode !== 27) return;
    closeModal();

    console.log(event);
});
{
var arr = document.getElementsByClassName("img")
arr = [].slice.call(arr);
arr.forEach(e => {
    e.src = randomAvi()
})
}
{
    var arr = document.getElementsByClassName("guild")
    arr = [].slice.call(arr);
    arr.forEach(e => {
        if(Math.floor(Math.random() * 1001) > 500) {
            if (e.classList.contains("home")) {} else {
            e.classList.toggle("unread")
        }
    }
    })
}