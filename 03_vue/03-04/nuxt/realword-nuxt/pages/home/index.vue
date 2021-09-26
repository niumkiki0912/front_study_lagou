<template>
  <div class="home-page">

  <div class="banner">
    <div class="container">
      <h1 class="logo-font">conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div class="container page">
    <div class="row">

      <div class="col-md-9">
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item" v-if="user">
              <nuxt-link
                class="nav-link"
                :class="{
                  active: tab  === 'your_feed'
                }"
                exact
                :to="{
                  name: 'home',
                  query: {
                    tab: 'your_feed',
                  }
                }">
                  Your Feed
              </nuxt-link>
            </li>
           
            <li class="nav-item">
               <nuxt-link
                class="nav-link"
                :class="{
                  active: tab  === 'global_feed'
                }"
                exact
                :to="{
                  name: 'home',
                }">
                  Global Feed
              </nuxt-link>
            </li>

             <li  v-if="tag" class="nav-item">
              <nuxt-link
                class="nav-link"
                :class="{
                  active: tab  === 'tag'
                }"
                exact
                :to="{
                  name: 'home',
                  query: {
                    tag:  tag,
                    tab: 'tag'
                  }
                }">
                  # {{tag}}
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div
          class="article-preview"
          :key="article.slug"
          v-for="article in articles">
          <div class="article-meta">
            <nuxt-link 
              :to="`profile/${article.author.username}`">
                <img :src="article.author.image" />
            </nuxt-link>
            <div class="info">
              <nuxt-link 
                class="author"
                :to="`profile/${article.author.username}`">
                {{article.author.username}}
              </nuxt-link>
              <span class="date">{{article.createdAt}}</span>
            </div>
            <button
              class="btn btn-outline-primary btn-sm pull-xs-right"
              :disabled="article.favoriteDisabled"
              :class="{active: article.favorited}"
              @click="onFavorite(article)">
              <i class="ion-heart"></i> {{article.favoritesCount}}
            </button>
          </div>
          <nuxt-link 
            class="preview-link"
            :to="{
              name: 'article',
              params: {
                slug: article.slug
              }
            }">
              <h1>{{article.title}}</h1>
              <p>{{article.description}}</p>
              <span>Read more...</span>
            
          </nuxt-link>
        </div>

        <!-- 分页列表 -->
        <nav>
          <ul class="pagination">
            <li
              class="page-item"
              :class="{
                active: item === page
              }"
              v-for="item in totalPage"
              :key="item"
            >
              <nuxt-link
                class="page-link"
                :to="{
                  name: 'home',
                  query: {
                    page: item,
                    tab: tab
                  }
                }"
              >{{ item }}</nuxt-link>
            </li>
          </ul>
        </nav>
        <!-- /分页列表 -->
      </div>

      <div class="col-md-3">
        <div class="sidebar">
          <p>Popular Tags</p>

          <div class="tag-list">
            <nuxt-link
              class="tag-pill tag-default"
              :to="{
                name: 'home',
                query: {
                  tab: 'tag',
                  tag: item
                }
              }"
              v-for="item in tags"
              :key="item">
              {{item}}
            </nuxt-link>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>
</template>

<script>
  import {
    getArticles,
    getYourFeedArticles,
    addFavorite,
    deleteFavorite
  } from '@/api/article'
  import { getTags } from '@/api/tag'
  import { mapState } from 'vuex'

  export default {
    name: 'homeIndex',
    async asyncData({ query }) {
      const page = Number.parseInt(query.page || 1)
      const limit = 20
      const tag = query.tag || ''
      const tab = query.tab || 'global_feed'

      console.log('tab===>', tab);

      const loadArticals = tab === 'global_feed'
        ? getArticles
        : getYourFeedArticles

      try {
        const [articleRes, tagRes ] = await Promise.all([
          loadArticals({
            limit,
            offset: (page - 1) * limit,
            tag
          }),
          getTags()
        ])


        const { tags } = tagRes.data
        const { articles, articlesCount } = articleRes.data

        articles.forEach(article => article.favoriteDisabled = false)

        console.log('articles, articlesCount ===>', articles, articlesCount );

        return {
          articles,
          articlesCount,
          page,
          limit,
          tags,
          tag,
          tab
        }
      } catch(e) {
        console.log('e===>', e);
      } 
    },
    watchQuery: [ 'tab', 'tag', 'page'],
    computed: {
      ...mapState(['user']),
       totalPage () {
        return Math.ceil(this.articlesCount / this.limit)
      }
    },
    methods: {
      async onFavorite(article) {
        article.favoriteDisabled = true

        if(article.favorited) {
          // 取消点赞
          await deleteFavorite(article.slug)
          article.favorited = false
          article.favoritesCount -= 1
        } else {
           await addFavorite(article.slug)
          article.favorited = true
          article.favoritesCount += 1
        }
        article.favoriteDisabled = false
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>