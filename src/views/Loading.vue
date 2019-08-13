<template>
    <div>
        <i class="el-icon-loading"></i>
    </div>
</template>

<script>
import { setInterval, clearInterval } from 'timers';

export default {
    data() {
        return {
            count: '',
        }
    },
    created() {
        this.afterLoad();
    },
    methods: {
        afterLoad() {
            const Time_Count = 3; //time to change(sec)
            if(!this.timer){
                this.count = Time_Count;
                this.show = false;
                this.timer = setInterval(() => {
                    if(this.count > 0 && this.count <= Time_Count) {
                        this.count--;
                    }else {
                        this.show = true;
                        clearInterval(this.timer);
                        this.timer = null;
                        this.$router.push({path: '/Ask'});
                    }
                }, 1000);
            }
        }
    }
}
</script>

<style scoped>
.el-icon-loading {
    font-size: 50px;
    color: royalblue;
}
</style>