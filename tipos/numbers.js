"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villans = 20;
    if (avengers < villans) {
        console.log('problemas');
    }
    else {
        console.log('nos salvamos');
    }
    avengers = Number('123a');
    console.log({ avengers });
})();
