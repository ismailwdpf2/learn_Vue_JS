var app = Vue.createApp({
  data() {
    return {
     activeclass: "red",
    };
  },
  methods: {
    setclass(classname){
      this.activeclass = classname;
    }
  },
});
app.mount("#app");
