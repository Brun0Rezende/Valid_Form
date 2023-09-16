



function validarNum(input) { //APENAS ENTRADA DE NUMEROS
     var regex = /^[0-9]*$/;
     if (!regex.test(input.value)) {
         input.value = input.value.replace(/[^0-9]/g, ''); 
         alert("Carácter Invalido");
     } else {}
 }
         function validarD(input) {// USADO PAARA VALIDAR DIGITO DE RG. APENAS ENTRADA DO NUMERO 1 E DA LETRA "X" 
     var regex = /^[0-9Xx]*$/;
     if (!regex.test(input.value)) {
         input.value = input.value.replace(/[^0-9Xx]/g, ''); 
         alert("Carácter Invalido");
     } else {}
 }

 function validarLetra(input) { //APENAS ENTRADA DE LETRAS
     var regex = /^[A-zÀ-ÖØ-öø-ÿ ]*$/;
     if (!regex.test(input.value)) {
         input.value = input.value.replace(/[^A-zÀ-ÖØ-öø-ÿ ]/g, ''); 
         alert("Carácter Invalido");
     } else {}
 }
 function validarLN(input) { //APENAS ENTRADA DE NUMEROS LETRAS E SIMBOLOS
     var regex = /^[0-9A-zÀ-ÖØ-öø-ÿ-,-. ]*$/;
     if (!regex.test(input.value)) {
         input.value = input.value.replace(/[^0-9A-zÀ-ÖØ-öø-ÿ ]/g, ''); 
         alert("Carácter Invalido");
     } else {}
 }

 function ValidForm()
 {
         var x = document.forms["Validacao"]["nome"].value;
         if ( x == null || x == "" || x.length < 6) {
             alert("Campo Nome deve ser preenchido");
         }else{console.log("Nome: " + x.length + " carácteres digitados")}    
         
         var x = document.forms["Validacao"]["endereco"].value;
         if ( x == null || x == "" || x.length < 6 ) {
             alert("Campo Endereço deve ser preenchido");
         }else{console.log("Endereço: " + x.length + " carácteres digitados")}    
                    
         var x = document.forms["Validacao"]["bairro"].value;
         if ( x == null || x == "" || x.length < 4 ) {
             alert("Campo Bairro deve ser preenchido");
         }else{console.log("Bairro: " + x.length + " carácteres digitados")}    
         
         var x = document.forms["Validacao"]["cep"].value;
         if ( x == null || x == "" || x.length < 8) {
             alert("Campo CEP deve ser preenchido");
         } else{console.log("CEP: " + x.length + " carácteres digitados")}    
                   
         var x = document.forms["Validacao"]["cidade"].value;
         if ( x == null || x == "" ) {
             alert("Campo Cidade deve ser preenchido");
         }else{console.log("Cidade: " + x.length + " carácteres digitados")}    
                    
         var x = document.forms["Validacao"]["estado"].value;
         if ( x == null || x == "" || x == "Selecione um estado") {
             alert("Nenhuma opção foi selecionada no Campo Estado");
         }else{console.log("Estado Selecionado: " + x)}    
                    
         var x = document.forms["Validacao"]["fixo"].value;
         if ( x == null || x == "" || x.length < 10 ) {
             alert("Campo Telefone fixo deve ser preenchido");
         }else{console.log("Telefone: " + x.length + " carácteres digitados")}    
                    
         var x = document.forms["Validacao"]["celular"].value;
         if ( x == null || x == "" || x.length < 11) {
             alert("Campo Celular deve ser preenchido");
         }else{console.log("Celular: " + x.length + " carácteres digitados")}    

         var x = document.forms["Validacao"]["rg"].value;
         if ( x == null || x == "" || x.length < 8  ) {
             alert("Campo RG deve ser preenchido");
         }else{console.log("RG: " + x.length + " carácteres digitados")}    
         
         var x = document.forms["Validacao"]["digito"].value;
         if ( x == null || x == "") {
             alert("Campo Digito deve ser preenchido");
         }else{console.log("Digito: " + x.length + " carácteres digitados")}    
               
         var cpf = document.forms["Validacao"]["cpf"].value;
         if ( cpf == null || cpf == "" || cpf.length < 11 ) {
             alert("Campo CPF deve ser preenchido");
         }else{validarCPF(cpf)}

 function validarCPF(cpf) {	 
         cpf = cpf.replace(/[^\d]+/g,'');	
            
         if(cpf == '')
         alert("CPF Invalido");
         return false;	
         
         if (cpf.length != 11 || 
             cpf == "00000000000" || 
             cpf == "11111111111" || 
             cpf == "22222222222" || 
             cpf == "33333333333" || 
             cpf == "44444444444" || 
             cpf == "55555555555" || 
             cpf == "66666666666" || 
             cpf == "77777777777" || 
             cpf == "88888888888" || 
             cpf == "99999999999")
             alert("CPF Invalido");
                 return false;		

         add = 0;	
         for (i=0; i < 9; i ++)		
             add += parseInt(cpf.charAt(i)) * (10 - i);	
             rev = 11 - (add % 11);	
             if (rev == 10 || rev == 11)		
                 rev = 0;	
             if (rev != parseInt(cpf.charAt(9)))		
             alert("CPF Invalido");
                 return false;		
         // Valida 2o digito	
         add = 0;	
         for (i = 0; i < 10; i ++)		
             add += parseInt(cpf.charAt(i)) * (11 - i);	
         rev = 11 - (add % 11);	
         if (rev == 10 || rev == 11)	
             rev = 0;	
         if (rev != parseInt(cpf.charAt(10)))
         alert("CPF Invalido");
             return false;		
         
         return true;   
     }

 }
