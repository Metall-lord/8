var up = document.getElementById('Metall'); var down = document.getElementById('MLS'); var select = document.getElementById("arr"); var elmts = ["Nurgle", "Tzinch", "Khorn", "Slaanesh",];
up.innerHTML = "Click on the button to "+"perform the operation"+".<br>Array - [" + elmts + "]";
function Chaos_is_Good() {for (var i = 0; i < elmts.length; i++)
{var optn = elmts[i]; var el = document.createElement("option"); el.textContent = optn; el.value = optn;select.appendChild(el);}down.innerHTML = "Elements of Chaos Added!";}