let myFormEl = document.getElementById("myForm");
function navigateToOptionsPage() {
    window.location.href = "optionspage.html";
}
myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let username = document.getElementById("name").value;
    let genderMale = document.getElementById("genderMale");
    let genderFemale = document.getElementById("genderFemale");

    if(genderFemale.checked)
    {
        localStorage.setItem("gender","Ms.")
    }
    else{
        localStorage.setItem("gender","Mr.")
    }

    let bodytype = "";
    if ((height - 100) < (weight)) {
        bodytype = "Over weight";
    } else if ((height - 100) > (weight)) {
        bodytype = "Under weight";
    } else {
        bodytype = "Ideal weight";
    }
    localStorage.setItem("name",username);
    localStorage.setItem("weight",weight);
    localStorage.setItem("bodytype",bodytype);
  
    navigateToOptionsPage()
});
