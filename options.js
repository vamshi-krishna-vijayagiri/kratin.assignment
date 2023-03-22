
if (!localStorage.getItem("name"))
{
  window.location.href = "index.html";
}
else 
{
   console.log("called ")
}

function navigateToDetails() {

    let allDisease = "";
    for (let i = 1;i<10;i++)
    {
        const disease = document.getElementById(i).checked
        console.log(disease);
        if (disease)
        {
            allDisease = allDisease+" "+i;
        }
        
    }
    localStorage.setItem("diseases",allDisease)
    window.location.href = "details.html";
}

function handleChange(cname) {

    const checkbox = document.getElementById(cname)
    const label = document.getElementById(`l${cname}`)
    if (checkbox.checked) {
      label.style.backgroundColor = "#c1d8db";
      console.log("comming ")
    } else {
      label.style.backgroundColor = '#FFF';
    }
  }
  
function navigateToLogin() {
  localStorage.clear()
  window.location.href = "index.html";
}
