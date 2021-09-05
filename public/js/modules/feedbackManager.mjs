export const Feedback = {
	//constant flags
	ERROR   : 'error',
	WARNING : 'warning',
	SUCCESS : 'success',
	INFO    : 'info',

	//feedback functions
	error   : (message) => {Feedback.show(message, Feedback.ERROR)},
	warning : (message) => {Feedback.show(message, Feedback.WARNING)},
	success : (message) => {Feedback.show(message, Feedback.SUCCESS)},
	info    : (message) => {Feedback.show(message, Feedback.INFO)},
	show    : (message, flag) => {
		const ID_FEEDBACK = 'feedback-box';
		const feedbackDOM = document.getElementById(ID_FEEDBACK);
		feedbackDOM.className = 'alert alert-' + flag;
		feedbackDOM.innerHTML = message;
	}
}