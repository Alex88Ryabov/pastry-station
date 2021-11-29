function initPopup (popupClass, styleDisplay) {
    const popup = document.querySelector(popupClassclass);
    const popupCloseBtn = popup.querySelector('.js-popup-close');

    popup.style.display = styleDisplay;
    popupCloseBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        
    })
}

module.exports = initPopup;