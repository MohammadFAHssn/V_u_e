Vue.createApp({
  data: function () {
    return {
      // ----- sec 2 -----
      items: ["item1", "item2", "3", "سه"],
      // ----- end sec 2 -----

      // ----- sec 3 -----
      goals: [],
      enteredValue: "",
      // ----- end sec 3 -----

      // ----- sec 4 -----
      goalsInSec4: [],
      enteredValueInSec4: "",
      goalsInSec4_2: [],
      enteredValueInSec4_2: "",
      // ----- end sec 4 -----
    };
  },
  methods: {
    // ----- sec 3 -----
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
    // ----- end sec 3 -----

    // ----- sec 4 -----
    addGoalInSec4() {
      this.goalsInSec4.push(this.enteredValueInSec4);
      this.enteredValueInSec4 = "";
    },
    removeGoalInSec4(index) {
      this.goalsInSec4.splice(index, 1);
    },
    addGoalInSec4_2() {
      this.goalsInSec4_2.push(this.enteredValueInSec4_2);
      this.enteredValueInSec4_2 = "";
    },
    removeGoalInSec4_2(index) {
      this.goalsInSec4_2.splice(index, 1);
    },
    // ----- end sec 4 -----
  },
  watch: {},
}).mount("#app");
