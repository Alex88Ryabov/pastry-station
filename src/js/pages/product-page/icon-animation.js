import gsap, { MotionPathPlugin } from "gsap/all";

function iconAnimation () {
    const masterTl = gsap.timeline();
    const iconWrap = document.querySelector(".js-product-icon");
    const iconAnimationElement = iconWrap.querySelector("img").cloneNode(true);
    
    console.log(window.innerWidth / 2);
    iconWrap.appendChild(iconAnimationElement);
    gsap.registerPlugin(MotionPathPlugin);
    

    masterTl.add(
        gsap.to(iconAnimationElement, {
            duration: 1,
            scale: 4,
            ease: 'easeIn',
            motionPath: {
                path: [
                    { "x": "0", "y": "0" },
                    { "x": window.innerWidth / 3.5, "y": -window.innerHeight / 1.9  },
                    { "x": window.innerWidth / 2.1, "y": window.innerHeight / 3 },
                    { "x": window.innerWidth / 2.1, "y": window.innerHeight / 2 }
                ],
                type: "cubic"
            },

            onComplete() {
                iconWrap.removeChild(iconAnimationElement)
            }
        }),
        0
    );
}

module.exports = iconAnimation;