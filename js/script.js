console.log('js ok');
console.log('Vue ok', Vue)

const {createApp} = Vue;

const app = createApp({
    data() {
        return{
            
        }
    }
});

app.mount('#root');