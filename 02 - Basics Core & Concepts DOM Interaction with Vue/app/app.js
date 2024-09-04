Vue.createApp({
  data: function () {
    return {
      // 3 --------------
      vueDocumentationLink: "https://vuejs.org/guide/quick-start.html",
      // end 3 --------------

      // 4 --------------
      something: "",
      somethingWithSomething: "",
      // end 4 --------------

      // 1 --------------
      name: "",
      confirmedName: "",
      // end 1 --------------

      // 2 --------------
      nameInSec2: "",
      // end 2 --------------
    };
  },
  methods: {
    // 4 --------------
    writeSomething(event) {
      this.something = event.target.value;
      // Because this default event object will be full of information about the event
      // And for example, it will give us information about the HTML element on which this event occurred
    },
    writeSomethingWithSomething(event, something) {
      this.somethingWithSomething = event.target.value + " " + something;
    },
    // end 4 --------------

    // 5 --------------
    submitForm(event) {
      event.preventDefault();
      alert("submitted");
    },
    submitForm2() {
      alert("submitted");
    },
    // end 5 --------------

    // 1 --------------
    setName(event) {
      this.name = event.target.value;
    },
    setConfirmedName(event) {
      this.confirmedName = event.target.value;
    },
    // end 1 --------------

    // 2 --------------
    setNameInSec2(event) {
      this.nameInSec2 = event.target.value;
    },
    resetInputInSec2() {
      this.nameInSec2 = "";
    },
    // end 2 --------------
  },
  watch: {
    // 6 --------------
    // this name must be one of data property name that base of that property this method should be executed.
    name(newValue, oldValue) {
      this.confirmedName = "confirmed" + " " + oldValue;
      // oldValue instead of this.name
    },
    // end 6 --------------
  },
}).mount("#app");
