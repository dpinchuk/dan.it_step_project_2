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
        description: "Ab ad architecto aspernatur commodi consectetur culpa, dolorum et expedita inventore, dolorum et expedita inventore, dixi",
        time: "3 hours ago"
    },
    {
        img: "img/common/section-social/social-img-3.png",
        name: "david guetta",
        position: "@SupportX",
        span: "@Redisbuddha",
        description: "Adipisci aperiam cum, doloribus impedit non perferendis placeat provident quam sint suscipit, doloribus impedit non perferendis",
        time: "4 hours ago"
    },
    {
        img: "img/common/section-social/social-img-4.png",
        name: "erich fildman",
        position: "@DeveloperJ",
        span: "@Writebuddha",
        description: "Assumenda consequuntur cumque doloremque eum, magni, minus molestiae quibusdam reiciendis repellat, repudiandae similique ut",
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
        "<p class='section-social__carusel-social-item__description'><span>" + arrayObjectSocial[0].span + "</span>" + " " + arrayObjectSocial[0].description + "</p>" +
        "<h3 class='section-social__carusel-social-item__time'>" + arrayObjectSocial[0].time + "</h3>";
};

document.addEventListener("DOMContentLoaded", readySocial);

let showImages = () => {
    //clearDiv("socialItem");
    document.getElementById("socialItem").innerHTML =
        "<img src='" + arrayObjectSocial[current].img + "' alt='' class='section-social__carusel-social-item__img'>" +
        "<h3 class='section-social__carusel-social-item__name text-capitalize'>" + arrayObjectSocial[current].name + "</h3>" +
        "<h3 class='section-social__carusel-social-item__position text-capitalize'>" + arrayObjectSocial[current].position + "</h3>" +
        "<p class='section-social__carusel-social-item__description'><span>" + arrayObjectSocial[current].span + "</span>" + " " + arrayObjectSocial[current].description + "</p>" +
        "<h3 class='section-social__carusel-social-item__time'>" + arrayObjectSocial[current].time + "</h3>";

};

let previous = () => {
    current--;
    if (current < 0) {
        current = arrayCurrent.length - 1;
    }
    let temp = arrayCurrent.pop();
    arrayCurrent.unshift(temp);
    showImages(arrayCurrent, current);
};

let next = () => {
    current++;
    if (current > arrayCurrent.length - 1) {
        current = 0;
    }
    let temp = arrayCurrent.shift();
    arrayCurrent[arrayCurrent.length] = temp;
    showImages(arrayCurrent, current);
};