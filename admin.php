<?php
$host = "localhost"; 
$usuario = "root"; 
$contrasena = ""; 
$base_datos = "PQRS";

// Conectar a la base de datos
$conexion = new mysqli($host, $usuario, $contrasena, $base_datos);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error en la conexión: " . $conexion->connect_error);
}

// Consulta SQL para obtener los datos de la tabla Usuario y Peticiones
$sql = "SELECT Usuario.Nombre, Usuario.Correo, Peticiones.Comentario
        FROM Usuario
        INNER JOIN Peticiones ON Usuario.Numero_orden = Peticiones.Id_comentario";

$resultado = $conexion->query($sql);
?>



<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DUAM - Directorio de Universidades del Área Metropolitana</title>

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
  <!-- DUAM CSS -->
  <link rel="stylesheet" href="estilos/style.css">
  <link rel="icon" type="image/x-icon" href="GPT_Lo_Hace/DUAM_LOGO.svg">
  
  
</head>
<body onload="cargarEstadoModoOscuro()" onload="colordeletrasdelheader()">
  <!-- Barra de Navegacion -->
  <div class="Navegador">
    <nav class="navbar navbar-expand-lg  colornavegador">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="GPT_Lo_Hace/DUAM_LOGO_blanco.svg" id="logo" class="logo" alt=""></a>
        <button class="navbar-toggler  nav-tog" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav d-flex justify-content-center align-items-center">
            <li class="nav-item ">
              <a class="nav-link nav-a" href="index.html">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-a" href="universidades2.html">Universidades</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-a" href="becas.html">Becas</a>
              <li class="nav-item">
              <a class="nav-link nav-a" href="nosotros.html">Nosotros</a>
              </li>
            </li>
            <div class="dropdown">
              <button class="btn btn dropdown-toggle cambiacolor drop" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Carreras
              </button>
            
              <ul class="dropdown-menu">
                <li><a class="dropdown-item secciondrop" href="carreras.html">Pregrados</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item secciondrop" href="#">Especializaciones</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item secciondrop" href="#">Maestrías</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item secciondrop" href="#">Doctorados</a></li>
              </ul>
            </div>
          </ul>
          <div class="search">
            <input type="text" class="cambiacolor" placeholder="Escriba aquí" id="search">
            <button class="btn cambiacolor" id="search_icon">Presiona aquí para buscar</button>
            <div class="search_bx2" style="background-color: rgb(77, 77, 77); width: 300px;">
            </div>
         </div>
      </div>
    </nav>
  </div>
  <div style="height: 70px;"></div>
  <section class="container">
    <h1 class="display-1 text-center">Administrador comentarios</h1>
</head>
<body>
    <h1>Registros PQRS</h1>
    <table class="pqrs-table">
        <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Comentario</th>
        </tr>

        <?php
        $resultado = $conexion->query($sql);

        // Verificar si se obtuvieron resultados
        if ($resultado->num_rows > 0) {
            foreach ($resultado as $fila) {
                echo "<tr>";
                echo "<td>" . $fila['Nombre'] . "</td>";
                echo "<td>" . $fila['Correo'] . "</td>";
                echo "<td>" . $fila['Comentario'] . "</td>";
                echo "</tr>";
            }
        } else {
            echo "<tr><td colspan='3'>No se encontraron registros.</td></tr>";
        }

        // Cerrar la conexión
        $conexion->close();
        ?>
    </table>
  </section>
  <button id="dark-mode-toggle" class="btn btn-primary dark">Modo Oscuro</button>
  <script src="botonayuda.js"></script>
  <script src="darkmode.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
  </body>
</html>