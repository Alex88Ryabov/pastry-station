import gsap, { MotionPathPlugin } from "gsap/all";

function basketIconAnimation() {
    const masterTl = gsap.timeline();
    const basketIcon = document.querySelector(".js-basket-btn");

    gsap.registerPlugin(MotionPathPlugin);


    masterTl.add(
        gsap.to(basketIcon, {
            duration: 0.3,
            delay: 0.3,
            scale: 3,
            top: 2,
            ease: 'easeIn',

            onComplete() {
                gsap.to(basketIcon, {
                    duration: 0.2,
                    scale: 1,
                    ease: 'easeIn'
                })
            }
        }),
        0
    );
}

module.exports = basketIconAnimation;