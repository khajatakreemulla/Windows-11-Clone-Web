// ------------------------------- javascript for body --------------------------------------------

// let bodyclick = document.getElementById('bodyclick');
// bodyclick.addEventListener('click', ()=>{
//     console.log("cliked")
//     if(menutoggle.style.bottom == '60px' || searchtoggle.style.bottom == '60px' ){
//         menutoggle.style.bottom = '-650px'; 
//         searchtoggle.style.bottom = '-650px'
//     }
// })



// ---------------------------- javascript for menutoggle --------------------------------------
let startmenu = document.getElementById('starmenu');
let menutoggle = document.getElementById('menu-toggle');
startmenu.addEventListener('click', () => {


    if (menutoggle.style.bottom == '60px') {
        menutoggle.style.bottom = '-650px';

    } else {
        menutoggle.style.bottom = '60px'
        searchtoggle.style.bottom = '-650px'
        mainwidget.style.left = '-450px';
    }
})

// ---------------------------- javascript for searchtoglle --------------------------------------

let searchmenu = document.getElementById('searchmenu')
let searchtoggle = document.getElementById('search-toggle');

searchmenu.addEventListener('click', () => {

    if (searchtoggle.style.bottom == '60px') {
        searchtoggle.style.bottom = '-650px'

    } else {
        searchtoggle.style.bottom = '60px'
        menutoggle.style.bottom = '-650px';
        mainwidget.style.left = '-450px';
    }
})


let allform = document.getElementById('allform');
let appform = document.getElementById('appform');
let documentform = document.getElementById('documentform');
let webform = document.getElementById('webform');

// --------javascript for all form of search bar------------
function allforms() {
    allform.style.left = '0px';
    allform.style.opacity = '1';
    webform.style.left = '500px'
    webform.style.opacity = '0'
    documentform.style.left = '500px'
    documentform.style.opacity = '0'
    appform.style.left = '500px';
    appform.style.opacity = '0'

}
// -------------java script for allapps button of search bar------------
function allapps() {
    documentform.style.left = '500px'
    documentform.style.opacity = '0'
    allform.style.left = '-650px';
    appform.style.left = '0px';
    allform.style.opacity = '0';
    appform.style.opacity = '1';
    webform.style.left = '500px'
    webform.style.opacity = '0'
}
// --------------- javascript for alldocuments button of search bar--------
function alldocuments() {
    documentform.style.left = '0px'
    documentform.style.opacity = '1'
    allform.style.left = '-650px';
    appform.style.left = '-650px';
    allform.style.opacity = '0';
    appform.style.opacity = '0';
    webform.style.left = '500px'
    webform.style.opacity = '0'
    webform.style.left = '500px'
    webform.style.opacity = '0'
    

}
//------- javascript for all web button of search bar------------
function allwebs() {
    webform.style.left = '0px'
    webform.style.opacity = '1'
    documentform.style.left = '-650px'
    documentform.style.opacity = '0'
    allform.style.left = '-650px';
    appform.style.left = '-650px';
    allform.style.opacity = '0';
    appform.style.opacity = '0';
}


// ----------------------------- javascript for widgettoggle -----------------------------------------


let widgetmenu = document.getElementById('widgetmenu');
let mainwidget = document.getElementById('mainwidget');

widgetmenu.addEventListener('click', () => {
    console.log('clicked')
    if (mainwidget.style.left == '0px') {
        mainwidget.style.left = '-450px';
    } else {
        mainwidget.style.left = '0px'
        menutoggle.style.bottom = '-650px';
        searchtoggle.style.bottom = '-650px'
    }
});


// --------------------------- javascript for searching option ------------------------------------------

let textbar = document.getElementById('textbar');
