function auswerten() {
    let punkte = 0;
    if (document.querySelector('input[name="q1"]:checked')?.value === "b") punkte++;
    if (document.querySelector('input[name="q2"]:checked')?.value === "c") punkte++;
    if (document.querySelector('input[name="q3"]:checked')?.value === "a") punkte++;
    if (document.querySelector('input[name="q4"]:checked')?.value === "a") punkte++;
    
    document.getElementById("ergebnis").innerText = "Du hast " + punkte + "/4 richtig!";
}
