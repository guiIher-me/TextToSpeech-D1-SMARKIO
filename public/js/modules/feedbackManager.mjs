const ID_FEEDBACK = 'feedback-box';
const feedbackDOM = document.getElementById(ID_FEEDBACK);

export const Feedback = {
	//constant flags
	ERROR   : 'error',
	WARNING : 'warning',
	SUCCESS : 'success',
	INFO    : 'info',

	//feedback messages
	error   : (message) => {Feedback.show(message, Feedback.ERROR)},
	warning : (message) => {Feedback.show(message, Feedback.WARNING)},
	success : (message) => {Feedback.show(message, Feedback.SUCCESS)},
	info    : (message) => {Feedback.show(message, Feedback.INFO)},
	show    : (message, flag) => {
		feedbackDOM.className = 'alert alert-' + flag;
		feedbackDOM.innerHTML = message;
	},
	hidden: () => {
		feedbackDOM.className = '';
		feedbackDOM.innerHTML = '';
	},

	//feedback buttons
	disable_btn: (btn_id) => {
		const btn = document.getElementById(btn_id);
		btn.disabled = true;
	},

	enable_btn: (btn_id) => {
		const btn = document.getElementById(btn_id);
		btn.disabled = false;
	}
}