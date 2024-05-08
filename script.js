const inputGoal = document.getElementById("input-box");
const goalList = document.getElementById("goal-list")

const addGoal = () => {
	if (inputGoal.value === '') {
		alert("You need to write a goal you want to add!");
		console.log(inputGoal.value)
	}
	else {
		let li = document.createElement("li");
		li.innerHTML = inputGoal.value;
		goalList.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "Remove";
		li.appendChild(span);
	}
	inputGoal.value = "";
}

goalList.addEventListener('click', (e) => {
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("checked");
	}
	else if (e.target.tagName === "SPAN") {
		e.target.parentElement.remove();
	}
}, false);