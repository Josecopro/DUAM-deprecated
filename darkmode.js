/** inicio seccion buscador */

let search_icon = document.getElementById('search_icon');

search_icon.addEventListener('click', () => {
    search.classList.toggle('search_input');
})


// Movies Box Set

const DUAMBASEDEDATOS = [{
            img: "si vamos a poner imagenes en el buscador aquí iran",
            title: "Ciencias basicas",
            descripcion:"si vamos a realizar una descripcion: pequeña descripción",
            url: "carreras.divisiones/cienciasbasicas.html",
        },
        {
            img: "si vamos a poner imagenes en el buscador aquí iran",
            title: "Ciencias Sociales",
            descripcion:"si vamos a realizar una descripcion: pequeña descripción",
            url: "carreras.divisiones/cienciassociales.html",
        },
        {
            img: "si vamos a poner imagenes en el buscador aquí iran",
            title: "Educación",
            descripcion:"si vamos a realizar una descripcion: pequeña descripción",
            url: "carreras.divisiones/educacion.html",
        },
        {
          img: "si vamos a poner imagenes en el buscador aquí iran",
          title: "Humanidades",
          descripcion:"si vamos a realizar una descripcion: pequeña descripción",
          url: "carreras.divisiones/humanidades.html",
        },
        {
          img: "si vamos a poner imagenes en el buscador aquí iran",
          title: "Ingenerias",
          descripcion:"si vamos a realizar una descripcion: pequeña descripción",
          url: "carreras.divisiones/ingenierias.html",
        },
        {
          img: "si vamos a poner imagenes en el buscador aquí iran",
          title: "Salud",
          descripcion:"si vamos a realizar una descripcion: pequeña descripción",
          url: "carreras.divisiones/salud",
        },
        {
          img: "si vamos a poner imagenes en el buscador aquí iran",
          title: "Servicios",
          descripcion:"si vamos a realizar una descripcion: pequeña descripción",
          url: "carreras.divisiones/servicios.html",
        },
        {
          img: "si vamos a poner imagenes en el buscador aquí iran",
          title: "Enfermeria",
          descripcion:"si vamos a realizar una descripcion: pequeña descripción",
          url: "carreras.divisiones/saludsubdivisiones/enfermeria.html",
        },
        {
          img: "si vamos a poner imagenes en el buscador aquí iran",
          title: "Pregrados",
          descripcion:"si vamos a realizar una descripcion: pequeña descripción",
          url: "carreras.html",
        },
        {
          img: "https://svgshare.com/i/xq_.svg",
          title: "Carreras",
          descripcion:"Aqui encontraras las carreras",
          url: "carreras.html",
        },
        //Ingenieria subdivisiones:
        {
          img: "https://svgshare.com/i/xq_.svg",
          title: "Ingeniería civil",
          descripcion:"Aqui encontraras las carreras",
          url: "carreras.divisiones/Ingenieriassubdivisiones/ingenieriacivil.html",
        },
        {
          img: "https://svgshare.com/i/xq_.svg",
          title: "Ingeniería mecanica",
          descripcion:"Aqui encontraras las carreras",
          url: "carreras.divisiones/Ingenieriassubdivisiones/ingeneriamecanica.html",
        },
        //fin ingenieria subdivisiones
        {
          img: "https://svgshare.com/i/xq_.svg",
          title: "Administración de negocios",
          descripcion:"Aqui encontraras las carreras",
          url: "carreras.divisiones/cienciassocialessubdivisiones/administraciondenegocios.html",
        },
        {
        img: "si vamos a poner imagenes en el buscador aquí iran",
        title: "???",
        descripcion:"???",
        url: "piripiri.html",
        },
        {
          img: "si vamos a poner imagenes en el buscador aquí iran",
          title: "adminpage",
          descripcion:"debemos administrar la pagina, que loco",
          url: "admin.php",
          },
          //subdivisiones salud:
          {
            img: "si vamos a poner imagenes en el buscador aquí iran",
            title: "Administración ambiental",
            descripcion:"debemos administrar la pagina, que loco",
            url: "carreras.divisiones/saludsubdivisiones/adminambientalysanitaria.html",
            },
             {
            img: "si vamos a poner imagenes en el buscador aquí iran",
            title: "Fisioterapia",
            descripcion:"debemos administrar la pagina, que loco",
            url: "carreras.divisiones/saludsubdivisiones/fisioterapia.html",
            },
            {
              img: "si vamos a poner imagenes en el buscador aquí iran",
              title: "Microbilogia",
              descripcion:"debemos administrar la pagina, que loco",
              url: "carreras.divisiones/saludsubdivisiones/microbiologiaindustrialyambiental.html",
             },
             {
              img: "si vamos a poner imagenes en el buscador aquí iran",
              title: "Medicina",
              descripcion:"debemos administrar la pagina, que loco",
              url: "carreras.divisiones/saludsubdivisiones/medicina.html",
             },
    ]

