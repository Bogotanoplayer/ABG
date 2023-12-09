const burguerMenu = document.querySelector('.burguer-menu');
const mobileMenu = document.querySelector('.mobile-menu');
//const addCloseBurguerMenu = document.querySelector('.add-close-menu');
//const closeBurguerMenuIcon = document.querySelector('.close-button')

burguerMenu.addEventListener('click', openMenu);


function openMenu() {
    mobileMenu.classList.toggle('inactive');
    
    //if (!mobileMenu.classList.contains('inactive')) {
        // Menu is open, create the close button
        //createCloseButton();
    //} else {
        // Menu is closed, remove the close button
        //removeCloseButton();
    //}
}

//function createCloseButton() {
   // const closeHamMenu = document.createElement('img');
   // closeHamMenu.setAttribute('src', './Logos/X_logo_2023.svg');
   // closeHamMenu.classList.add('close-button'); // Add a class for styling if needed
    //addCloseBurguerMenu.appendChild(closeHamMenu);
    //burguerMenu.classList.add('inactive')
    

//}
//function removeCloseButton() {
    //const closeButton = addCloseBurguerMenu.querySelector('.close-button');
    //if (closeButton) {
    //    closeButton.remove();
     //   burguerMenu.classList.remove('inactive')
   // }
//}
//function closeMenu() {
   // const closeBurguerMenuIcon = document.querySelector('.close-button')
    //closeBurguerMenuIcon.addEventListener('click', closeMenu)
    //mobileMenu.classList.add('inactive')
//}
