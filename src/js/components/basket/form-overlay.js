function formOverlay (overlayToggle, bodyPositionToggle) {
    const body = document.querySelector('body');
    const overlay = body.querySelector('.js-form-overlay');

    overlay.style.display = overlayToggle;
    body.style.position = bodyPositionToggle;

    overlay.addEventListener('click', () => {
        
    })
}

module.exports = formOverlay;