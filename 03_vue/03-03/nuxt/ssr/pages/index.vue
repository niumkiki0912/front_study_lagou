<template>
  <div id="app">
    <h2>{{ title }}</h2>
    <ul>
      <li
        v-for="item in posts"
        :key="item.id"
      >{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    async asyncData() {
      const { data } = await axios({
        method: 'get',
        url: 'http://localhost:3000/data.json'
      })
      return data
    }
  }
</script>

<style lang="scss" scoped>

</style>