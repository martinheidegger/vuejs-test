var Vue = require("vue");

Vue.component('image', {
    template: '#image-template',
    replace: true
});

new Vue({
    el: "#martin",
    data: {
        src: "http://s3.amazonaws.com/rapgenius/Ape.jpg", 
        title: "A super Ape"
    }
});