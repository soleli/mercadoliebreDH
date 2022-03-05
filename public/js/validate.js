
        const usuario = document.getElementById('usuario');
        const contrasenia = document.getElementById('contrasenia');
        const formLogin = document.getElementById('form-login');
        let errorUsuario = document.getElementById('errorUsuario');
        let errorContrasenia = document.getElementById('errorContrasenia');
        let enviar=true;

        formLogin.addEventListener("submit", e => {
            e.preventDefault();

            if(usuario.value.length<8){
                errorUsuario.innerHTML=""
                errorUsuario.innerHTML="El campo usuario debe ser de más de 8 caracteres";
                usuario.style.cssText="border: 2px solid red";
                enviar=false;
            }
            else{
                errorUsuario.innerHTML=""
                usuario.style.cssText="border: 0px";
                enviar=true;
            }
            
            if(contrasenia.value.length<1){
                errorContrasenia.innerHTML="El campo contraseña es obligatorio";
                contrasenia.style.cssText="border: 2px solid red";
                enviar=false;
            }
            else{
                errorContrasenia.innerHTML=""
                contrasenia.style.cssText="border: 0px";
                enviar=true;
            }
            if(enviar==true){
                errorUsuario.innerHTML=""
                formLogin.submit();
            }   
        
           

        }

        )