<template>
    <el-container style="border: 1px solid #eee">
       <Sidebar/>
        <Header/>  

        <el-container>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Header from './Header.vue'
import Sidebar from './Sidebar'
export default {
  components: { Sidebar, Header },

}
</script>