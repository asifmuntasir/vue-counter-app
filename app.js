const app = Vue.createApp({
    data() {
        return {
            count: 0
        }
    },

    methods: {
        increase() {
            this.count = this.count + 1;
        },
        decrease() {
            if (this.count == 0) {
                return 0;
            }
            this.count = this.count - 1;
        }
    },
});

app.mount('#app')