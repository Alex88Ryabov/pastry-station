function initPopup (popupText, popupImg) {
    const popup = document.querySelector('.js-popup');
    const popupCloseBtn = popup.querySelector('.js-popup-close');
    const popupTitle = popup.querySelector('.js-popup-title');
    const popupImage = popup.querySelector('.js-popup-img');
    
    popup.style.display = 'block';
    popupTitle.innerText = popupText;
    popupImage.setAttribute('src', popupImg);


    popupCloseBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        
    })
}

module.exports = initPopup;