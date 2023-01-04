let img0 = document.getElementById("img0"),
    img1 = document.getElementById("img1"),
    img2 = document.getElementById("img2"),
    img3 = document.getElementById("img3"),
    img4 = document.getElementById("img4"),
    body = document.getElementById("body"),
    img = document.getElementById("img"),
    counter = 0;

img0.onclick = function(){
    body.setAttribute(
        "style",
        "background-color: #000;"
    )
    img.innerHTML = '<img src="0.png" id="img0" alt="">'
}
img1.onclick = function(){
    body.setAttribute(
        "style",
        "background-color: #778b9e;"
    )
    img.innerHTML = '<img src="1.png" id="img0" alt="">'
}
img2.onclick = function(){
    body.setAttribute(
        "style",
        "background-color: #607d8b;"
    )
    img.innerHTML = '<img src="2.png" id="img0" alt="">'
}
img3.onclick = function(){
    body.setAttribute(
        "style",
        "background-color: #9e9e9e;"
    )
    img.innerHTML = '<img src="3.png" id="img0" alt="">'
}
img4.onclick = function(){
    body.setAttribute(
        "style",
        "background-color: #c64672;"
    )
    img.innerHTML = '<img src="4.png" id="img0" alt="">'
}