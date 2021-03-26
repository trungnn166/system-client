<template>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-custom">
        <el-breadcrumb-item v-for="(breadcrumb, idx) in breadcrumbList" :key="idx" >{{breadcrumb.name}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
export default {
    name: 'Breadcrumb',
    data() {
        return {
            breadcrumbList: {}
        }
    },
    watch: {
        '$route' () {
            this.breadcrumbList = this.$route.meta.breadcrumb;
        }
    }
}
</script>

<style scoped>
    .breadcrumb-custom {
        width: 99%;
        margin: 0 auto;
        padding: 5px;
        border-bottom: solid #e4e7ed 0.5px;
    }
</style>