let showMenu = () => {
    let divButton = document.getElementById("fokioMenu");

    let ddd = document.getElementsByClassName("btn__menu");

    let divMenu = document.getElementById("menuItems");

    if (divMenu.style.display === 'block') {
        divButton.style.backgroundImage = 'url(../img/common/header/header_button_menu.png) no-repeat;';
        divMenu.style.display = 'none';
    } else {
        //ddd[0]. = "";
        //ddd[0].style = 'background: url(../img/common/header/cross.png) no-repeat;';
        //ddd[0].style.width = "50px";
        ddd.classList.add('cross');

        divMenu.style.display = 'block';
    }

};