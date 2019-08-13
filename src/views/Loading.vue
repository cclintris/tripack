<template>
    <div>
        <img src="../assets/layout-ornament.png" width="200px" height="200px">
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
            const Time_Count = 2;
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

</style>