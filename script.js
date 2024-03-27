const { createApp } = Vue;
createApp({
    data() {
        return { 
            message: 'Hello Vue',
            img: 'gatto.jpg',
            width: 'width'
        }
    },
    methods: {
        toogleClass() {
            this.miaclasse = 'blue';
        },
    }
}).mount('#app');