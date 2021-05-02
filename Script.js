/* script */

var textbox = document.getElementById("soluzione");
var listasoluzioni = document.getElementById("ListaSoluzioni");
var listaPro = document.getElementById("ListaSoluzioniPro");
var listaContro = document.getElementById("ListaSoluzioniContro");
const Testodomanda = document.querySelector("#domanda");
var spanNumeroUno = document.getElementById("spanPrimaScelta");
var spanNumeroDue = document.getElementById("spanSecondaScelta");
let index = 0;
var finale = "x";

var arrayDomande = new Array();
arrayDomande[0] = 'Sai cos\'è la previdenza complementare? Si tratta di metodi per colmare la riduzione del tuo reddito con la pensione rispetto a quello di lavoro. Tutte le persone lo fanno, ma in tanti modi diversi. Vuoi farlo con strumenti finanziari?';
arrayDomande[1] = 'Puoi investire in diversi prodotti finanziari. Scegli quello più opportuno alle tue esigenze.';
arrayDomande[2] = 'Esistono tanti modi per avere una previdenza complementare. Scegli quello più opportuno alle tue esigenze.';
arrayDomande[3] = 'Con che tipo di pensione vorresti concludere il tuo lavoro?';

var arrayRisposte = new Array();
arrayRisposte[0] = 'Sì, voglio investire per la previdenza complementare con l\'acquisto di prodotti finanziari.';
arrayRisposte[1] = 'No, preferisco investire per la previdenza complementare in altri modi.';
arrayRisposte[2] = 'Fondi chiusi (chiamati anche fondi negoziali o di categoria). Questi possono avere dei requisiti d\'accesso come far parte di una azienda; essere in un territorio; far parte di una categoria di lavoratori. In questo tipo di strumento avrai un beneficio economico da parte del datore di lavoro.';
arrayRisposte[3] = 'Fondi aperti. Non ci sono vincoli d\'ingresso e sono offerti da privati come banche ed assicurazioni. Possono essere collettivi o individuali.';
arrayRisposte[4] = 'Polizze assicurative(PIP). Sono polizze individuali di previdenza offerte dalle assicurazioni.';
arrayRisposte[5] = 'Immobili. Voglio investire comprando un immobile per poterlo dare in affitto o venderlo successivamente.';
arrayRisposte[6] = 'Azioni. Voglio investire in azioni con la speranza di ricevere dei dividendi e/o di rivederle in futuro.';
arrayRisposte[7] = 'Buoni del tesoro. Voglio investire in BTP perchè mi daranno un rendimento assicurato futuro.';
arrayRisposte[8] = 'Preferisco non investire i miei soldi.';
arrayRisposte[9] = 'Prepensionamento. Posso accedere alla pensione con determinati requisiti di legge in via anticipata di massimo 4 anni. Avrai, però, un importo di pensione scalato in base agli anni e contributi mancanti.';
arrayRisposte[10] = 'Pensione anticipata. Riesco ad andare in pensione con un\'età inferiore rispetto a quella prevista dalla legge avendo già versato contributi in quantità maggiore di quella ex-legge.';
arrayRisposte[11] = 'Pensione di vecchiaia. Raggiungo l\'età di contributi previsti dalla legge.';

var arraySoluzioniPro = new Array();
arraySoluzioniPro[0]='Il TFR in azienda è in un comparto garantito, inoltre alla fine del rapporto lo avrai a disposizione in forma liquida.';
arraySoluzioniPro[1]='Con il TFR messo in un fondo negoziale anche il datore di lavoro contribuirà alle somme versate.';
arraySoluzioniPro[2]='Partecipando ad un fondo chiuso anche il datore di lavoro contribuirà alle somme versate.';
arraySoluzioniPro[3]='La partecipazione ai fondi aperti non è vincolata ed è aperta a tutti.';
arraySoluzioniPro[4]='Investendo su un PIP stipulerai un contratto con una agenzia di assicurazione che soddisferà al meglio le tue richieste.';
arraySoluzioniPro[5]='Investendo in un immobile avrai la sicurezza di avere sempre a disposizione un asset fisico con la possibilità di ricavarne un guadagno futuro vendendolo o affittandolo.';
arraySoluzioniPro[6]='Investendo in azioni riceverai un dividendo e la possibilità di guadagnarci rivendola.';
arraySoluzioniPro[7]='Investendo in Bot avrai la certezza di un guadagno minimo garantito.';
arraySoluzioniPro[8]='Non investendo avrai più liquidità in mano durante il corso della tua vita.';
arraySoluzioniPro[9]='Scegliendo la pensione anticipata andrai in pensione prima rispetto all\'età anagrafica.';

