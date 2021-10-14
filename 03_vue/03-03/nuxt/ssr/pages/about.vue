<template>
  <div>
    <div>about</div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    async asyncData() {
      const { data } = await axios({
        method: 'get',
        url: 'http://localhost:8080/data.json'
      })
      return data
      
    }
  }
</script>

<style lang="scss" scoped>

</style>