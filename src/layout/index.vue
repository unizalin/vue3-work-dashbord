<template>
    <div class="app-wrapper">
    <div class="main container-wrapper ">
      <Sidebar />
      <AppMain />
      <!-- <router-view></router-view> -->

    </div>
  </div>
</template>

<script>
import Sidebar from '@/layout/components/Sidebar.vue'
import AppMain from '@/layout/components/AppMain.vue'

export default {
  name: 'Layout',
  components: {
    Sidebar,
    AppMain
  }
}
</script>

<style scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.main{
  display:flex
}
</style>
