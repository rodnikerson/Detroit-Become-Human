document.addEventListener('DOMContentLoaded', () => {
    let tl = new TimelineMax();

    tl.fromTo('.detroit-loader', 1, {width: '100%'}, {width: '0%', delay: 5, ease: Expo.easeInOut});

    tl.fromTo('.detroit-video', .75, {width: '0%'}, {width: '100%', opacity: 1, ease: Expo.easeInOut});

    tl.fromTo('.logo', .75, {y: -50, opacity: 0}, {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=.5');

    tl.fromTo('.nav-list', .75, {y: -50, opacity: 0}, {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=.5');

    tl.fromTo('.nav-social', .75, {y: -50, opacity: 0}, {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=.5');

    tl.fromTo('.container-item-1', .75, {y: -100, opacity: 0}, {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=.5');

    tl.fromTo('.hamburguer', .75, {y: -50, opacity: 0}, {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=.5');
})