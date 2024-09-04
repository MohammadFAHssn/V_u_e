// you can some function and some variables here and use them below!

// a global object
Vue.createApp({
  data: function () {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal: function () {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");
// let Vue know which part of the page should be controlled by that Vue app
