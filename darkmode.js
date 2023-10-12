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
}

// Obtener el botón de alternar modo oscuro desde el DOM
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Agregar un event listener al botón para alternar el modo oscuro
darkModeToggle.addEventListener('click', alternarModo);
darkModeToggle.addEventListener('click', cambiarNombresEtiquetas);

// Cargar el estado del modo oscuro al iniciar la página
cargarEstadoModoOscuro();

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
    { nombre: 'Universidad Eafit', url: 'https://www.youtube.com/watch?v=psXuQHGFD80', carreras: 'administraciondenegocios//negociosinternacionales//enfermeria//ingenieriacivil//ingenieriadiseñodeproductos//ingenieriamecanica' },
    { nombre: 'Universidad de prueba', url: 'https://www.universidadXYZ.com', carreras: 'enfermeria//psicologia//' },
    { nombre: 'Unal', url: 'https://admisiones.unal.edu.co/pregrado/', carreras: 'otracarrera//enfermeria' },
    
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

