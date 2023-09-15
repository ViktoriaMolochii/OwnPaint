'use strict'
let f1 = document.forms.f1;
let TEXT = document.querySelector('.box_of_text');


let BOLD = document.querySelector('.bold_text');
let ITALIC = document.querySelector('.italic_text');
let UNDERLINE = document.querySelector('.underline_text');
let LINE_THROUGH = document.querySelector('.del_text');
BOLD.addEventListener('click', function (event) {
    event.preventDefault();
    TEXT.classList.toggle('bold');
});
ITALIC.addEventListener('click', function (event) {
    event.preventDefault();
    TEXT.classList.toggle('italic');
});
UNDERLINE.addEventListener('click', function (event) {
    event.preventDefault();
    TEXT.classList.toggle('underline');
});
LINE_THROUGH.addEventListener('click', function (event) {
    event.preventDefault();
    TEXT.classList.toggle('line_through');
});



let LEFT = document.querySelector('.start_text');
let CENTER = document.querySelector('.center_text');
let RIGHT = document.querySelector('.end_text');
LEFT.addEventListener('click', event => {
    event.preventDefault();
    TEXT.style.margin = "25px 25px";
});
CENTER.addEventListener('click', event => {
    event.preventDefault();
    TEXT.style.margin = "25px 450px";
});
RIGHT.addEventListener('click', event => {
    event.preventDefault();
    TEXT.style.margin = "25px 850px";
});


let FONT = document.querySelector('.font_text');
let SIZE = document.querySelector('.size_text');
FONT.addEventListener('change', event => {
    TEXT.style.fontFamily = event.target.value;
    FONT.value = "A";
    FONT.style.borderColor = "white";
});
SIZE.addEventListener('change', event => {
    TEXT.style.fontSize = event.target.value;
    SIZE.value = "T↕";
    FONT.style.borderColor = "white";
});

let COLOR_TEXT = document.querySelector('.color_text');
let COLORS_RANGE = document.querySelector('.colorText_choice');
let CLOSE = document.querySelector('.close');
let ONE_COLOR = document.querySelector('.block_of_colors');
COLOR_TEXT.addEventListener('click', event => {
    event.preventDefault();
    COLORS_RANGE.style.display = "block";
    document.body.style.background = "rgba(0,0,0, 0.3)";
});
CLOSE.addEventListener('click', event => {
    event.preventDefault();
    COLORS_RANGE.style.display = "none";
    document.body.style.background = "none";
});
ONE_COLOR.addEventListener('click', event => {
    event.preventDefault();
    TEXT.style.color = event.target.style.background;
});


let BACKGROUND = document.querySelector('.background_text');
let BACKGROUND_RANGE = document.querySelector('.colorBackground');
let CLOSE1 = document.querySelector('.close1');
let ONE_COLOR1 = document.querySelector('.block_of_colors1');
let COLORING = document.querySelector('.NameColor');
BACKGROUND.addEventListener('click', event => {
    event.preventDefault();
    BACKGROUND_RANGE.style.display = "block";
    document.body.style.background = "rgba(0,0,0, 0.3)";
});
CLOSE1.addEventListener('click', event => {
    event.preventDefault();
    BACKGROUND_RANGE.style.display = "none";
    document.body.style.background = "none";
});
COLORING.addEventListener('click', event => {
    event.preventDefault();
    ONE_COLOR1.style.display = "flex";
    IMAGE_RANGE.style.display = "none";
    FILE_RANGE.style.display = "none";
    document.body.style.background = "rgba(0,0,0, 0.3)";
});
ONE_COLOR1.addEventListener('click', event => {
    event.preventDefault();
    document.body.style.background = event.target.style.background;
});

let IMAGE = document.querySelector('.NameImage');
let IMAGE_RANGE = document.querySelector('.block_of_images');
let ONE_IMAGE = document.querySelector('.image_download');
IMAGE.addEventListener('click', event => {
    event.preventDefault();
    ONE_COLOR1.style.display = "none";
    IMAGE_RANGE.style.display = "flex";
    FILE_RANGE.style.display = "none";
    document.body.style.background = "rgba(0,0,0, 0.3)";

});
IMAGE_RANGE.addEventListener('click', function (event) {
    if (event.target.classList.contains('image_download')) {
        document.body.style.background = event.target.style.backgroundImage;
        document.body.style.backgroundSize = '100%';
    }
});

let FILE = document.querySelector('.NameImageFile');
let FILE_RANGE = document.querySelector('.file_background');
FILE.addEventListener('click', event => {
    event.preventDefault();
    ONE_COLOR1.style.display = "none";
    IMAGE_RANGE.style.display = "none";
    FILE_RANGE.style.display = "block";
    document.body.style.background = "rgba(0,0,0, 0.3)";

});
let FILE_IMAGE = document.querySelector('.file');
FILE_IMAGE.addEventListener('change', function (event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    document.body.style.background = `url(${url})`;
})


