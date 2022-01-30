var app = new Vue({
    el: '#app',
    data: {
        picture: "https://randomuser.me/api/portraits/men/9.jpg",
        firstName: "Winston",
        lastName: "Smith",
        gender: "male",
        email: "winston.smith@gmail.com"

    },
    methods: {
        async getUser(){
            const url = 'https://randomuser.me/api/';
            const response = await fetch(url);
            const { results } = await response.json();
            this.picture = results[0].picture.large;
            this.firstName = results[0].name.first;
            this.lastName = results[0].name.last;
            this.gender = results[0].gender;
            this.email = results[0].email;
        }
    }
})