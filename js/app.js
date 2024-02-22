let paintText = document.getElementById("paint-text");
var prevSelected = null;

if (paintText){
    let paintData = {
        "black":{
            "neve":"Fantasztikus Fekete",
            "gyárto":"Aranyosi kft.",
            "tipus":"Beltéri, Kültéri, Vízálló",
            "ár":"400Ft/L"
        },
        "blue":{
            "neve":"Kellemes Égkék",
            "gyárto":"Aranyosi kft.",
            "tipus":"Beltéri, Kültéri",
            "ár":"400Ft/L"
        },
        "brown":{
            "neve":"Barnabás Barna",
            "gyárto":"Aranyosi kft.",
            "tipus":"Beltéri, Kültéri",
            "ár":"400Ft/L"
        },
        "green":{
            "neve":"Dzsungelzöld",
            "gyárto":"Aranyosi kft.",
            "tipus":"Beltéri, Kültéri, Vízálló",
            "ár":"400Ft/L"
        },
        "purple":{
            "neve":"Lenyűgöző Lila",
            "gyárto":"Aranyosi kft.",
            "tipus":"Beltéri, Kültéri",
            "ár":"400Ft/L"
        },
        "red":{
            "neve":"Csodapiros",
            "gyárto":"Aranyosi kft.",
            "tipus":"Beltéri, Kültéri, Vízálló",
            "ár":"400Ft/L"
        },
        "white":{
            "neve":"Fenomenális Fehér",
            "gyárto":"Aranyosi kft.",
            "tipus":"Beltéri, Kültéri, Akril, Vízálló",
            "ár":"800Ft/L"
        },
        "yellow":{
            "neve":"Sármos Sárga",
            "gyárto":"Aranyosi kft.",
            "tipus":"Beltéri, Kültéri",
            "ár":"400Ft/L"
        }
        
    }
    let paints = document.querySelectorAll(".paint");
    let i = 0;
    prevSelected = document.createElement("div");
    paints.forEach( paint => {
        let keys = Object.keys(paintData);
        let data = paintData[keys[i]];
        console.log(data);

        let name = document.createElement("p");
        name.innerText = "Neve: "+data["neve"];

        let ul = document.createElement("ul");

        let li1 = document.createElement("li");
        li1.innerText = "Gyártó: "+data["gyárto"];
        ul.append(li1);

        let li2 = document.createElement("li");
        li2.innerText = "Fajták: "+data["tipus"];
        ul.append(li2);

        let li3 = document.createElement("li");
        li3.innerText = "Ára: "+data["ár"];
        ul.append(li3);

        i++;

        paint.addEventListener("click", event => {
            if (prevSelected == event.currentTarget)
            {
                return;
            }
            
            paintText.innerHTML = "";

            event.currentTarget.classList.add("selected");

            prevSelected.classList.remove("selected");

            prevSelected = event.currentTarget;
            
            paintText.append(name);
            paintText.append(ul);
        })
    });
}

let spans = document.querySelectorAll(".ev"); 
if (spans.length > 0) {
    let select = document.querySelector("select");
    select.onchange = function(){
        [...spans].forEach(element => {
            console.log(element.innerText)
            if (element.innerText != select.value && select.value != "-") element.parentElement.parentElement.classList.add("d-none");
            else element.parentElement.parentElement.classList.remove("d-none");
        });
    }
}

function myhref(web){
    window.location.href = web;}