//Lista nicków
const listaNickow = document.getElementById('listaNickow');
let tabGraczy = [];
let tabMagia = [];


tworzenieListy = () => {
    listaNickow.innerHTML = tabGraczy.map( gracz => {
        return `<li class="elementListy"><p>${gracz.nick}</p></li>`;
    }).join("");
}






//Test pomyślny: event lisinery na elementy listy
// const test = document.getElementsByClassName('elementListy');
// console.log(test);
// test[0].addEventListener('click', e => {
//     console.log(e);
// })


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


tworzenieMagii = () => {
    //Rysowanie perko kropek

    var i = 0;
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