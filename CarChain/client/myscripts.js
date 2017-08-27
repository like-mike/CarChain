$(document).ready(function() {
    $('#modal1').modal();
});

$(document).ready(function() {
    $('#modal2').modal();
});

var vins = new Object();

var civicInfo = new Array("2017", "Honda", "Civic","234234234234");
vins['1234'] = civicInfo;



function findVin(){

  var inputVin = document.getElementById("vin").value.toString();
  

  //alert("Showing results");

  var carFound = vins[inputVin];

  var carYear = carFound[0];
  var carMake = carFound[1];
  var carModel = carFound[2];
  var contractID = carFound[3];


  document.getElementById("disYear").innerHTML = carYear;
  document.getElementById("disMake").innerHTML = carMake;
  document.getElementById("disModel").innerHTML = carModel;
  document.getElementById("disID").innerHTML = contractID;


  $('#modal2').modal('open');
  //alert(test);

}

