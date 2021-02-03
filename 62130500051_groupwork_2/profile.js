const app = Vue.createApp({
    data(){
        return {
            nickname: "Boat",
            name: "Prakit Wongnuntananon",
            career: "FrontEnd Developer",
            followers: "2M",
            following: "01",
            groups: "12K",
            img: './images/me.png'
        }
    }
})

var mountedApp = app.mount('#app');