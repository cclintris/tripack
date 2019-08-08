<template>
    <el-container>
        <el-header :style="{height: 'none', padding: 0}">
            <span class="bug-title">bug report</span>
        </el-header>

        <el-main :style="{height: 'none', padding: 0}">
             <img src="../assets/CaCaZoo-cat.png" width="260px" height="73px" class="cat">
             <el-input type="textarea" :autosize="{minRows: 13, maxRows: 15}"
             placeholder="What bugs do we have?" v-model="textarea2"></el-input>
        </el-main>

        <el-footer :style="{height: 'none', padding: 0}">
            <img src="../assets/bug-flower-short.png" width="130px" height="200px" class="short-flower">
            <img src="../assets/bug-flower-long.png" width="120px" height="300px" class="long-flower">
            <el-button class="button-1" @click="jump_Layout()">last</el-button>
            <el-button class="button-2">commit</el-button>
        </el-footer>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            textarea: '',
            textarea2: ''
        }
    },
    computed: {
        jump_Layout() {
            this.$router.push({path: '/Layout'})
        }
    }
}
</script>

<style scoped>
.el-header {
    height: 15%;
    background-color: cornsilk;
}

.el-main {
    height: 70%;
    background-color: cornsilk;
}

.el-footer {
    height: 15%;
    background-color: cornsilk;
}

.bug-title {
    display: block;
    text-align: center;
    line-height: 100px;
    color: olivedrab;
    font-size: 50px;
    font-family: 'Ink Free';
    font-weight: bold;
}

.el-textarea {
    width: 90%;
    font-size: 20px;
    position: absolute;
    top: 21.5%;
    right: 5%;
}

.cat {
    position: absolute;
    top: 78.5px;
    right: 12.5%;
}

.short-flower {
    position: absolute;
    top: 45px;
    left: 5px;
}

.long-flower {
    position: absolute;
    top: 270px;
    right: -3px;
}

.el-button {
    font-family: 'Ink Free';
    font-weight: bold;
    font-size: 20px;
    width: 100px;
    margin-top: 15px;
    color: white;
    background-color: darkseagreen;
}

.button-1 {
    position: relative;
    left: -40px;
}

.button-2 {
    position: relative;
    right: -40px;
}
</style>
