<?php
  // Connexion to a database
  $server_name = 'localhost';
  $db_name = 'ajax_request';
  $username = 'root';
  $password = '';

  // Etablissement de la connexion
  $connexion = mysqli_connect($server_name, $username, $password, $db_name);

  // Verifier la connexion
  if(!$connexion) {
    die('Error :' .mysqli_connect_error());
  } else {
    // echo 'Connexion Réussie';
  }

  echo 'Process...';

  // Checked for GET Variable
  if(isset($_GET['name'])) {
    echo 'GET: Your name is:'. $_GET['name'];
  }

  // Checked for POST Variable
  if(isset($_POST['name'])) {
    $name = mysqli_real_escape_string($connexion, $_POST['name']);
    echo 'POST: Your name is:' .$_POST['name'];

    $query = "INSERT INTO users(name) VALUES('$name')";

    if(mysqli_query($connexion, $query)) {
      echo ' User Added';
    } else {
      echo 'ERROR :' .mysqli_error($connexion);
    }
  }
?>