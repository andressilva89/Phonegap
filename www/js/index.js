function pronto(page) {
  var funcao = window['page' + page];
  document.addEventListener('deviceready', funcao, false);
}

function page1() {
  window.addEventListener("batterystatus", onBatteryStatus, false);


}

function onBatteryStatus(status) {
  document.getElementById('battery').innerHTML =status.level;

  navigator.notification.alert(
    "Nivel da Bateria: " + status.level,
    nada, "Bateria");

  console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
}


function page2() {
  document.getElementById('model').innerHTML = device.model;
  document.getElementById('version').innerHTML = device.cordova;

  document.getElementById('doubletouch').addEventListener('touchend', function (evt) {
    if(evt.touchesList.length == 2){
      navigator.vibrate(200);
    }
  });
}

function page3() {
  obter_Celerometro();
  document.getElementById('Refresh').addEventListener('click',function () {
    obter_Celerometro();
  });


}

function obter_Celerometro() {
  navigator.accelerometer.getCurrentAcceleration(function (celerometro) {
    document.getElementById('CeleratorX').innerHTML = celerometro.x;
    document.getElementById('CeleratorY').innerHTML = celerometro.y;
    document.getElementById('CeleratorZ').innerHTML = celerometro.z;
    document.getElementById('CeleratorTS').innerHTML = celerometro.timestamp;
  });
}

function nada() {
  
}