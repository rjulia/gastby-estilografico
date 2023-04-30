<?php
header("Access-Control-Allow-Origin: *");
ini_set('display_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if(empty($_POST['name']) && empty($_POST['telephone'])) die();

if(isset($_POST['accept'])) {
    // set response code - 200 OK

    //http_response_code(200);
    $subject = "Email enviado desde la web de Estilografico";
    $to = "info@estilografico.com";
    $from = "Web estilografico";
    // data
  
    $msg = '<html><body>';
    $msg .= '<table rules="all" width="100%" style="border-color: #666;" cellpadding="10">';
    $msg .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . strip_tags($_POST['name']) . "</td></tr>";
    $msg .= "<tr><td><strong>telephone:</strong> </td><td>" . strip_tags($_POST['telephone'] ) . "</td></tr>";
    $msg .= "<tr><td><strong>Services:</strong> </td><td>" . strip_tags($_POST['services'] ) . "</td></tr>";
    $msg .= "<tr><td><strong>Message:</strong> </td><td>" . htmlentities($_POST['comments']) . "</td></tr>";
    $msg .= "</table>";
    $msg .= "</body></html>";

    // Headers

    $headers = "MIME-Version: 1.0\r\n";
    $headers.= "Content-type: text/html; charset=UTF-8\r\n";
    $headers.= "From: <" . $from . ">";
    mail($to, $subject, $msg, $headers);

    // echo json_encode( $_POST );

    echo json_encode(array( "sent" => true ));
	}  else	{
	// tell the user about error
	  echo json_encode(array("sent" => false, "message" => "Something went wrong"));
	}

