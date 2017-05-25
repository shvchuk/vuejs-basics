/**
 * Created by Andrzej on 2017-05-25.
 */
Vue.component('app-username', {
    props: ['username'],
    data: function (  ) {
        return {
            // username: 'Mikołaj'
        }
    },
    template: '<p v-on:click="usernameClicked">{{ username }}</p>',
    methods: {
        usernameClicked(){
            this.$emit('usrclicked', this.username);
        }
    }
});

new Vue({
    el: '#app',
    data: {
        name: 'Andrew',
        elements: []
    },
    methods: {
        changeName: function(){
            this.name = 'John';
        },
        addElement: function (  ) {
            this.elements.push(this.elements.length +1);
        },
        getColor: function(number){
            return number % 2 == 0 ? 'green' : 'red';
        },
        userWasClicked(name){
            alert(name);
        }
    }
});

new Vue({
    el: '#app2',
    data: {
        message: 'Hello there!'
    }
});
