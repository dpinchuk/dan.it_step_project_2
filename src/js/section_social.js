let arrayObjectSocial = [
    {
        img: "img/common/section-social/social-img-1.png",
        name: "steven strange",
        position: "@DoctorS",
        span: "@Pixelbuddha",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur eligendi eos est excepturi exercitationem maiores",
        time: "2 hours ago"
    },
    {
        img: "img/common/section-social/social-img-2.png",
        name: "ivan ionov",
        position: "@EngineerD",
        span: "@Sizebuddha",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur eligendi eos est excepturi exercitationem maiores",
        time: "3 hours ago"
    },
    {
        img: "img/common/section-social/social-img-3.png",
        name: "alex guetta",
        position: "@SupportX",
        span: "@Redisbuddha",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur eligendi eos est excepturi exercitationem maiores",
        time: "4 hours ago"
    },
    {
        img: "img/common/section-social/social-img-4.png",
        name: "erich fildman",
        position: "@DeveloperJ",
        span: "@Writebuddha",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur eligendi eos est excepturi exercitationem maiores",
        time: "5 hours ago"
    },
];

let arrayCurrent = [];
for (let i = 0; i < arrayObjectSocial.length; i++) {
    arrayCurrent[i] = arrayObjectSocial[i];
}

let current = 0;

let readySocial = () =>  {
    document.getElementById("socialItem").innerHTML =
        "<img src='" + arrayObjectSocial[0].img + "' alt='' class='section-social__carusel-social-item__img'>" +
        "<h3 class='section-social__carusel-social-item__name text-capitalize'>" + arrayObjectSocial[0].name + "</h3>" +
        "<h3 class='section-social__carusel-social-item__position text-capitalize'>" + arrayObjectSocial[0].position + "</h3>" +
        "<p class='section-social__carusel-social-item__description'><span>" + arrayObjectSocial[0].span + "</span></p>" +
        "<h3 class='section-social__carusel-social-item__time'>" + arrayObjectSocial[0].time + "</h3>";
};

document.addEventListener("DOMContentLoaded", readySocial);

let showImages = () => {
    clearDiv("socialItem");
    document.getElementById("socialItem").innerHTML =
        "<img src='" + arrayObjectSocial[current].img + "' alt='' class='section-social__carusel-social-item__img'>" +
        "<h3 class='section-social__carusel-social-item__name text-capitalize'>" + arrayObjectSocial[current].name + "</h3>" +
        "<h3 class='section-social__carusel-social-item__position text-capitalize'>" + arrayObjectSocial[current].position + "</h3>" +
        "<p class='section-social__carusel-social-item__description'><span>" + arrayObjectSocial[current].span + "</span></p>" +
        "<h3 class='section-social__carusel-social-item__time'>" + arrayObjectSocial[current].time + "</h3>";

};

let previous = () => {
    current--;
    if (current < 0) {
        current = arrayCurrent.length - 1;
    }
    let temp = arrayCurrent.pop();
    arrayCurrent.unshift(temp);
    showImages(arrayAboutImages, current);
};

let next = () => {
    current++;
    if (current > arrayCurrent.length - 1) {
        current = 0;
    }
    let temp = arrayCurrent.shift();
    arrayCurrent[arrayAboutImages.length] = temp;
    showImages(arrayAboutImages, current);
};