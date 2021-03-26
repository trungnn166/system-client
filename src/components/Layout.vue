<template>
    <el-container style="border: 1px solid #eee">
        <Sidebar/>
        <div class="main">
            <Header/>
            <Breadcrumb/>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </div>
    </el-container>
</template>

<script>
import Breadcrumb from './Breadcrumb.vue'
import Header from './Header.vue'
import Sidebar from './Sidebar'
export default {
  components: { Sidebar, Header, Breadcrumb },

}
</script>

<style scoped>
    .main {
        width: 100%;  
    }
</style>