const password_reg = 1111;
const login = "admin";
let BTN_SIGN = document.querySelector('.button_sign');
let CLOSE_SIGN = document.querySelector('.close_sign');
let LOGIN = document.querySelector('.login');
let PASS = document.querySelector('.password_sign');
let WRONG = document.querySelector('.wrong');
let EMPTY = document.querySelector('.empty');
let MAIN = document.querySelector('.main_box');
let LOG = document.querySelector('.log');
let OUT = document.querySelector('.out');
LOG.addEventListener('click', function (event) {
    event.preventDefault();
    document.body.style.background = "rgba(0,0,0, 0.3)";
    if (LOG.innerHTML == `<img src="./styles/locked.png" width="25px">`) {
        MAIN.style.display = "block";
        OUT.style.display = "none";
    }
    else {
        MAIN.style.display = "none";
        OUT.style.display = "flex";
    }
})
BTN_SIGN.addEventListener('click', event => {
    event.preventDefault();
    if (LOGIN.value == '' & PASS.value == '') {
        EMPTY.style.display = "block";
        WRONG.style.display = "none";
        LOGIN.style.borderColor = "red";
        PASS.style.borderColor = "red";
    }
    else if (LOGIN.value == login & PASS.value == password_reg) {
        LOG.innerHTML = `<img src="./styles/unlock.png" width="25px">`;
        reset1();
    }
    else {
        WRONG.style.display = "block";
        EMPTY.style.display = "none";
        LOGIN.style.borderColor = "red";
        PASS.style.borderColor = "red";
    }

})
CLOSE_SIGN.addEventListener('click', function () {
    reset1();
});
function reset1() {
    LOGIN.value = "";
    PASS.value = "";
    MAIN.style.display = "none";
    LOGIN.style.borderColor = "silver";
    PASS.style.borderColor = "silver";
    EMPTY.style.display = "none";
    WRONG.style.display = "none";
    document.body.style.background = "none";
}
let CANCEL = document.querySelector('.cancel');
let SIGN_OUT = document.querySelector('.sign_out');
CANCEL.addEventListener('click', event => {
    event.preventDefault();
    OUT.style.display = "none";
    LOG.innerHTML = `<img src="./styles/unlock.png" width="25px">`;
    document.body.style.background = "none";
});
SIGN_OUT.addEventListener('click', event => {
    event.preventDefault();
    OUT.style.display = "none";
    LOG.innerHTML = `<img src="./styles/locked.png" width="25px">`;
    document.body.style.background = "none";
});



let CHANGE = document.querySelector('.update');
let BLOCK = document.querySelector('.block');
let UPDATE_BLOCK = document.querySelector('.update_block');
let TEXTAREA = document.querySelector('.textarea');
let AREA = document.querySelector('.area');
CHANGE.addEventListener('click', function (event) {
    event.preventDefault();
    BLOCK.style.display = "none";
    UPDATE_BLOCK.style.display = "block";
    TEXT.style.display = "none";
    TEXTAREA.style.display = "block";
    AREA.value = TEXT.innerHTML;
})

let SAVE = document.querySelector('.save');
SAVE.addEventListener('click', function () {
    TEXTAREA.style.display = "none";
    UPDATE_BLOCK.style.display = "none";
    BLOCK.style.display = "flex";
    TEXT.style.display = "block";
    TEXT.innerHTML = AREA.value;
});
let TABLE = document.querySelector('.table');
let CREATE_TABLE = document.querySelector('.create_table');
TABLE.addEventListener('click', function (event) {
    event.preventDefault();
    CREATE_TABLE.style.display = "block";
    document.body.style.background = "rgba(0,0,0, 0.3)";
});
let CLOSE_TABLE = document.querySelector('.close_table');
CLOSE_TABLE.addEventListener('click', function () {
    CREATE_TABLE.style.display = "none";
    document.body.style.background = "none";
});
let CREATE = document.querySelector('.btn_table');
let INPUT1 = document.getElementsByName('tablee1');
let CHOICE_SELECT = document.getElementById('colorBorder');
let STYLE_SELECT = document.getElementById('styleBorder');
let valueColor;
let valueStyle;
let COUNT_TR = document.querySelector('.tablee1');
let COUNT_TD = document.querySelector('.tablee4');
let WIDTH_TD = document.querySelector('.tablee2');
let HEIGHT_TD = document.querySelector('.tablee5');
let WIDTH_BRD = document.querySelector('.tablee3');
function table_creating() {
    let table = '';
    table = table + "<table>";
    for (let i = 1; i <= COUNT_TR.value; i++) {
        table = table + "<tr>";
        for (let j = 1; j <= COUNT_TD.value; j++) {
            table += `<td style='width:${WIDTH_TD.value}px; height:${HEIGHT_TD.value}px; border: ${WIDTH_BRD.value}px ${STYLE_SELECT.value} ${CHOICE_SELECT.value}'> TD </td>`;
        }
        table += "</tr>";
    }
    table = table + "</table>";
    AREA.value += table;
}

