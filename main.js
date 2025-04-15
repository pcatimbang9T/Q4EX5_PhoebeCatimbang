/*
Guide:
B: burger
F: fries
S: Soda
*/

function verifyOrder() {
	var order = document.getElementById('inputChoice').value.toUpperCase(); // optional: makes it case-insensitive

	switch (order) {
		case "B":
			document.getElementById('choiceResult').innerHTML = "You ordered Burger";
			break;
		case "F":
			document.getElementById('choiceResult').innerHTML = "You ordered Fries";
			break;
		case "S":
			document.getElementById('choiceResult').innerHTML = "You ordered Soda";
			break;
		default:
			document.getElementById('choiceResult').innerHTML = "ERROR: Invalid choice";
			break;
	}
}
