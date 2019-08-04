<template>
    <el-container>
        <el-header :style="{height: 'none', padding: 0}">
            <span class="head">我保存的路線</span>
            <img src="../assets/blueflower.png" width="300px" height="95px">
        </el-header>
        <el-main :style="{height: 'none', padding: 0}">
            <div class="preserved">
                <span class="count">No.1</span>
                <el-button type="warning" circle>開始</el-button>
            </div>
            <div class="preserved">
                <span class="count">No.2</span>
                <el-button type="warning" circle>開始</el-button>
            </div>
            <div class="preserved">
                <span class="count">No.3</span>
                <el-button type="warning" circle>開始</el-button>
            </div>
            <div class="preserved">
                <span class="count">No.4</span>
                <el-button type="warning" circle>開始</el-button>
            </div>
            <div class="preserved">
                <span class="count">No.5</span>
                <el-button type="warning" circle>開始</el-button>
            </div>
            <div class="button">
                <el-button type="warning" @click="jump_Layout()">返回</el-button>
            </div>
        </el-main>
    </el-container>
</template>

<script>
export default {
    computed: {
        jump_Layout() {
            this.$router.push({path: '/Layout'})
        }
    }
}
</script>

<style scoped>
.el-header {
    height: 20%;
    background-color: green;
}

.el-main {
    height: 80%;
    background-color: blue;
}

.head {
    display: block;
    font-size: 30px;
    position: relative;
    top: 10px;
}

.preserved {
    height: 50px;
    width: 100%;
    border-bottom-style: dotted;
    border-color: black;
}

.count {
    display: block;
    float: left;
    color: white;
    line-height: 50px;
    margin-left: 5px;
}

.is-circle {
    margin-top: 4.5px;
    float: right;
    margin-right: 5px;
    font-size: 15px;
}

.button {
    height: 60px;
    width: 30%;
    position: absolute;
    bottom: 0px;
}
</style>
