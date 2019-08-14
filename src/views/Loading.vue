<template>
    <el-container>
        <div class="loading-background">
            <span class="loading-text">Loading...</span>
            <i class="el-icon-loading"></i>
            <span class="loading-text-1">Oops!</span>
            <span class="loading-text-2">it's stuck</span>
        </div>
    </el-container>
</template>

<script>
import { setInterval, clearInterval } from 'timers';

export default {
    data() {
        return {
            count: '',
            show: false
        }
    },
    created() {
        this.afterLoad();
    },
    methods: {
        afterLoad() {
            const Time_Count = 1; //time to change(s)
            if(!this.timer){
                this.count = Time_Count;
                this.timer = setInterval(() => {
                    if(this.count > 0 && this.count <= Time_Count) {
                        this.count--;
                    }else {
                        this.show = true;
                        clearInterval(this.timer);
                        this.timer = null;
                        this.$router.push({path: '/Ask'});
                    }
                }, 1000); //(ms)
            }
        }
    }
}
</script>

<style scoped>
.loading-text {
    font-size: 60px;
    display: block;
    margin-top: 35px;
    font-family: 'Ink Free';
    font-weight: bold;
    color: royalblue;
}

.loading-background {
    width: 100%;
    height: 100%;
    background: url("../assets/loading.png");
    background-size: 100% 100%;
}

.el-icon-loading {
    font-size: 50px;
    color: royalblue;
    position: absolute;
    top: 470px;
    right: 70px;
}

.loading-text-1 {
    font-size: 30px;
    font-family: 'Ink Free';
    font-weight: bold;
    color: royalblue;
    position: absolute;
    top: 480px;
    right: 230px;
    transform: rotate(-15deg);
}

.loading-text-2 {
    font-size: 30px;
    font-family: 'Ink Free';
    font-weight: bold;
    color: royalblue;
    position: absolute;
    top: 520px;
    right: 200px;
    transform: rotate(-15deg);
}
</style>