var arraySoluzioniContro = new Array();
arraySoluzioniContro[0]='Con il TFR in azienda vige la regola del silenzio assenso ovvero se nulla detto verrà lasciato in azienda.';
arraySoluzioniContro[1]='Destinando il TFR in un fondo negoziale esso sarà vincolato a vita eccetto casi specifici in cui puoi ritirare liquidità anticipatamente.';
arraySoluzioniContro[2]='Partecipando ad un fondo chiuso sarai vincolato in uscita.';
arraySoluzioniContro[3]='Partecipando a fondi aperti non avrai nessun contributo da parte del datore di lavoro.';
arraySoluzioniContro[4]='I contratti PIP sono molto costosi.';
arraySoluzioniContro[5]='Investendo in immobili sarai esposto ad eventuali rischi di crisi del mercato immobiliare o rischi fisici del bene.';
arraySoluzioniContro[6]='Investendo in azioni sarai esposto alla sua volatilità, rischi finanziari e di mercato, oltre ai costi per commissioni.';
arraySoluzioniContro[7]='Investendo in Bot il tuo guadagno dipenderà dagli interessi di mercato offerti in quel momento.';
arraySoluzioniContro[8]='Non investendo dovrai saper gestire egregiamente i risparmi in tutto il corso della tua vita tenendo sempre presente il rischio di sperperarli anticipatamente abbassando sempre di più il tuo tenore di vita.';
arraySoluzioniContro[9]='Scegliendo la pensione anticipata percepirai parzialmente meno pensione.';

var soluzioneNeutra1="Partecipando sia con il TFR in un fondo negoziale sia individualmente ad un fondo chiuso avrai il beneficio contributivo da parte del datore di lavoro in entrambi, però la tua liquidità utilizzata sarà vincolata a questi strumenti fino al raggiungimento della pensione.";
var soluzioneNeutra2="Con la pensione di vecchiaia avrai maturato i requisiti anagrafici e contributivi al fine di ricevere un reddito soddisfacente per il tuo tenore di vita, ma da sola non coprirà il 100%. Per questo motivo è consigliato integrarla con la previdenza complementare.";

