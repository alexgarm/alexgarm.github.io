// $(function() {

// Custom JS

let pos = 0
let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

function fadeOut(elem, proc) {
    elem.style.opacity = proc
}
let bg1 = document.getElementById('bg1')
let bg2 = document.getElementById('bg2')
let bg3 = document.getElementById('bg3')
let bg4 = document.getElementById('bg4')
let bg5 = document.getElementById('bg5')

window.addEventListener('scroll', function() {
    pos = (window.pageYOffset / scrollHeight) * 100
    posY = window.pageYOffset
    let section = 76.43 / 4
        // document.getElementById('log').innerHTML = window.pageYOffset + 'px';
        //document.getElementById('log').innerHTML = pos + '%' +' section: '+ document.documentElement.clientHeight ;
    if (pos <= section) {
        fadeOut(bg1, (1 - (pos / section)))
        fadeOut(bg2, 1)
    } else if (pos <= (section * 2)) {
        fadeOut(bg1, 0)
        fadeOut(bg2, (1 - ((pos - section) / section)))
        fadeOut(bg3, 1)
    } else if (pos <= (section * 3)) {
        fadeOut(bg2, 0)
        fadeOut(bg3, (1 - ((pos - section * 2) / section)))
        fadeOut(bg4, 1)
    } else if (pos <= (section * 4)) {
        fadeOut(bg3, 0)
        fadeOut(bg4, (1 - ((pos - section * 3) / section)))
        fadeOut(bg5, 1)
    }
    // else if(pos<=(section*5)){
    //   fadeOut(bg4, 0)
    //   fadeOut(bg5,(1-(pos/(section*5))))
    // }



});


// });