let search_bx2 = document.getElementsByClassName('search_bx2')[0];


window.addEventListener('load', () => {
    DUAMBASEDEDATOS.forEach(element => {
        const {title, descripcion, url,img } = element;
        let card = document.createElement('a');
        card.href = url;
        card.innerHTML = ` 
        <div class="content2 d-flex justify-content-center">
            <h6>${title}</h6>
        </div>`;
        search_bx2.appendChild(card);
    });
});


search.addEventListener('keyup', () => {
    let filter = search.value.toUpperCase();
    let a = search_bx2.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
        let b = a[i].getElementsByClassName('content2')[0];
        let c = b.getElementsByTagName('h6')[0];

        let TextValue = c.textContent || c.innerText;
        if (TextValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = '';
            search_bx2.style.visibility = "visible";
            search_bx2.style.opacity = 1;
        } else {
            a[i].style.display = 'none';
        }
        if (search.value == 0) {
            search_bx2.style.visibility = "hidden";
            search_bx2.style.opacity = 0;
        }
    }
})

/**fin buscador */
// Función para guardar el estado del modo oscuro en el almacenamiento local
function guardarEstadoModoOscuro(estado) {
  localStorage.setItem('modoOscuro', estado);
}

// Función para recuperar el estado del modo oscuro del almacenamiento local
function obtenerEstadoModoOscuro() {
  return localStorage.getItem('modoOscuro');
}

// Función para alternar el modo oscuro
function alternarModo() {
  const body = document.body;
  const navbar = document.querySelector('.navbar');
  
  // Comprobar si el cuerpo tiene la clase 'bg-dark' para determinar el estado actual del modo oscuro
  const enModoOscuro = body.classList.toggle('bg-dark');
  
  // Alternar el color del texto en función del estado del modo oscuro
  body.classList.toggle('text-white');
  
  // Alternar el color de fondo de la barra de navegación en función del estado del modo oscuro
  navbar.classList.toggle('bg-dark');
  // Guardar el estado del modo oscuro en el almacenamiento local
  guardarEstadoModoOscuro(enModoOscuro.toString());
}

// Función para cambiar la propiedad de la barra de navegación
function cambiarPropiedadNav() {
  const navbar = document.querySelector('.navbar');
  const nav=document.querySelector('.nav-link');
  
  // Remover la clase 'bg-light' y alternar la clase 'bg-dark'
  navbar.classList.remove('bg-light');
  navbar.classList.toggle('bg-dark');
  
  // Guardar el estado del modo oscuro en el almacenamiento local
  guardarEstadoModoOscuro(navbar.classList.contains('bg-dark').toString());
}

