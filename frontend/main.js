window.addEventListener('DOMContentLoaded', (event) => {getVisitCount();})

const functionApi = '';

function getVisitCount = () => {
	let count = 0;
	fetch(functionApi).then(response => {
		return response.json()
	}).then(response => {
		console.log("json obtained from internet");
		count = response.count;
		document.getElementById("counter").innerText = count;
	}).catch(function(error){
	console.log(error);
	})
	return count;
}

