// let opts = {
//     lines: 13,
//     length: 28,
//     width: 14,
//     radius: 42,
//     scale: 1,
//     corners: 1,
//     color: '#FFF',
//     opacity: 0.25,
//     rotate: 0,
//     direction: 1,
//     speed: 1,
//     trail: 60,
//     fps: 20,
//     zIndex: 2e9,
//     className: 'spinner',
//     top: '50%',
//     left: '50%',
//     shadow: false,
//     hwaccel: false,
//     position: 'absolute',
//    },
//    target = document.getElementById('spinner'),
//     spinner = new Spinner(opts).spin(target);

import weatherKyiv from "./modules/weatherKyiv";
import weatherLondon from "./modules/weatherLondon";
import weatherNewYourk from "./modules/weatherNewYourk";
weatherKyiv();
weatherLondon();
weatherNewYourk();