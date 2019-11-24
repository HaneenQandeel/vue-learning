Vue.component('greeting',{
  template:'<p>Hey I am {{name}}.<button v-on:click="ChangeName">Change Name:</button></p>',
  data: function(){
    return {
      name:'Haneen'
    }

  },
  methods:{
    ChangeName: function(){
      this.name = 'Salem'
    }

  }
})


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
    b:0,
    characters:['Ninja','Mario','Yoshi'],
    ninjas:[
      {name:'haneen',age:25},
      {name:'hassan',age:20},
      {name:'Ahmed',age:22}
    ]

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
