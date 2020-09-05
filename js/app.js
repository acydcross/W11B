function getDnD() {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let DnD = JSON.parse(this.responseText);
            document.getElementById("dnd-quote").innerHTML = DnD.quote;
            console.log(DnD);
            } else if(this.readyState != 4) {
            document.getElementById("dnd-quote").innerHTML = "LOADING";
        } else {
            document.getElementById("dnd-quote").innerHTML = "Something Went Wrong!";
        }
    }

    ajax.open("GET", "https://www.dnd5eapi.co/api/classes/", true);
    ajax.send();
}

document.getElementById("refresh-dnd").addEventListener("click", getDnD)