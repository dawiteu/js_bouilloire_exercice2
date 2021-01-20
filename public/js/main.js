import {Bouilloire} from "./class/bouilloire.js"; 
import {chauffe} from "./class/chauffer.js"; 


let bouill = new Bouilloire("Bouilloire", 0, false); 


bouill.etat();

chauffe(bouill);