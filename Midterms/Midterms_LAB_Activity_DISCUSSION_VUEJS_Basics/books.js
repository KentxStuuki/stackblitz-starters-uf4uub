const books = Vue.createApp({
    data(){
        return{
            showBooks: true,
            btitle: "Raiden Shogun main",
            bauthor: 'Mark Erolle D. Quiambao',
            AR: 58
        }
    },

    methods:{
        toogleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
});
books.mount('#books')