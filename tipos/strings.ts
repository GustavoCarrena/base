(() => {
 const batman: string = 'Batman';
 const linterna: string = 'Linterna';
 const volcan: string = `Heroe: Volcan`;
 const abc = 123;

 console.log(`I'm ${batman}`);

 console.log(batman.toUpperCase());

 console.log(batman[10]?.toUpperCase() || 'No esta presente');
})();
