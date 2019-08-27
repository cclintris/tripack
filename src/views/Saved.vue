<template>
    <el-container>
        <el-header :style="{height: 'none', padding: 0}">
            <span class="head">my saved trips</span>
            <img src="../assets/blueflower.png" width="80%" height="70%">
        </el-header>
        <el-main :style="{height: 'none', padding: 0}">
            <div class="preserved">
                <span class="count">No.1</span>
                <el-button type="warning" circle>start</el-button>
            </div>
            <div class="preserved">
                <span class="count">No.2</span>
                <el-button type="warning" circle>start</el-button>
            </div>
            <div class="preserved">
                <span class="count">No.3</span>
                <el-button type="warning" circle>start</el-button>
            </div>
            <div class="preserved">
                <span class="count">No.4</span>
                <el-button type="warning" circle>start</el-button>
            </div>
            <div class="preserved">
                <span class="count">No.5</span>
                <el-button type="warning" circle>start</el-button>
            </div>
            <div class="button">
                <el-button type="warning" @click="jumpTo('Layout')">Last</el-button>
            </div>
        </el-main>
    </el-container>
</template>

<script>
export default {
    methods: {
        jumpTo(target) {
            this.$router.push({name: target})
        }
    }
}
</script>

<style scoped>
.el-header {
    height: 20%;
    background-color: #F2E7C8;
}

.el-main {
    height: 80%;
    background-color: #FBF6EB;
}

.head {
    display: block;
    font-size: 30px;
    position: relative;
    top: 10%;
    font-family: 'Ink Free';
    font-weight: bold;
    color: #755447;
}

.preserved {
    height: 10%;
    width: 100%;
    border-bottom-style: dotted;
    border-color: black;
    line-height: 100%;
}

.count {
    float: left;
    color: #755447;
    font-family: 'Ink Free';
    font-weight: bold;
    line-height: 250%;
}

.is-circle {
    float: right;
    margin: 2% 1% 0 0;
    font-size: 12px;
    font-family: 'Ink Free';
}

.button {
    position: absolute;
    bottom: 0px;
    margin-bottom: 5%;
    margin-left: 5%;
}

.el-button {
    font-family: 'Ink Free';
    font-weight: bold;
}
</style>