function fn1() {

    let selected = document.querySelector('input[type="radio"]:checked');    
    finale = finale + selected.value;


    if (index==0) {
        Testodomanda.innerText = arrayDomande[0];

        spanNumeroUno.innerText = arrayRisposte[0];
        spanNumeroDue.innerText = arrayRisposte[1];
        index++;

        selected.checked=false;
        
    }else if (index==1) {

        var p = document.createElement("li");
        p.innerHTML = "<input type=\"radio\" style=\"visibility:hidden\" name=\"scelta\" value=\"c\" onclick=\"fn1()\" id=\"rd3\"> <span id=\"spanTerzaScelta\"></span>";
        document.getElementById("listaDiScelte").appendChild(p);

        var x = document.createElement("li");
        x.innerHTML = "<input type=\"radio\" style=\"visibility:hidden\" name=\"scelta\" value=\"d\" onclick=\"fn1()\" id=\"rd4\"> <span id=\"spanQuartaScelta\"></span>";
        document.getElementById("listaDiScelte").appendChild(x);

        if (selected.value=="a") {
            Testodomanda.innerText = arrayDomande[1];

            spanNumeroUno.innerText = arrayRisposte[2];
            spanNumeroDue.innerText = arrayRisposte[3];
            document.getElementById("rd3").style.visibility = 'visible';
            var spanNumeroTre = document.getElementById("spanTerzaScelta");
            spanNumeroTre.innerText = arrayRisposte[4];

            selected.checked=false;

        }else if (selected.value=="b") {
            Testodomanda.innerText = arrayDomande[2];

            spanNumeroUno.innerText = arrayRisposte[5];
            spanNumeroDue.innerText = arrayRisposte[6];
            document.getElementById("rd3").style.visibility = 'visible';
            var spanNumeroTre = document.getElementById("spanTerzaScelta");
            spanNumeroTre.innerText = arrayRisposte[7];
            document.getElementById("rd4").style.visibility = 'visible';
            var spanNumeroQuattro = document.getElementById("spanQuartaScelta");
            spanNumeroQuattro.innerText = arrayRisposte[8];

            selected.checked=false;
        }
            
        index++;

    }else if (index==2) {
        Testodomanda.innerText = arrayDomande[3];

        spanNumeroUno.innerText = arrayRisposte[9];
        spanNumeroDue.innerText = arrayRisposte[11];
        document.getElementById("rd3").style.visibility = 'hidden';
        document.getElementById("rd4").style.visibility = 'hidden';
        document.getElementById("spanTerzaScelta").style.visibility = 'hidden';
        document.getElementById("spanQuartaScelta").style.visibility = 'hidden';

        selected.checked=false;
        index++;
       
    }else if (index==3) {

        //SOLUZIONI

        document.getElementById("container").style.visibility = 'hidden';
        document.getElementById("rd3").style.visibility = 'hidden';
        document.getElementById("rd4").style.visibility = 'hidden';

        textbox.style.marginTop='-400px';
        //listasoluzioni.style.marginTop='-400px';
        textbox.innerText= "Alla luce delle tue scelte, ecco le risposte:";

        listasoluzioni.style.visibility = 'visible';

        var x = finale.split(""); 
        var length = x.length;
        
        for (let s = 1; s < length; s++) {

            if (x[1]=="b" && x[2]=="a" && x[3]=="a" && s==1) {
                var u= document.createElement("li");
                u.innerHTML=soluzioneNeutra1;
                listaPro.appendChild(u);
                s=s+2;
            }else{

                if (s==1) {//prima lettera

                    if (x[s]=="a") { //scelgo la prima
                        var y= document.createElement("li");
                        y.innerHTML=arraySoluzioniPro[0];
                        listaPro.appendChild(y);
        
                        var y= document.createElement("li");
                        y.innerHTML=arraySoluzioniContro[0];
                        listaContro.appendChild(y);
                    }else{// scelgo la seconda
                        var y= document.createElement("li");
                        y.innerHTML=arraySoluzioniPro[1];
                        listaPro.appendChild(y);
        
                        var y= document.createElement("li");
                        y.innerHTML=arraySoluzioniContro[1];
                        listaContro.appendChild(y);
                    }
                   
                } 
                
                if (s==2) { //seconda lettera
                     
                        //nulla
                }
    
                if (s==3) { //terza lettera
    
                     if (x[2]=="a") {
    
                        if (x[s]=="a") { //scelgo la prima
                            var l= document.createElement("li");
                            l.innerHTML=arraySoluzioniPro[2];
                            listaPro.appendChild(l);
            
                            var l= document.createElement("li");
                            l.innerHTML=arraySoluzioniContro[2];
                            listaContro.appendChild(l);
        
                        }else if(x[s]=="b"){// scelgo la seconda
                            var l= document.createElement("li");
                            l.innerHTML=arraySoluzioniPro[3];
                            listaPro.appendChild(l);
            
                            var l= document.createElement("li");
                            l.innerHTML=arraySoluzioniContro[3];
                            listaContro.appendChild(l);
    
                        }else if(x[s]=="c"){// scelgo la seconda
                            var l= document.createElement("li");
                            l.innerHTML=arraySoluzioniPro[4];
                            listaPro.appendChild(l);
            
                            var l= document.createElement("li");
                            l.innerHTML=arraySoluzioniContro[4];
                            listaContro.appendChild(l);
                        }
                     
                     }else if (x[2]=="b") {
    
                        if (x[s]=="a") { //scelgo la prima
                            var l= document.createElement("li");
                            l.innerHTML=arraySoluzioniPro[5];
                            listaPro.appendChild(l);
            
                            var l= document.createElement("li");
                            l.innerHTML=arraySoluzioniContro[5];
                            listaContro.appendChild(l);
        
                        }else if(x[s]=="b"){// scelgo la seconda
                            var l= document.createElement("li");
                            l.innerHTML=arraySoluzioniPro[6];
                            listaPro.appendChild(l);
            
                            var l= document.createElement("li");
                            l.innerHTML=arraySoluzioniContro[6];
                            listaContro.appendChild(l);
    
                        }else if(x[s]=="c"){// scelgo la seconda
                            var l= document.createElement("li");
                            l.innerHTML=arraySoluzioniPro[7];
                            listaPro.appendChild(l);
            
                            var l= document.createElement("li");
                            l.innerHTML=arraySoluzioniContro[7];
                            listaContro.appendChild(l);
    
                        }else if(x[s]=="d"){// scelgo la terza
                            var l= document.createElement("li");
                            l.innerHTML=arraySoluzioniPro[8];
                            listaPro.appendChild(l);
            
                            var l= document.createElement("li");
                            l.innerHTML=arraySoluzioniContro[8];
                            listaContro.appendChild(l);
                        }
    
                     }
                 
                }

            }
            
            if (s==4) {  // ULTIMA LETTERA

                if (x[s]=="a") { //scelgo la prima
                    var p= document.createElement("li");
                    p.innerHTML=arraySoluzioniPro[9];
                    listaPro.appendChild(p);
    
                    var p= document.createElement("li");
                    p.innerHTML=arraySoluzioniContro[9];
                    listaContro.appendChild(p);

                }else if(x[s]=="b"){// scelgo la seconda
                    var p= document.createElement("li");
                    p.innerHTML=soluzioneNeutra2;
                    listaPro.appendChild(p);
                }

            }
            
        }
       
    }

}