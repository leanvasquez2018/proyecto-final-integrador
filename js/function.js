const persona = '{"fechaDeNacimiento": "11 de Marzo de 1997", "nacionalidad": "Argentino", "lugarDeResidencia": "Ciudad Autónoma de Buenos Aires", "telefonoMovil": "11 3759-2288", "email": "johnni.morrison@example.com"}';
        const obj = JSON.parse(persona);
        console.log(obj);
        document.getElementById("demo").innerHTML = 
        "Fecha de nacimiento: "+obj.fechaDeNacimiento+
        " | Nacionalidad: "+obj.nacionalidad+
        " | Lugar de residencia: "+obj.lugarDeResidencia+
        " | Teléfono Móvil: "+obj.telefonoMovil+
        " | Email: "+obj.email;

document.getElementById('boton').addEventListener('click', function() {
   console.log("Hiciste click en el botón Leer de Sobre mí");
   document.getElementById('demo2').innerHTML = "Estoy estudiando el CBC para Ingeniería en Informática. Busco aplicar mis habilidades en el sector de la tecnología.";
});

document.getElementById('boton_ocultar').addEventListener('click', function() {
   console.log("Hiciste click en el botón Ocultar de Sobre mí");
   document.getElementById('demo2').innerHTML = "";
});

document.getElementById('boton2').addEventListener('click', function() {
   console.log("Hiciste click en el botón Leer de Educación");
   document.getElementById('demo3').innerHTML = "Facultad de Ingeniería Sede Las Heras. Marzo 2022 - Actualidad. CBC para Ingeniería en Informática. | Instituto Raúl Scalabrini Ortiz (IRSO). Año que terminé: 2014. Título Secundario: Perito Mercantil con Orientación en Computación.";
});

document.getElementById('boton_ocultar2').addEventListener('click', function() {
   console.log("Hiciste click en el botón Ocultar de Educación");
   document.getElementById('demo3').innerHTML = "";
});

document.getElementById('boton3').addEventListener('click', function() {
   console.log("Hiciste click en el botón Leer de Cursos");
   document.getElementById('demo4').innerHTML = "Argentina Programa 4.0 - Ticmas. Febrero 2023. Primeros pasos en el desarrollo front-end.";
});

document.getElementById('boton_ocultar3').addEventListener('click', function() {
   console.log("Hiciste click en el botón Ocultar de Cursos");
   document.getElementById('demo4').innerHTML = "";
});

document.getElementById('boton4').addEventListener('click', function() {
   console.log("Hiciste click en el botón Leer de Idiomas");
   document.getElementById('demo5').innerHTML = "Español: Nativo | Inglés: Básico";
});

document.getElementById('boton_ocultar4').addEventListener('click', function() {
   console.log("Hiciste click en el botón Ocultar de Idiomas");
   document.getElementById('demo5').innerHTML = "";
});

document.getElementById('boton5').addEventListener('click', function() {
   console.log("Hiciste click en el botón Leer de Intereses");
   document.getElementById('demo6').innerHTML = "Programación";
});

document.getElementById('boton_ocultar5').addEventListener('click', function() {
   console.log("Hiciste click en el botón Ocultar de Intereses");
   document.getElementById('demo6').innerHTML = "";
});

document.getElementById('boton_color').addEventListener('click', function() {
    console.log("Hiciste click en el botón Cambiar color de fondo");
    document.body.style.backgroundColor = 'rgb(243, 208, 128)';
 });
 
document.getElementById('boton_default').addEventListener('click', function() {
    console.log("Hiciste click en el botón Reestablecer color de fondo");
    document.body.style.backgroundColor = 'rgb(248, 233, 199)';
 });