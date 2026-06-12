let sidebar = false
function abrirMenu() {
    const menu = document.getElementById("sidebar");
    const container = document.getElementById("container");

    if(!sidebar){
        menu.style.width = "200px";
        container.style.marginLeft = "200px";
        sidebar = true;
    }else{
        menu.style.width = "0";
        container.style.marginLeft = "0";
        sidebar = false;
    }
}