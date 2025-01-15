<?php
header("Content-Security-Policy: script-src 'self' 'nonce-".base64_encode(openssl_random_pseudo_bytes(16))."';");
?>
