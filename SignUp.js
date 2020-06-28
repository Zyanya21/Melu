function Validations(){
        console.log(document.getElementsByTagName("input"));
        let elementMsj = document.getElementById("nombMensaje");
        let nombre = document.getElementById("FName").value;
        if(nombre.length == 0){
            document.getElementById("nombMensaje").style.color = "#ff0000";
            elementMsj.innerHTML = "You must complete this space";
        }else{
            elementMsj.innerHTML = "";

            let soloLetras = letrasPattern.test(nombre);
            if(soloLetras == false){
                elementMsj.innerHTML = "Solo se pueden letras";
            }else{
                elementMsj.innerHTML = "";
            }
        }
    }

function ValidationsLast(){
        console.log(document.getElementsByTagName("input"));
        let elementMsj = document.getElementById("nomb1Mensaje");
        let nombre = document.getElementById("LastN").value;
        if(nombre.length == 0){
            document.getElementById("nomb1Mensaje").style.color = "#ff0000";
            elementMsj.innerHTML = "You must complete this space";
        }else{
            elementMsj.innerHTML = "";

            let soloLetras = letrasPattern.test(nombre);
            if(soloLetras == false){
                elementMsj.innerHTML = "Solo se pueden letras";
            }else{
                elementMsj.innerHTML = "";
            }
        }
    }