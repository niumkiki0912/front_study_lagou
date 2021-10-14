<template>
  <Layout>
     <!-- Page Header-->
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="site-heading">
                        <h1>{{$page.tag.title}}</h1>
                        <!-- <span class="subheading">A Blog Theme by Start Bootstrap</span> -->
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
                <!-- Post preview-->
                <div :key="poost.id"  v-for="poost in $page.tag.posts"  class="post-preview">
                    <g-link :to="`/post/${poost.id}`">
                        <h2 class="post-title">{{poost.title}}</h2>
                        <!-- <h3 class="post-subtitle">Problems look mighty small from 150 miles up</h3> -->
                    </g-link>
                    <!-- Divider-->
                    <hr class="my-4" />
                </div>
            </div>
        </div>
    </div>
  </Layout>
</template>

<script>
  export default {
    name: 'tagPage',

  }
</script>


<page-query>
query($id: ID) {
  tag: strapiTag(id: $id) {
    id,
    title,
    posts {
      id,
      title
    }
  }
}
</page-query>
<style lang="scss" scoped>

</style>