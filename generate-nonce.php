<?php
$nonce = base64_encode(openssl_random_pseudo_bytes(16));
header("Content-Security-Policy: script-src 'self' 'nonce-$nonce';");
echo "<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Inline JavaScript with Nonce</title>
</head>
<body>
    <h1>Hola Mundo</h1>
    <button onclick='mostrarMensaje()'>Haz clic aquí</button>
    <script nonce='$nonce'>
        function mostrarMensaje() {
            alert('¡Hola, este es un mensaje desde JavaScript inline!');
        }
    </script>
</body>
</html>";
?>
