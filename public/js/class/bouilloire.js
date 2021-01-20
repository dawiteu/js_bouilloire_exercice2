export class Bouilloire{
    constructor(nom, temperature,allume){
        this.nom = nom;
        this.temperature = temperature; 
        this.allume = allume;
    }

    etat(){
        //this.allume = (allume == true) ? "allumée" : "éteinte". 
        this.allume = this.allume == true ? "allumée" : "éteinte"; 
        return `${this.nom} a une temperature de: ${this.temperature} * degré(s). \n elle est ${this.allume}`;
    }
    checkTemp(){
        return this.temperature;
    }
 
}