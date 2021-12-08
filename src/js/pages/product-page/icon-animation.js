import gsap, { MotionPathPlugin } from "gsap/all";


const basketIcon = document.querySelector(".js-basket-btn img");
const basketIconWidth = basketIcon.getBoundingClientRect().width;
const basketBottomDistance = window.innerHeight - basketIcon.getBoundingClientRect().bottom;

function iconAnimation() {
    const masterTl = gsap.timeline();
    const iconWrap = document.querySelector(".js-product-icon");
    const iconTopDistance = iconWrap.getBoundingClientRect().top;
    const iconAnimationElement = iconWrap.querySelector("img").cloneNode(true);
    iconWrap.appendChild(iconAnimationElement);
    gsap.registerPlugin(MotionPathPlugin);

    masterTl.add(
        iconAnimationElement.style.zIndex = '201',
        gsap.to(iconAnimationElement, {
            duration: 0.8,
            scale: 2,
            ease: 'easeIn',
            motionPath: {
                path: [
                    { "x": 0, "y": 0 },
                    { "x": window.innerWidth / 3.5, "y": -250 },
                    {
                        "x": (window.innerWidth - basketIconWidth) / 2,
                        "y": window.innerHeight - basketBottomDistance - iconTopDistance - (iconAnimationElement.getBoundingClientRect().height * 2)
                    },
                    {
                        "x": (window.innerWidth - basketIconWidth) / 2,
                        "y": window.innerHeight - basketBottomDistance - iconTopDistance - (iconAnimationElement.getBoundingClientRect().height * 2)
                    }
                ],
                type: "cubic"
            },

            onComplete() {
                iconWrap.removeChild(iconAnimationElement);
                iconAnimationElement.style.zIndex = '0';

            }
        }),
        0
    );
}

module.exports = iconAnimation;