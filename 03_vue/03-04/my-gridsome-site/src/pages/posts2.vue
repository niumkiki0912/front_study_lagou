<template>
  <Layout>
    <h2>post2</h2>
    <ul>
      <li v-for="edge in $page.posts.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">{{edge.node.title}}</g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query {
    posts: allPost {
      edges {
        node {
          id,
          title,
          content,
          path
        }
      }
    }
  }
</page-query>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>