const pulsingIcon = document.querySelector('.popIcon');
const alertDisplay = document.querySelector('.popupDisplay');

function runPopUpAlert() {
	const newAlert = document.createElement('div');

	newAlert.innerHTML = `
		<div class="alert alert-primary popping" role="alert">
    		<h3 class="signWarning">WARNING!</h3> 
			<h6 class="signText">Foreign Hardware Detected.</h6>
  		</div>
	`;

	alertDisplay.appendChild(newAlert);
}

pulsingIcon.addEventListener('click', runPopUpAlert);