CREATE.addEventListener('click', event => {
    event.preventDefault();
    valueColor = CHOICE_SELECT.options[CHOICE_SELECT.selectedIndex].value;
    valueStyle = STYLE_SELECT.options[STYLE_SELECT.selectedIndex].value;
    if (valueColor == "choose color") {
        CHOICE_SELECT.style.borderColor = "red";
    }
    else {
        CHOICE_SELECT.style.borderColor = "silver";
    }
    if (valueStyle == "choose style") {
        STYLE_SELECT.style.borderColor = "red";
    }
    else {
        STYLE_SELECT.style.borderColor = "silver";
    }
    INPUT1.forEach(element => {
        if (element.value == "") {
            element.style.borderColor = "red";
        }
        else {
            element.style.borderColor = "silver";
        }
    });
    if (valueColor != "choose color" && valueStyle != "choose style" && COUNT_TR != ""
        && COUNT_TD != "" && WIDTH_TD != "" &&
        HEIGHT_TD != "" && WIDTH_BRD != "") {
        table_creating();
    }
});

function reset() {
    STYLE_SELECT.style.borderColor = "silver";
    CHOICE_SELECT.style.borderColor = "silver";
    INPUT1.forEach(element => {
        element.style.borderColor = "silver";
        if (element.value != "") element.value = "";
    });
}
let RESET = document.querySelector('.btn_reset1');
RESET.addEventListener('click', function (event) {
    event.preventDefault();
    reset();
})

let OL = document.querySelector('.list1');
let CREATE_OL = document.querySelector('.create_ol');
OL.addEventListener('click', function (event) {
    event.preventDefault();
    CREATE_OL.style.display = "block";
    document.body.style.background = "rgba(0,0,0, 0.3)";
});
let CLOSE_OL = document.querySelector('.close_ol');
CLOSE_OL.addEventListener('click', function () {
    CREATE_OL.style.display = "none";
    document.body.style.background = "none";
});

let BTN_OL = document.querySelector('.btn_ol');
let OL_TEXT = document.querySelector('.ol1');
let OL_TYPE = document.getElementById('TypeOfMarks');
let valueType;
function list1_creating() {
    let list1 = '';
    list1 = list1 + "<ol>";
    for (let i = 1; i <= OL_TEXT.value; i++) {
        list1 += `<li style='list-style-type:${OL_TYPE.value}'> item${i} </li>`;
    }
    list1 = list1 + "<ol>";
    AREA.value += list1;;
}
BTN_OL.addEventListener('click', event => {
    event.preventDefault();
    valueType = OL_TYPE.options[OL_TYPE.selectedIndex].value;
    if (valueType == "choose OL type mark") {
        OL_TYPE.style.borderColor = "red";
    }
    else {
        OL_TYPE.style.borderColor = "silver";
    }
    if (OL_TEXT.value == "") {
        OL_TEXT.style.borderColor = "red";
    }
    else {
        OL_TEXT.style.borderColor = "silver";
    }
    if (valueType != "choose OL type mark" && OL_TEXT.value != "") {
        list1_creating();
    }
});

let RESET2 = document.querySelector('.btn_reset2');
RESET2.addEventListener('click', function (event) {
    event.preventDefault();
    OL_TYPE.style.borderColor = "silver";
    OL_TEXT.style.borderColor = "silver";
    if (OL_TEXT.value != "") OL_TEXT.value = "";
})


let UL = document.querySelector('.list2');
let CREATE_UL = document.querySelector('.create_ul');
UL.addEventListener('click', function (event) {
    event.preventDefault();
    CREATE_UL.style.display = "block";
    document.body.style.background = "rgba(0,0,0, 0.3)";
});
let CLOSE_UL = document.querySelector('.close_ul');
CLOSE_UL.addEventListener('click', function () {
    CREATE_UL.style.display = "none";
    document.body.style.background = "none";
});

let BTN_UL = document.querySelector('.btn_ul');
let UL_TEXT = document.querySelector('.ul1');
let UL_TYPE = document.getElementById('TypeOf');
let valueOf;
function list2_creating() {
    let list2 = '';
    list2 = list2 + "<ul>";
    for (let i = 1; i <= UL_TEXT.value; i++) {
        list2 += `<li style='list-style-type:${UL_TYPE.value}'> item${i} </li>`;
    }
    list2 = list2 + "<ul>";
    AREA.value += list2;
}
BTN_UL.addEventListener('click', event => {
    event.preventDefault();
    valueOf = UL_TYPE.options[UL_TYPE.selectedIndex].value;
    if (valueOf == "choose UL type mark") {
        UL_TYPE.style.borderColor = "red";
    }
    else {
        UL_TYPE.style.borderColor = "silver";
    }
    if (UL_TEXT.value == "") {
        UL_TEXT.style.borderColor = "red";
    }
    else {
        UL_TEXT.style.borderColor = "silver";
    }
    if (valueOf != "choose UL type mark" && UL_TEXT.value != "") {
        list2_creating();
    }
});

let RESET3 = document.querySelector('.btn_reset3');
RESET3.addEventListener('click', function (event) {
    event.preventDefault();
    UL_TYPE.style.borderColor = "silver";
    UL_TEXT.style.borderColor = "silver";
    if (UL_TEXT.value != "") UL_TEXT.value = "";
})