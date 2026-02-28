document.getElementById("formular").addEventListener("submit", async function (e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    data.An_de_Studiu = parseInt(data.An_de_Studiu); 
    
    const response = await fetch(`http://localhost:1234/addstud`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    if (response.status === 201) {
        alert(`Studentul ${data.Nume_Complet} a fost inscris cu succes.`);
        this.reset();
    } else {
        alert("Eroare la trimiterea cererii de inregistrare.");
    }
});