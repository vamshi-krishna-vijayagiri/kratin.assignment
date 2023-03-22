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
    uweight = weight
    unmae= username;

    let bodytype = "";
    if ((height - 100) < (weight)) {
        bodytype = "over weight";
    } else if ((height - 100) > (weight)) {
        bodytype = "under weight";
    } else {
        bodytype = "Ideal weight";
    }
    ubtype = bodytype
    console.log(bodytype);

    localStorage.setItem("name",username);
    localStorage.setItem("weight",weight);
    localStorage.setItem("btype",bodytype);
  
    navigateToOptionsPage()

});
