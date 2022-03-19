
navigationElement = document.getElementById("navigation");
burgerElement = document.getElementById("navigation-burger");

isOpen = false;
overlay = document.createElement("div",null, {
    class: ['navigation-overlay'],
});


function init(){
    burgerElement.addEventListener("click", () => toggle());
    overlay.addEventListener("click", () => close());

    navigationElement
        .querySelector('.navigation-item.active a')
        .addEventListener("click", (e) => {
            e.preventDefault();
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            close();
        });
}

function open(){
    navigationElement.style.transition = '.25s';
    navigationElement.style.transform = 'translate(0)';
    burgerElement.classList.add('open');

    document.body.style.overflowY = 'hidden';
    navigationElement.parentNode.insertBefore(overlay, navigationElement)

    isOpen = true;
}

function close(){
    navigationElement.style.transform = 'translate(-105%)';
    burgerElement.classList.remove('open');

    document.body.style.overflowY = 'auto';
    overlay.parentNode.removeChild(overlay);

    isOpen = false;

    setTimeout(()=>(this.navigationElement.style.transitionProperty = 'none'), 250);
}

function toggle(){
    if(isOpen)close();
    else open();
}
init()

// class Navigation {
//     constructor(){
//         this.navigationElement = document.getElementById("navigation");
//         this.burgerElement = document.getElementById("navigation-burger");

//         this.isOpen = false;
//         this.overlay = createElement("div",null, {
//             classes: ['navigation-overlay'],
//         });
//     }

//     init(){
//         this.burgerElement.addEventListener("click", () => this.toggle());
//         this.overlay.addEventListener("click", () => this.close());

//         this.navigationElement
//             .querySelector('.navigation-item.active a')
//             .addEventListener("click", (e) => {
//                 e.preventDefault();
//                 document.body.scrollTop = 0;
//                 document.documentElement.scrollTop = 0;
//                 this.close();
//             });
//     }

//     open(){
//         this.navigationElement.style.transition = '.25s';
//         this.navigationElement.style.transform = 'translate(0)';
//         this.burgerElement.classList.add('open');

//         document.body.style.overflowY = 'hidden';
//         this.navigationElement.parentNode.insertBefore(this.overlay, this.navigationElement)

//         this.isOpen = true;
//     }

//     close(){
//         this.navigationElement.style.transform = 'translate(-105%)';
//         this.burgerElement.classList.remove('open');

//         document.body.style.overflowY = 'auto';
//         this.overlay.parentNode.removeChild(this.overlay);

//         this.isOpen = false;

//         setTimeout(()=>(this.navigationElement.style.transitionProperty = 'none'), 250);
//     }

//     toggle(){
//         if(this.isOpen)this.close();
//         else this.open();
//     }
// }

// let nav = new Navigation();
// nav.init();