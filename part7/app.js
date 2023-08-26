var app = Vue.createApp(
    {
        data(){
            return {
                name:"",
                name2:""
            }           
        },
        methods: {
            handlekey(e,){
                // console.log(e.target.value)
                this.name = e.target.value              
            }, 
            handlekey2(e2){
                this.name2 = e2.target.value
            },
            handlesubmit(){
                console.log("submit")
            },
            cardhandle(){
                console.log('card')
            },
            btnhandle(){
                console.log("btn click")
            }
        },
    });
app.mount("#app");