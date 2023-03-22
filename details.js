document.getElementById("uname").textContent = localStorage.getItem("name")
document.getElementById("uweight").textContent = localStorage.getItem("weight")
document.getElementById("ubtype").textContent = localStorage.getItem("btype")
document.getElementById("ub").textContent = localStorage.getItem("gender")




const NoDiseaseSelected  = document.getElementById("NoDiseaseSelected")



function navigateToPage() {
    localStorage.removeItem("diseases")
    window.location.href = "optionspage.html";
}
const diseaseArray  = localStorage.getItem("diseases").trim().split(" ")

console.log(diseaseArray.length)

if(diseaseArray.length === 1 && diseaseArray[0]==="")
{
    NoDiseaseSelected.textContent = "Ahh, It seems like you dont have any of mentioned conditions"
}
console.log(NoDiseaseSelected)
const arrayOfNine = ["1","2","3","4","5","6","7","8","9"]
arrayOfNine.forEach( number =>{
    console.log(diseaseArray)
    if(diseaseArray.find( di => di===number))
    {
        document.getElementById(`d${number}`).style.display ="inline";
    }
    else 
    {
        document.getElementById(`d${number}`).style.display ="none";
    }
})

