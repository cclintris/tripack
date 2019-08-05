<template>
    <el-container>
        <el-main>
            <span class="header">customize your trip</span>
            <div class="main-background"></div>
            <div class="main-content">make your trip right now!
                <div class="content-2">
                    travel time<el-input v-model="day"></el-input>days<el-input v-model="night"></el-input>nights
                </div>
                <div class="content-1">
                    budget<el-input v-model="budget"></el-input>RMB
                </div>
                <span class="button">
                    <el-button size="mini" @click="jump_Ask_1()">next<i class="el-icon-right el-icon--right"></i></el-button>
                </span>
            </div>        
        </el-main>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            day: '',
            night: '',
            budget: ''
        }
    },
    computed: {
        jump_Ask_1() {
            this.$router.push({path: '/Ask-1'})
        }
    }
}
</script>

<style scoped>
.el-container {
    background-color: #FBF6EB;
}

.header {
    font-size: 35px;
    font-weight: bold;
    font-family: 'Ink Free';
    color: #755447;
}

.el-main {
    background-color: #FBF6EB;
}

.main-background {
    background: url("../assets/board4.png");
    background-repeat: no-repeat;
    background-size: 380px 540px;
    float: left;
    width: 500px;
    height: 500px;
    z-index: 1;
    background-position-x: -24px;
    background-position-y: -30px;
    background-color: #FBF6EB;
}

.main-content {
    height: 350px;
    margin-top: 160px;
    margin-left: 10px;
    color: #3981D3;
    font-size: 28px;
    position: absolute;
    z-index: 200;
    font-weight: bold;
    font-family: 'Ink Free';
}

.content-1 {
    height: 100px;
    font-size: 20px;
    line-height: 100px;
    font-weight: bold;
    font-family: 'Ink Free';
    margin-top: 5px;
}

.content-2 {
    height: 100px;
    font-size: 20px;
    line-height: 100px;
    font-weight: bold;
    font-family: 'Ink Free';
    position: relative;
    top: 30px;
}

.el-input {
    height: 25px;
    width: 50px;
}

.el-input__inner {
    height: 25px;
    width: 40px;
    padding: 0;
}

.button {
    float: right;
    font-weight: bold;
    font-family: 'Ink Free';
}

.el-button--mini {
  font-size: 25px;
  font-weight: bold; 
  font-family: 'Ink Free';
  position: relative;
  top: 80px;
  background-color: #FDFBF7;
  border-width: 2px;
  border-color: #B69F86;
}
</style>
