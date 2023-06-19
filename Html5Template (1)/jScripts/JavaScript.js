
var pictureArray = ['images/מנות פסטה/pesto.jpg', 'images/מנות פסטה/cream.jpg', 'images/מנות פסטה/bolonaz.jpg',
    'images/מנות פסטה/mashroom.jpg', 'images/מנות פסטה/meetbolls.jpg', 'images/מנות פסטה/tommato.jpg'];
var pictureNameArray = ["פסטו", "שמנת", "בולונז", "פיטריות", "כדורי בשר", "עגבניות"];
var currentPicture = 0;

function currentName() {
    return pictureNameArray[currentPicture];
}

function currentPic() {
    return pictureArray[currentPicture];
}

function next() {
    currentPicture++;
    if (currentPicture >= pictureArray.length) {
        currentPicture = 0; // Reset to the first photo
    }
    update();
}

function prev() {
    currentPicture--;
    if (currentPicture <0) {
        currentPicture = pictureArray.length - 1; // Go to the last photo
    }
    update();
}

function choose(pictureIndex) {
    currentPicture = pictureIndex;
    update();
}

function update() {
    document.getElementById("banner").innerHTML = "";
    document.getElementById("currentName").innerHTML = currentName();
    document.getElementById("currentPic").src = currentPic();
    document.getElementById("currentPic").alt = currentName();
    document.getElementById("imgLocation").innerHTML = currentPicture + 1 + "/" + pictureArray.length;

    for (var i = 0; i < pictureArray.length; i++) {
        var classes = "banner-image";
        if (i == currentPicture) {
            classes += " current-image";
        }
        var bannerImage = "<img class='" + classes + "' onclick='choose("+i+")' src='" + pictureArray[i] + "' alt='"+pictureNameArray[i]+"' />"
        document.getElementById("banner").innerHTML += bannerImage;
    }
}

window.addEventListener("load", update);