if (!localStorage.getItem("name"))
{
  window.location.href = "index.html";
}

function navigateToDetails() {

    let allDisease = "";
    for (let i = 1;i<10;i++)
    {
        const disease = document.getElementById(i).checked
        if (disease) {
            allDisease = allDisease+" "+i;
        }   
    }
    localStorage.setItem("diseases",allDisease)
    window.location.href = "details.html";
}

function checkboxStatusChange(checkboxId) {
    const checkbox = document.getElementById(checkboxId)
    const label = document.getElementById(`l${checkboxId}`)
    if (checkbox.checked) {
      label.style.backgroundColor = "#c1d8db";
    } else {
      label.style.backgroundColor = '#FFF';
    }
  }

function navigateToLogin() {
  localStorage.clear()
  window.location.href = "index.html";
}
