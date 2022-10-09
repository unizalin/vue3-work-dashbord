<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup () {
      const tagKey = ref('userInfo')
      function clickTag (key) {
        tagKey.value = key
      }
      return {
        tagKey,
        clickTag
      }
    }
  })
  </script>
  
<template>
  <div id="RWDpage">
    <h1>REACTJS</h1>
  </div>
</template>

<style scoped>
#RWDpage {
  width: 100%;
  height: 500px;
  background-color: yellowgreen;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  color: #fff;
  font-size: 50px;
}
</style>
