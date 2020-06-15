var i = 0;
const divLista = document.getElementById('lista');
const otwieranieListy = document.getElementById('otwieranieListy');

//Lista nicków
const listaNickow = document.getElementById('listaNickow');
let tabGraczy = [];
let tabMagia = [];


tworzenieListy = () => {
    listaNickow.innerHTML = tabGraczy.map( gracz => {
        return `<li class="elementListy"><p>${gracz.nick}</p></li>`;
    }).join("");
    iventListyneryNaListe();
}

//Get element by id
const klasaT = document.getElementById('klasaT');
const specT = document.getElementById('specT');
const rasaT = document.getElementById('rasaT');
const historiaT = document.getElementById('historiaT');
const statyT = document.getElementById('statyT');
const punktynaukiT = document.getElementById('punktynaukiT');
const cechy = document.getElementById('cechy');

//Wypełnianie pól ich zawartością
wypelnianieStatystyk = pole => {
    const wszyscyGracze = document.getElementsByClassName('elementListy');
    wszyscyGracze[pole].addEventListener('click', e => {
        klasaT.innerText = `Klasa: ${tabGraczy[pole].klasa}`;
        specT.innerText = `Specjalizacja: ${tabGraczy[pole].specjalizacja}`;
        rasaT.innerHTML = `${tabGraczy[pole].rasa}`;
        historiaT.innerText = `${tabGraczy[pole].historia}`;
        statyT.innerText = `Siła: ${tabGraczy[pole].statystyka1} Zwinność: ${tabGraczy[pole].statystyka2} Szypkość: ${tabGraczy[pole].statystyka3} Inteligencja: ${tabGraczy[pole].statystyka4}`;
        punktynaukiT.innerText = `PN: ${tabGraczy[pole].punktynauki}`;
        cechy.innerHTML = `<p>Cechy:</p><p>${tabGraczy[pole].cecha1}</p><p>${tabGraczy[pole].cecha2}</p><p>${tabGraczy[pole].cecha3}</p>`
    })

}




//Test pomyślny: event lisinery na elementy listy
iventListyneryNaListe = () => {
    const wszyscyGracze = document.getElementsByClassName('elementListy');
    var j = wszyscyGracze.length;
    for(i = 0; i < j; i++)
    {
        if(i===0){
            wszyscyGracze[0].addEventListener('click', e => {
                divLista.style.display = "none";
                otwieranieListy.style.display = "block";
            })
        }
        else
        {
            wypelnianieStatystyk(i);
            // console.log(i)
        }
        
    }
}
//Otwieranie listy uprzednio zamkniętej
otwieranieListy.addEventListener('click', e => {
    divLista.style.display = "block";
    otwieranieListy.style.display = "none";
})


//Tablica magii
var stol = document.getElementById('stol');
var pen = stol.getContext("2d");
pen.beginPath();
pen.moveTo(0,449.5);
pen.lineTo(449.5,900);
pen.lineTo(900,449.5);
pen.lineTo(449.5,0);
pen.closePath();
pen.stroke();
pen.beginPath();
pen.arc(449.5,449.5,449.5,0,Math.PI * 2,true);
pen.stroke();
pen.strokeRect(0,0,900,900);

//Rysowanie curvy beziera
pen.beginPath();
pen.moveTo(0,449.5);
pen.quadraticCurveTo(200,200,0,0);
pen.quadraticCurveTo(200,200,449.5,0);
pen.quadraticCurveTo(700,200,900,0);
pen.quadraticCurveTo(700,200,900,449.5);
pen.quadraticCurveTo(700,700,900,900);
pen.quadraticCurveTo(700,700,449.5,900);
pen.quadraticCurveTo(200,700,0,900);
pen.quadraticCurveTo(200,700,0,449.5);
pen.stroke();
//Rysowanie kółek żywiołów
pen.beginPath();
pen.arc(180,180,50,0,Math.PI*2,true);
pen.stroke();
pen.beginPath();
pen.arc(180,180,55,0,Math.PI*2,true);
pen.stroke();
let h1 = 60 * Math.cos(Math.PI / 6);
pen.beginPath();
pen.moveTo(150,157);
pen.lineTo(210,157);
pen.lineTo(180,157 + h1);
pen.closePath();
pen.stroke();
pen.beginPath();
pen.moveTo(150,190);
pen.lineTo(210,190);
pen.stroke();

pen.beginPath();
pen.arc(720,720,50,0,Math.PI*2,true);
pen.stroke();
pen.beginPath();
pen.arc(720,720,55,0,Math.PI*2,true);
pen.stroke();
let h2 = 60 * Math.cos(Math.PI / 6);
pen.beginPath();
pen.moveTo(750,697);
pen.lineTo(690,697);
pen.lineTo(720,697 + h2);
pen.closePath();
pen.stroke();

pen.beginPath();
pen.arc(720,180,50,0,Math.PI*2,true);
pen.stroke();
pen.beginPath();
pen.arc(720,180,55,0,Math.PI*2,true);
pen.stroke();
let h3 = 60 * Math.cos(Math.PI / 6);
pen.beginPath();
pen.moveTo(750,203);
pen.lineTo(690,203);
pen.lineTo(720,203 - h3);
pen.closePath();
pen.stroke();
pen.beginPath();
pen.moveTo(750,170);
pen.lineTo(690,170);
pen.stroke();

pen.beginPath();
pen.arc(180,720,50,0,Math.PI*2,true);
pen.stroke();
pen.beginPath();
pen.arc(180,720,55,0,Math.PI*2,true);
pen.stroke();
let h4 = 60 * Math.cos(Math.PI / 6);
pen.beginPath();
pen.moveTo(150,743);
pen.lineTo(210,743);
pen.lineTo(180,743 - h4);
pen.closePath();
pen.stroke();







tworzenieMagii = () => {
    //Rysowanie perko kropek

    for(i = 0; i < tabMagia.length; i++)
    {
        var tpen = stol.getContext("2d");
        tpen.beginPath();
        tpen.arc(tabMagia[i].x,tabMagia[i].y,tabMagia[i].r,0,Math.PI*2,true);
        tpen.fill();
    }

    //Wyświetlanie się opisów magii i perków czy jak to się tam nazywa
    const opisUm = document.getElementById('opisUm');
    const opisNazwa = document.getElementById('opisNazwa');
    const opisOpis = document.getElementById('opisOpis');
    const opisKoszt = document.getElementById('opisKoszt');
    const opisWyl = document.getElementById('opisWyl');

    stol.addEventListener("click", e => {
        for(i = 0;i < tabMagia.length;i++)
        {
            if((Math.pow((e.offsetX - parseInt(tabMagia[i].x)),2)) + (Math.pow((e.offsetY - parseInt(tabMagia[i].y)),2)) <= Math.pow(parseInt(tabMagia[i].r),2))
            {
                opisUm.style.display = "block";
                opisNazwa.innerText = tabMagia[i].nazwa;
                opisOpis.innerText = tabMagia[i].opis;
                opisKoszt.innerText = `Koszt: ${tabMagia[i].koszt}`;
            }
        }  
    })
    opisWyl.addEventListener("click", e => {
        opisUm.style.display = "none";
    })
}





//Feczowanie fszyskiego

fetchowanie = () => {
    fetch("listaGraczy.json").then( res => {
        return res.json();
    }).then( tab => {
        tabGraczy = tab;
        tworzenieListy();
    }).catch( err => {
        console.error(err);
    });
    fetch("magia.json").then( res => {
        return res.json();
    }).then( tab => {
        tabMagia = tab;
        tworzenieMagii();
    }).catch( err => {
        console.error(err);
    });
}
fetchowanie();