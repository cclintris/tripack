<template>
    <el-container>
        <el-header :style="{height: 'none', padding: 0}">
            <div class="Plans-title">TRIPACK</div>
            <div class="Plans-subtitle">choose one you like ~</div>
        </el-header>

        <el-main :style="{height: 'none', padding: 0}">

        </el-main>

        <el-footer :style="{height: 'none', padding: 0}">

        </el-footer>
    </el-container>
</template>>

<script>
export default {
    
}
</script>>

<style scoped>
.el-header {
    height: 15%;
}

.el-main {
    height: 75%;
}

.el-footer {
    height: 10%;
    background-color: white;
}

.Plans-title {
    color: black;
    height: 60%;
    line-height: 400%;
    font-size: 20px;
}

.Plans-subtitle {
    color: black;
    height: 40%;
}
</style>