// Función para cargar el estado del modo oscuro al iniciar la página
function cargarEstadoModoOscuro() {
  const estadoModoOscuro = obtenerEstadoModoOscuro();
  
  // Verificar el estado del modo oscuro y aplicar los estilos correspondientes
  if (estadoModoOscuro === 'true') {
    document.body.classList.add('bg-dark');
    document.body.classList.add('text-white');
    document.querySelector('.navbar').classList.add('bg-dark');
  }

  const enlaces = document.querySelectorAll('.nav-link');
  const colorletra= document.querySelectorAll('.Tiposdeuniversidades')
  const colorletralogo= document.querySelectorAll('.navbar-brand')
  const palabracambiante= document.querySelectorAll('.cambiacolor')
  const navbar = document.querySelector('.navbar');
  const logo = document.getElementById('logo');
  const logo2= document.getElementById('logo2');
  const espacioancladoaJS= document.getElementById('fondo_de_cuadros_JS');
  palabracambiante.forEach((enlace) => {
    if (estadoModoOscuro==='false') {
      enlace.classList.remove('text-white');
      enlace.classList.add('text-dark');
    } else if ((estadoModoOscuro==='true')){
      enlace.classList.remove('text-dark');
      enlace.classList.add('text-white');
    }
  });
  enlaces.forEach((enlace) => {
    if (estadoModoOscuro==='false') {
      enlace.classList.remove('text-white');
      enlace.classList.add('text-dark');
    } else if ((estadoModoOscuro==='true')){
      enlace.classList.remove('text-dark');
      enlace.classList.add('text-white');
    }
  });
  colorletra.forEach((enlace) => {
    if (estadoModoOscuro==='false') {
      enlace.classList.remove('text-white');
      enlace.classList.add('text-dark');
    } else if ((estadoModoOscuro==='true')){
      enlace.classList.remove('text-dark');
      enlace.classList.add('text-white');
    }
  })
  colorletralogo.forEach((enlace) => {
    if (estadoModoOscuro==='false') {
      enlace.classList.remove('text-white');
      enlace.classList.add('text-dark');
    } else if ((estadoModoOscuro==='true')){
      enlace.classList.remove('text-dark');
      enlace.classList.add('text-white');
    }
  })

  if (estadoModoOscuro==='true') {
    logo.src = 'https://svgshare.com/i/xr0.svg';
    logo2.src = 'https://svgshare.com/i/xr0.svg';
  } else {
    logo.src = 'https://svgshare.com/i/xqa.svg';
    logo2.src = 'https://svgshare.com/i/xqa.svg';
  }
  if(estadoModoOscuro==='true'){
    espacioancladoaJS.classList.remove('bg-light');
    espacioancladoaJS.classList.add('bg-dark');
  }else{
    espacioancladoaJS.classList.remove('bg-dark');
    espacioancladoaJS.classList.add('bg-light');
  }

}

// Obtener el botón de alternar modo oscuro desde el DOM
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Agregar un event listener al botón para alternar el modo oscuro
darkModeToggle.addEventListener('click', alternarModo);
darkModeToggle.addEventListener('click', cambiarNombresEtiquetas);

// Cargar el estado del modo oscuro al iniciar la página
cargarEstadoModoOscuro();
document.addEventListener("DOMContentLoaded", function() {
  // Obtener el botón y la imagen
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const darkModeImage = darkModeToggle.querySelector("img");

  // Verificar si hay una cookie para el modo oscuro
  const darkModeCookie = getCookie("darkMode");
  if (darkModeCookie) {
    darkModeImage.src = darkModeCookie === "modooscuro1" ? "https://svgshare.com/i/zTq.svg" : "https://svgshare.com/i/zWF.svg";
  }

  // Agregar evento de clic al botón
  darkModeToggle.addEventListener("click", function() {
    // Cambiar la imagen y guardar el estado en la cookie
    if (darkModeImage.src.endsWith("/i/zTq.svg")) {
      darkModeImage.src = "https://svgshare.com/i/zWF.svg";
      setCookie("darkMode", "modooscuro2", 7);
    } else {
      darkModeImage.src = "https://svgshare.com/i/zTq.svg";
      setCookie("darkMode", "modooscuro1", 7);
    }
  });

  // Función para obtener el valor de una cookie
  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  }

  // Función para establecer una cookie
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
  }
});

