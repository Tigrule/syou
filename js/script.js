// let leftSide = window.document.getElementById('left');
// let listener = function()

let aLeft = document.getElementById('left');

aLeft.onmousedown = function (e) { // 1. отследить нажатие
    if (e.target.href) {
        return;
    }
    aLeft.style.position = 'absolute';
    moveAt(e);
    document.body.appendChild(aLeft);
    aLeft.style.zIndex = '100';

    function moveAt(e) {
        aLeft.style.left = e.pageX - aLeft.offsetWidth / 2 + 'px';
        aLeft.style.top = e.pageY - aLeft.offsetHeight / 2 + 'px';
    }

    document.onmousemove = function (e) {
        // console.log(e);
        moveAt(e);
    }

    // 4. отследить окончание переноса
    aLeft.onmouseup = function () {
        document.onmousemove = null;
        aLeft.onmouseup = null;
    }
}
aLeft.ondragstart = function () {
    return false;
};