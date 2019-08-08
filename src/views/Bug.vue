<template>
    <el-container>
        <el-header :style="{height: 'none', padding: 0}">
            <span class="bug-title">bug report</span>
        </el-header>

        <el-main :style="{height: 'none', padding: 0}">
            <el-input type="textarea" :autosize="{minRows: 10, maxRows: 12}"
             placeholder="What bugs do we have?" v-model="textarea2"></el-input>
        </el-main>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            textarea: '',
            textarea2: ''
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
    height: 85%;
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
}
</style>
