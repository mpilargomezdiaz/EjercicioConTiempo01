function validacionContraseña() {
    let contraseña = document.getElementById("contraseña").value;
    
    let mayusculas = 0;
    let caracteresEspeciales = 0;
    let numerosValidos = 0;
    let caracteresPermitidos = "*/-#~";
    let numerosPermitidos = "56789";
    
    for (let i = 0; i < contraseña.length; i++) {
        let char = contraseña[i];
        
        if (char >= 'A' && char <= 'Z') {
            mayusculas++;
        } else if (caracteresPermitidos.includes(char)) {
            caracteresEspeciales++;
        } else if (numerosPermitidos.includes(char)) {
            numerosValidos++;
        }
    }
    
    let longitudValida = contraseña.length >= 10 && contraseña.length <= 15;
    let tieneMayusculas = mayusculas >= 2;
    let tieneCaracterEspecial = caracteresEspeciales >= 1;
    let tieneNumerosValidos = numerosValidos >= 3;
    
    if (tieneMayusculas && tieneCaracterEspecial && tieneNumerosValidos && longitudValida) {
        alert("La contraseña es válida");
    } else {
        alert("La contraseña no es válida, prueba otra");
    }
}

function comprobacionContraseña() {
    let contraseña = document.getElementById("contraseña").value;
    let contraseña2 = document.getElementById("contraseña2").value;
    
    if (contraseña === contraseña2) {
        alert("Las contraseñas coinciden");
    } else {
        alert("Las contraseñas no coinciden");
    }
}
