const app = Vue.createApp({
    template: "<h2>This is my template...</h2>",
    // Create functions and data
    data() {
        return {
            title: "Raiden Shogun main",
            author: 'Mark Erolle D. Quiambao',
            age: 34
        }
    }
});
app.mount('#app');