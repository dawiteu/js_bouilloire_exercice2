export let chauffe = (bouil) => { 
    bouil.allume = true; 
    console.log(bouil.etat());
    console.log(`J'allume le feu sur ${bouil.nom}`);
    let time=setInterval(function() {
        if(bouil.checkTemp() < 100){
            console.log(`Temperature: ${bouil.checkTemp()} * deg.`);
            bouil.temperature+=20;
        }else{
            clearInterval(time);
            bouil.allume=false; 
            console.log(`J'éteinds le feu sur ${bouil.nom} \n ${bouil.etat()}`);
        }
    }, 1000);

}