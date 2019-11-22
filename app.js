var vm = new Vue({
  el:'#app',
  data:{
    name:'Haneen Qandeel',
    age:25,
    job:'Programmer',
    website:'https://linkedin.com',
    websiteTag:'<a href="https://facebook.com">The Facebook Website</a>',
    Yourname:'',
    Yourage: '',
    a :0,
    b:0
  },
  methods:{
    Greeting :function(time){
      return 'Good' +' '+ time +' ' +this.name
    },
    add: function(inc){
      this.age += inc
    },
    subtract: function(dec){
      this.age -= dec
    },
    addToA: function(){
      return this.a + this.age
    },
    addToB: function(){
      return this.b + this.age
    }

  }
})
