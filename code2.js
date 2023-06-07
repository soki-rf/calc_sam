function calculateHeat() {
  var current = parseFloat(document.getElementById('current').value);
  var resistance = parseFloat(document.getElementById('resistance').value);
  var time = parseFloat(document.getElementById('time').value);

  var heat = current * current * resistance * time;

  document.getElementById('result').innerHTML = "Теплота (Q) = " + heat + " Дж";
}
