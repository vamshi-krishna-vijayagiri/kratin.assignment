document.getElementById("uname").textContent = localStorage.getItem("name");
document.getElementById("uweight").textContent = localStorage.getItem("weight");
document.getElementById("bodytype").textContent = localStorage.getItem("bodytype");
document.getElementById("gender").textContent = localStorage.getItem("gender");

const NoDiseaseSelected  = document.getElementById("NoDiseaseSelected");

function navigateToPage() {
    localStorage.removeItem("diseases");
    window.location.href = "optionspage.html";
}

const diseaseArray  = localStorage.getItem("diseases").trim().split(" ");

if(diseaseArray.length === 1 && diseaseArray[0]==="")
{
    NoDiseaseSelected.textContent = "Ahh, It seems like you dont have any of the mentioned conditions";
}

const arrayOfNine = ["1","2","3","4","5","6","7","8","9"];

arrayOfNine.forEach( number => {
    if(diseaseArray.find( di => di===number))
    {
        document.getElementById(`d${number}`).style.display ="inline";
    }
    else 
    {
        document.getElementById(`d${number}`).style.display ="none";
    }
});