// Función para cambiar los nombres de las etiquetas <a> y guardar el estado en el almacenamiento local
function cambiarNombresEtiquetas() {
    const estadoModoOscuro = obtenerEstadoModoOscuro();
    const enlaces = document.querySelectorAll('.nav-link');
    const colorletra= document.querySelectorAll('.Tiposdeuniversidades')
    const colorletralogo= document.querySelectorAll('.navbar-brand')
    const palabracambiante= document.querySelectorAll('.cambiacolor')
    const navbar = document.querySelector('.navbar');
    const logo = document.getElementById('logo');
    const logo2= document.getElementById('logo2');
    const espacioancladoaJS= document.getElementById('fondo_de_cuadros_JS');
    palabracambiante.forEach((enlace) => {
      if (estadoModoOscuro==='false') {
        enlace.classList.remove('text-white');
        enlace.classList.add('text-dark');
      } else if ((estadoModoOscuro==='true')){
        enlace.classList.remove('text-dark');
        enlace.classList.add('text-white');
      }
    });
    enlaces.forEach((enlace) => {
      if (estadoModoOscuro==='false') {
        enlace.classList.remove('text-white');
        enlace.classList.add('text-dark');
      } else if ((estadoModoOscuro==='true')){
        enlace.classList.remove('text-dark');
        enlace.classList.add('text-white');
      }
    });
    colorletra.forEach((enlace) => {
      if (estadoModoOscuro==='false') {
        enlace.classList.remove('text-white');
        enlace.classList.add('text-dark');
      } else if ((estadoModoOscuro==='true')){
        enlace.classList.remove('text-dark');
        enlace.classList.add('text-white');
      }
    })
    colorletralogo.forEach((enlace) => {
      if (estadoModoOscuro==='false') {
        enlace.classList.remove('text-white');
        enlace.classList.add('text-dark');
      } else if ((estadoModoOscuro==='true')){
        enlace.classList.remove('text-dark');
        enlace.classList.add('text-white');
      }
    })

    if (estadoModoOscuro==='true') {
      logo.src = 'https://svgshare.com/i/xr0.svg';
      logo2.src = 'https://svgshare.com/i/xr0.svg';
    } else {
      logo.src = 'https://svgshare.com/i/xqa.svg';
      logo2.src = 'https://svgshare.com/i/xqa.svg';
    }
    if(estadoModoOscuro==='true'){
      espacioancladoaJS.classList.remove('bg-light');
      espacioancladoaJS.classList.add('bg-dark');
    }else{
      espacioancladoaJS.classList.remove('bg-dark');
      espacioancladoaJS.classList.add('bg-light');
    }

    // Guardar el estado en el almacenamiento local
    localStorage.setItem('nombresEtiquetasModificados', 'true');
  }
  
  // Verificar si los nombres de las etiquetas ya han sido modificados previamente
  const estadoNombresEtiquetas = localStorage.getItem('nombresEtiquetasModificados');
  
  if (estadoNombresEtiquetas === 'true') {
    // Si ya han sido modificados, llamar a la función para aplicar los cambios
    cambiarNombresEtiquetas();
  }
  
  function colordeletrasdelheader() {
    return localStorage.getItem('nombresEtiquetasModificados');
  }

  //filtrador de universidades en las que se encuentra un pregrado:

  const universidades = [
    { nombre: 'Universidad Eafit', url: ' https://www.eafit.edu.co/', carreras: 'administraciondenegocios//negociosinternacionales//contaduriapublica//mercadeo//ingenieriacivil//ingenieriadedisenodeproducto//ingenieriamecanica//ingenieriadeprocesos//ingenieriadeproduccion//ingenieriadesistemas//ingenieriaagronomica//biologia//geologia//ingenieriamatematica//ingenieriafisica//disenourbanoygestiondehabitat//musica//comunicacionsocial//psicologia//literatura//disenointeractivo//derecho//finanzas//economia//cienciaspoliticas' },
    { nombre: 'Universidad de Medellín', url: ' https://udemedellin.edu.co/', carreras: 'derecho//investigacioncriminal//administraciondeempresas//contaduriapublica//mercadeo//negociosinternacionales//economia//ingenieriaambiental//ingenieriadesistemas//ingenieriacivil//ingenieriaelectronica//ingenieriafinanciera//ingenieriaenenergia//ingenieriaentelecomunicaciones//ingenieriaindustrial//comunicacionyrelacionescorporativas//comunicaciongraficaypublicitaria//comunicacionenlenguajesaudiovisuales//comunicacionyentretenimientodigital//psicologia//cienciaspoliticas//computacioncientifica//disenoygestiondeespacios//disenoygestiondelamodayeltextil//disenoygestiondelproducto' },
    { nombre: 'Universidad CES', url: 'https://www.ces.edu.co/', carreras: 'tecnologiaenatencionhospitalaria//medicina//optometria//tecnologiaenregenciadefarmacia//biologia//ecologia//quimicafarmaceutica//administraciondeempresas//derecho//enfermeria//fisioterapia//ingenieriabiomedica//medicinaveterinariayzootecnia//nutricionydietetica//odontologia//psicologia ' },
    { nombre: 'Universidad EIA', url: 'https://www.eia.edu.co/', carreras:'fisica//ingenieriaambiental//ingenieriaindustrial//ingenieriadesistemasycomputacion//ingenieriageologica//ingenieriamecanica//ingenieriamecatronica//ingenieriabiomedica//medicina//ingenieriabiotecnologica//ingenieriafinanciera//ingenieriaadministrativa//economia' },
    { nombre: 'Universidad UPB', url: ' https://www.upb.edu.co/es/home', carreras:'asistenteenprogramaciondesoftware//asistentedelogistica//instalacionymatenimientodesistemasdeenergiasolar//porcompetenciasenprogramaciondesoftware//marketingdigitalygestionderedessociales//competenciasenelcuidadodepersonasdependientes//animacion2d//energiasrenovables//programaciondesoftware//mantenimientomecatronico//administraciondeempresas//arquitectura//cienciaspoliticas//comunicacionsocial-periodismo//derecho//disenografico//disenoindustrial//disenodevestuario//economia//enfermeria//estudiosliterarios//filosofia//gestiondelemprendimientoylainnovacion//historia//ingenieriaadministrativa//ingenieriaaeronautica//ingenieriaagroindustrial//ingenieriaambiental//ingenieriaelectronica//ingenieriaelectrica//ingenieriaindustrial//ingenieriamecanica//ingenieriaquimica//ingenieriadesistemaseinformatica//ingenieriadecienciadelosdatos//ingenieriaendisenodeentretenimientodigital//ingenieriaennanotecnologia//licenciaturaenespanol-ingles//licenciaturaenetnoeducacion//licenciaturaenfilosofiayletras//medicina//negociosinternacionales//psicologia//publicidad//teologia//trabajosocial// '},
    { nombre: 'Universidad Sanbuenaventura', url: ' https://www.usbmed.edu.co/', carreras:'adiministraciondenegocios//negociosinternacionales//contaduriapublica//psicologia//arquitectura//disenoambiental//derecho//licenciaturaeneducacioninfantil//licenciaturaeneducacionartistica//tecnologiaenentrenamientodeportivo//ingenieriadesonido//ingenieriaambiental//ingenieriaindustrial//ingenieriamultimedia//ingenieriadedatosysoftware//ingenieriadesistemasciberneticos' },
    { nombre: 'Universidad EAN', url: 'https://universidadean.edu.co/', carreras:'administraciondemepresas//contaduriapublica//economia//mercadeo//mercadeoyestrategiacomercial//negociosinternacionales//comunicacion//estudiosygestioncultural//lenguasmodernas//psicologia//ingenieriaambiental//ingenieriadeproduccion//ingenieriadesistemas//ingenieriaenenergias//ingenieriaindustrial//ingenieriamecatronica//ingenieriaquimica' },
    { nombre: 'Fundación Universitaria del Area Andina', url: ' https://www.areandina.edu.co/', carreras:'tecnologiaengestiondeltalentohumano//tecnologiaengestiondecalidad//finanzasynegociosinternacionales//economia//adiministracionpublica//marketingdenegocios//administraciondeempresas//tecnicoprofesionalenproducciondeganaderiasostenibles//tecnologiaenproducciondeganaderiasostenible//licenciaturaencienciassociales//licenciaturaeneducacioninfantil//licenciaturaenpedagogiainfantil//tecnologiaenlogistica' },
    { nombre: 'Fundación Universitaria Ceipa', url: 'https://ceipa.edu.co/', carreras:'contaduriapublica//administraciondeempresas//administraciondemercadeo//administraciondenegociosinternacionales//administracionfinanciera//administracionhumana' },
    { nombre: 'Universidad Nacional Abierta y a Distancia', url: ' https://www.unad.edu.co/', carreras:'tecnologiaengestionagropecuaria//tecnologiaengestioncomercialydenegocios//tecnologiaengestiondeempresasyorganizacionessolidarias//tecnologiaengestiondeobrascivilesyconstrucciones//tecnologiaengestiondetransportes//tecnologiaengestionindustrial//administraciondeempresas//contaduriapublica//economia//negociosinternacionales//tecnologiaenmanejoycomercializacionagroforestal//tecnologiaenproduccionagricola//tecnologiaenproduccionanimal//agronomia//ingenieriaagroforestal//ingenieriaambiental//zootecnia//tecnologiaenautomatizacionelectronicaindustrial//tecnologiaencalidadalimentaria//tecnologiaendesarrollodesoftware//tecnologiaenredesinalambricas//tecnologiaenlogisticaindustrial//tecnologiaenproducciondeaudio//disenoindustrial//ingenieriadealimentos//ingenieriadesistemas//ingenieriaentelecomunicaciones//ingenieriaelectronica//ingenieriaindustrial//ingenieriamultimedia//artesvisuales//comunicacionsocial//filosofia//gestiondeportiva//musica//psicologia//sociologia//tecnologiaenradiologiaeimagenesdiagnosticas//tecnologiaenregenciadefarmacia//tecnologiaenseguridadysaludeneltrabajo//administracionensalud//profesionalenseguridadysaludeneltrabajo//tecnologiaengestionjuridicadelainformacion//cienciaspoliticas//derecho ' },
    { nombre: 'Universidad Autónoma Latinoamericana', url: 'https://www.unaula.edu.co/', carreras:'administraciondeempresas//contaduriapublica//derecho//economia//licenciaturaencienciassociales//ingenieriainformatica//ingenieriaindustrial' },
    { nombre: 'Universidad Nacional', url: 'https://medellin.unal.edu.co/', carreras:'arquitectura//artesplasticas//construccion//estadistica//ingenieriabiologica//ingenieriafisica//matematicas//tecnologiaforestal//ingenieriaagricola//ingenieriaagronomica//ingenieriaforestal//zootecnia//cienciaspoliticas//economia//historia//ingenieriaadministrativa//ingenieriaambiental//ingenieriacivil//ingenieriadecontrol//ingenieriademinasymetalurgia//ingenieriadepetroleos//ingenieriadesistemaseinformatica//ingenieriaelectrica//ingenieriageologica//ingenieriaindustrial//ingenieriamecanica//ingenieriaquimica' },
    { nombre: 'Universidad de Antioquia', url: 'https://www.udea.edu.co/', carreras:'artesplasticas//licenciaturaenartesplasticas//artedramatico//licenciaturaenartesescenicas//licenciaturaendanzas//musica-canto//musica//licenciaturaenmusica//gestionnatural//tecnologiaengestiondeinsumosagropecuarios//medicinaveterinaria//zootecnia//administraciondeempresas//contaduriapublica//economia//astronomia//biologia//estadistica//fisica//matematicas//quimica//tecnologiaenregenciadefarmacia//quimicafarmaceutica//ingenieriadealimentos//antropologia//historia//psicologia//sociologia//trabajosocial//comunicaciones//comunicacionaudiovisualymultimedial//filologia-hispanica//periodismo//derecho//cienciaspoliticas//licenciaturaencienciasnaturales//licenciaturaencienciassociales//licenciaturaeneducacionbasicaprimaria//licenciaturaeneducacionespecial//licenciaturaeneducacioninfantil//licenciaturaenfisica//licenciaturaenliteraturaylenguacastellana//licenciaturaenmatematicas//licenciaturaenpedagogiadelamadretierra//pedagogia//enfermeria//bioingenieria//ingenieriaambiental-virtual//ingenieriaambiental//ingenieriacivil//ingenieriaelectrica//ingenieriaelectronica//ingenieriademateriales//ingenieriamecanica//ingenieriasanitaria//ingenieriaquimica//ingenieriaindustrial//ingenieriaindustrial-virtual//ingenieriaentelecomunicaciones//ingenieriaentelecomunicaciones-virtual//ingenieriadesistemas//ingenieriadesistemas-virtual//medicina//instrumentacionquirurgica//administracionambientalysanitaria//administracionensalud//gerenciaensistemasdeinformacionensalud//odontologia//traduccioningles-frances-espanol//licenciaturaenlenguasextrangerasconenfasiseninglesyfrances//archivista//bibliotecologia//microbiologiaindustrialyambiental//microbiologiaybioanalisis//nutricionydietetica//filosofia//licenciaturaenfilosofia//entrenamientodeportivo//licenciaturaeneducacionfisica' },
    { nombre: 'Instituto Tecnológico Metropolitano-ITM', url: 'https://www.itm.edu.co/', carreras:'tecnologiaenanalisisdecostosypresupuestos//tecnologiaenanalisisdecostosypresupuestos-virtual//tecnologiaenautomatizacionelectronica//tecnologiaenconstrucciondeacabadosarquitectonicos//tecnologiaencontroldelacalidad//tecnologiaendesarrollodeaplicacionesparadispositivosmoviles//' },
    { nombre: 'Universidad Eafit', url: ' https://www.eafit.edu.co/', carreras:'' },
    { nombre: 'Universidad Eafit', url: ' https://www.eafit.edu.co/', carreras:'' },
    { nombre: 'Universidad Eafit', url: ' https://www.eafit.edu.co/', carreras:'' },
    { nombre: 'Universidad Eafit', url: ' https://www.eafit.edu.co/', carreras:'' },
    { nombre: 'Universidad Eafit', url: ' https://www.eafit.edu.co/', carreras:'' },
    { nombre: 'Universidad Eafit', url: ' https://www.eafit.edu.co/', carreras:'' },   
  ];
  
// Función para crear y agregar botones de universidades según la clase del contenedor
function crearBotones() {
  const contenedor = document.getElementById('botonesContenedor');
  const claseContenedor = contenedor.classList[0]; // Obtén la clase del contenedor

  // Filtrar universidades por la clase del contenedor
  const universidadesFiltradas = universidades.filter(universidad => {
    const carreras = universidad.carreras.split('//');
    return carreras.includes(claseContenedor);
  });

  // Crear y agregar botones para las universidades filtradas
  universidadesFiltradas.forEach(universidad => {
    const boton = document.createElement('a');
    boton.textContent = universidad.nombre;
    boton.href = universidad.url;
    nombreuni=universidad.nombre;
    urlu=universidad.url;
    boton.innerHTML= `
    <a href="${urlu}" target="_blank" class="queso">${nombreuni}<a>`;
    boton.target = '_blank'; // Abre enlace en una nueva pestaña
    boton.classList.add('boton-universidad'); // Agrega una clase para estilizar
    contenedor.appendChild(boton);
  });
}

// Llama a la función para crear los botones
crearBotones();

