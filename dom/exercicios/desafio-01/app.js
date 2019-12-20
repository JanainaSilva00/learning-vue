new Vue({
    el: '#desafio', 
    data: {
        nome: 'Janaina',
        idade: 19, 
        link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'
    }, 
    methods: {
        idadeVezes() {
            return this.idade *3
        },
        randomNumber() {
            return Math.random()
        }
    }
});