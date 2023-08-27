var app = Vue.createApp({
  data() {
    return {
      num: "",
      result: "",
    };
  },
  methods: {
    handleinput(ev){
        // console.log(ev.target.value);
        this.num = ev.target.value;
      },
    getdubble(){
        this.result = this.num*2
    },
    getsqure(){
        this.result = this.num * this.num
    },
    reset(){
        this.num = "",
        this.result = ""
        
    }
  },
  
});
app.mount("#app");
