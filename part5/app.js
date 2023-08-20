var app = Vue.createApp(
    {
        data(){
            return{
               count: 0,
            };
        },
        methods: {
            // incre(){
            //     this.count=this.count + 1;
            // },
            // decre(){
            //     this.count=this.count - 1;
            // }
            incre(){
                this.count ++;
            },
            decre(){
                this.count --;
            }
        }
    });
app.mount("#app");