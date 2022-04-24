const vm_head = Vue.createApp({
    data() {
        return {
            titleAry: ['首頁', '設定'],
            linkAry: ['index.html', '#']
        }
    }
});
vm_head.mount('#head');

const vm_content = Vue.createApp({
    data() {
        return {
            alertAry: [
                "2022/04/23 04:15:22 車牌辨識失敗",
                "2022/04/23 04:15:24 前方 ENZ-7851 車輛有 3 筆危險駕駛紀錄，請小心該駕駛",
                "2022/04/23 04:15:27 前方 2JG-371 車輛駕駛紀錄正常"
            ],
            alertStatus: "開啟",
            notAlertStatus: "關閉",
            nowTime: "Loading...",
            timer: null,
        }
    },
    methods: {
        showTime: function () {
            this.timer = setInterval(() => {
                const now = new Date();
                const today = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`;
                const hour = (now.getHours() < 10 ? `0${now.getHours()}` : now.getHours());
                const minute = (now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes());
                const second = (now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds());
                this.nowTime = `${today} ${hour}:${minute}:${second}`;
            }, 1000);
        },
        changeMode: function () {
            this.alertStatus = (this.alertStatus == "開啟" ? "關閉" : "開啟");
            this.notAlertStatus = (this.alertStatus == "開啟" ? "關閉" : "開啟");
        }
    },
    mounted() {
        this.showTime();
    }
});
vm_content.mount("#content");