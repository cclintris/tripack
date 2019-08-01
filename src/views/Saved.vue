<template>
    <el-container>
        <el-header :style="{height: 'none', padding: 0}">
            <span class="head">我保存的路線</span>
            <img src="../assets/blueflower.png" width="300px" height="95px">
        </el-header>
        <el-main :style="{height: 'none', padding: 0}">

        </el-main>
    </el-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.el-header {
    height: 20%;
    background-color: green;
}

.el-main {
    height: 80%;
}

.head {
    display: block;
    font-size: 30px;
    position: relative;
    top: 10px;
}
</style>
