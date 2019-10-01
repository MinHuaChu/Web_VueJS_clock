var clock = new Vue({
    el: '#time',
    data: {
        hour: '',
        minute: '',
        second: ''
    },
    methods: {
        setClock () {
            // 新增一個日期物件放在date
            var date = new Date();
            this.hour = date.getHours();
            this.minute = date.getMinutes();
            this.second = date.getSeconds();
        }
    },
    mounted () {
        setInterval(this.setClock, 1000);
    }
});