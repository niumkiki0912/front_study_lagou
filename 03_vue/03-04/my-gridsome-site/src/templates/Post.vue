<template>
  <Layout>
    <h1>{{$page.post.title}}</h1>
    <p>{{$page.post.content}}</p>
  </Layout>
</template>


<page-query>
  query ($id: ID!) {
    post(id: $id) {
      id,
      title,
      content
    }
  }
</page-query>

<script>
  export default {
    name: 'Post',
    metaInfo() {
      return {
        title: this.$page.post.title
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>