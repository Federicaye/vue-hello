const { createApp } = Vue;
createApp({
    data() {
        return { 
            message: 'Hello Vue',
            img: 'gatto.jpg',
            alt: 'gatto',
            width: 'width'
        }
    },
    
}).mount('#app');