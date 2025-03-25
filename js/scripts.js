function CopyBtn(copy) {
    navigator.clipboard.writeText(copy);
    alert("Copied!");
}

function ExpandInfo() {
    var x = document.getElementById("info");
    if (x.style.display === "none") {
        document.getElementById('expandinfo').innerText = "Hide";
        x.style.display = "block";
    } else {
        document.getElementById('expandinfo').innerText = "About";
        x.style.display = "none";
    }
}