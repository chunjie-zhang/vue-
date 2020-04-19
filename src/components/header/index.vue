<template>
  <div class="m-header">
    <el-row>
      <topBar></topBar>
    </el-row>
    <el-row>
      <searchBar></searchBar>
    </el-row>
  </div>
</template>

<script>
import searchBar from '@/components/header/searchBar.vue'
import topBar from '@/components/header/topBar.vue'
export default {
  components: {
    searchBar,
    topBar
  }
}
</script>

<style lang='scss'>
 @import"@/assets/css/public/header/index.scss";
</style>
