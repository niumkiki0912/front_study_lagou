<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" :style="{
        backgroundImage: `url(http://localhost:1337${$page.post.cover.url})`
    }">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="post-heading">
                        <h1>{{$page.post.title}}</h1>
                        <!-- <h2 class="subheading">Problems look mighty small from 150 miles up</h2> -->
                        <span class="meta">
                            Posted by
                            <a href="#!">Start Bootstrap</a>
                            {{$page.post.created_at}}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Post Content-->
    <article class="mb-4">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7" v-html="mdToHtml($page.post.content)">
                    
                </div>
            </div>
        </div>
    </article>
  </Layout>
</template>


<page-query>
query($id: ID) {
  post:strapiPost(id:$id) {
    id,
    title,
    content,
    created_at,
    cover  {
      url
    },
    tags {
      id,
      title
    }
  }
}
</page-query>
<script>
  import MarkdownIt from 'markdown-it'
  const md = new MarkdownIt();
  console.log('md.render===>', md.render('#hell'));
  
  export default {
    name: 'postPage',
    methods: {
        mdToHtml(markdown) {
            return md.render(markdown)
        }
    },
  }
</script>

<style lang="scss" scoped>

</style>