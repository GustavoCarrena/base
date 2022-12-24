(() => {
 let avengers: number = 10;
 console.log(avengers);
 const villans: number = 20;
 if (avengers < villans) {
  console.log('problemas');
 } else {
  console.log('nos salvamos');
 }

 avengers = Number('123a');

 console.log({avengers});
})();
