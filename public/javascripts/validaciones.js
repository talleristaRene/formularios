function mostrarFormulario(tipo){
    if(tipo == "get"){
        window.location.href = "/formGet";
    }
    if(tipo == "post"){
        window.location.href = "/formPost";
    }
}