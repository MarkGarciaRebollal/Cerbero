//Generador de contraseñas seguras y aleatorias de una longitud preestablecida

function generator () {

    //Getting the value
    const lengthInput = document.getElementById("passwordLength");
    //Parsing the value
    const length = parseInt(lengthInput.value);
    //Symbols in local storage for the password
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]:;<>,.?/" //88
    let pwd = "";

    //Input check
    if (length <= 50 && length >= 9){

        for(let i = 0; i<length; i++) {
            //Random number 0-87
            do {
    
                j = (Math.random());
                j = j * 100;
                j = Math.trunc(j);
            } while (j > 87);
            
            //Random letter
            let letter = "";
            letter = characters[j];
    
            pwd = (pwd + letter);
        }
    
        //Showing in console
        console.info("tamaño de la pwd: " + length);
        console.log("Esta es una nueva contraseña: " + pwd);
    
        //Showing the result
        document.getElementById("pwd_Result").textContent = pwd;

    }
        else{
            alert("Debes introducir un número entre 9-50");
            return;
        }

}

    