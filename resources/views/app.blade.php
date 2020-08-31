<!DOCTYPE html>
<html lang="en">
<head>
<title>PORTAFOLIO</title>
    <meta charset="UTF-8">

  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
  <link rel="shortcut icon" href="{{ asset('img/logo.png') }}">
  <link rel="shortcut icon" type="image/png" href="/img/logo.png"/>
    <link rel="manifest" href="/manifest.json"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}" >
    <meta name="csrf-token" value="{{ csrf_token() }}" />

    <link rel="stylesheet" href="style.css" >
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
</head>
<body>
    <div id="app">
        <v-app>
            
        </v-app>
    </div>
</body>
<script src="{{ mix('js/app.js') }}"></script>
</html>