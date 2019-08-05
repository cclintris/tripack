<template>
    <el-container>
        <el-main>
            <span class="header">customize your trip</span>
            <div class="main-background">
                <span class="main-context">Do you have</span>
                <span class="main-context-1">viewpoints/restaurants/hotels</span>
                <span class="main-context">in mind?</span>
                <div class="buttons">
                    <el-button type="primary" round icon="el-icon-check" @click="jump_Choose()">Yes</el-button>
                    <el-button type="primary" round icon="el-icon-close" @click="jump_Complete()">No</el-button>
                    <div class="previous">
                        <el-button type="primary" size="mini" icon="el-icon-back" @click="jump_Ask()">last</el-button>
                    </div>
                </div>   
            </div>
        </el-main>
    </el-container>
</template>

<script>
export default {
    computed: {
        jump_Ask() {
            this.$router.push({path: '/Ask'})
        },
        jump_Choose() {
            this.$router.push({path: '/Choose'})
        },
        jump_Complete() {
            this.$router.push({path: '/Complete'})
        }
    }
}
</script>

<style scoped>
.el-container {
    background-color: #FBF6EB;
}

.el-main {
    background-color: #FBF6EB;
}

.header {
    font-size: 35px;
    font-weight: bold;
    font-family: 'Ink Free';
    color: #755447;
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

.main-context {
    display: block;
    position: relative;
    right: 80px;
    top: 140px;
    font-size: 25px;
    margin-top: 5px;
    font-family: 'Ink Free';
    font-weight: bold;
    color: #3981D3;
}

.main-context-1 {
    display: block;
    position: relative;
    right: 80px;
    top: 140px;
    font-size: 23px;
    margin-top: 5px;
    font-family: 'Ink Free';
    font-weight: bold;
    color: #3981D3;
}

.buttons {
    position: absolute;
    right: 65px;
    top: 340px;
    height: 100px;
}

.is-round {
    font-size: 20px;
    background: lightblue;
    border-color: lightblue;
    color: #3981D3;
    font-family: 'Ink Free';
    font-weight: bold;
}

.previous {
    width: 250px;
    height: 80px;
    position: relative;
    right: 100px;
    top: 150px;
}

.el-button--mini {
  font-weight: bold; 
  font-family: 'Ink Free';
  background-color: #FDFBF7;
  border-width: 2px;
  border-color: #B69F86;
  color: black;
  font-size: 25px;
}
</style>
