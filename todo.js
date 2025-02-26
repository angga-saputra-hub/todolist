currId = 0;
function tambahTugas(e) {
    currId++;
    
    if (document.getElementById('task').value == "") {
        return;
    }
    
    let listTugas = document.createElement("p");
        listTugas.innerText = document.getElementById('task').value;
        listTugas.id = currId;
        let tombolHapus = document.createElement("button");
        tombolHapus.innerText = "hapus";
        
        listTugas.onclick = function (e) {
            const element = document.getElementById(listTugas.id);
            console.log(element)
const style = window.getComputedStyle(element);

if (style.getPropertyValue("text-decoration-line") === "line-through") {
    listTugas.setAttribute("style", "text-decoration : none")
    return;
} else {
    listTugas.setAttribute("style", "text-decoration : line-through")
    return;
}
        }
        
        tombolHapus.onclick = function (e) {
            listTugas.remove();
            tombolHapus.remove();
        }
        
    document.body.appendChild(listTugas);
    document.body.appendChild(tombolHapus);
}

function resetInput() {
    
    let listTugas = document.getElementById('task');
    listTugas.value = "";
}