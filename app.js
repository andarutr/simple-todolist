const app = Vue.createApp({
	data() {
		return {
			enteredValue: '',
			goals: [],
			createdAt: new Date().toDateString()
		};
	},
	methods: {
		addGoal() {
			this.goals.push(this.enteredValue);
			this.enteredValue = '';
		},
		removeGoal(id) {
			this.goals.splice(id,1);
		}
	}
});

app.mount('#app');