new Vue({
    el: '#desafio',
    data: {
        valor: ''
    }, 
    methods: {
        exibirAlerta() {
            alert("Clique recebido com sucesso!")
        },
        armazenarValor(e) {
            this.valor = e.target.value
        }
    }
})