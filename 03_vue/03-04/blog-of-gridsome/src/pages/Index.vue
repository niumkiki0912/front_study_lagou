<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" :style="{
        backgroundImage: `url(http://localhost:1337${general.cover.url})`
    }">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="site-heading">
                        <h1>{{general.title}}</h1>
                        <span class="subheading">{{general.subTitle}}</span>
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
                <div :key="edge.id"  v-for="edge in $page.posts.edges"  class="post-preview">
                    <g-link :to="`/post/${edge.node.id}`">
                        <h2 class="post-title">{{edge.node.title}}</h2>
                        <!-- <h3 class="post-subtitle">Problems look mighty small from 150 miles up</h3> -->
                    </g-link>
                    <p class="post-meta">
                        Posted by
                        <a href="#!">Start Bootstrap</a>
                        {{edge.node.created_at}}
                    </p>
                    <p>
                        <span style="margin-right:8px" v-for="tag in edge.node.tags" :key="tag.id">
                            <g-link :to="`/tag/${tag.id}`" >{{tag.title}}</g-link>
                        </span>
                    </p>
                    <!-- Divider-->
                    <hr class="my-4" />
                </div>
                <!-- Pager-->
                <!-- <div class="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div> -->
                <Pager :info="$page.posts.pageInfo"/>
            </div>
        </div>
    </div>
  </Layout>
</template>


<page-query>
query($page: Int) {
    posts: allStrapiPost(perPage: 2, page: $page) @paginate {
        pageInfo {
            totalPages
            currentPage
        }
        edges {
            node {
                id,
                title,
                created_at,
                tags {
                    id,
                    title
                }
            }
        }
    }
    general: allStrapiGeneral {
        edges {
            node {
                id, 
                title,
                subTitle,
                cover {
                    url
                }
            }
        }
    }
}
</page-query>

<script>
import { Pager } from 'gridsome'
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Pager
  },
  computed: {
      general() {
          return this.$page.general.edges[0].node 
      }
  },
}
</script>

<style></style>