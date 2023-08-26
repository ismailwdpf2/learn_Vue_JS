var app = Vue.createApp(
    {
        data(){
            return{
               count: 0,
            };
        },
        methods: {       
            Increment(count, ev){
                this.count = this.count +count;
                console.log(ev);
            },
            Decrement(count){
                this.count = this.count -count;
            },
            test(ev) {
                console.log("test");
                console.log(ev);
            }
        }
    });
app.mount("#app");