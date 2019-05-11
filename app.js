new Vue({
    el: '#app',
    data:{
        title:'building my first Vuejs',
        God:'need God',
        name:'Jude',
        url:'https://www.facebook.com/juud.ik',
        classes:['one','two','three']
    },
    methods: {
        greet(time) {
            return `hello there i am ${this.title} this ${time}`
        },
        hello(time) {
            return `I  ${this.God} this ${time}`
        },
       
    }
   
})

new Vue({
    el: "#new",
    data:{
        name: 'jude',
        currency:"$",
        wage:100
    },

    methods: {
        incwage(amount){
            this.wage += amount
        }
    }
    

})





// new Vue ({
//     el: '#class',
//     data:{
//         classes:'lets see here'
//     }
// })