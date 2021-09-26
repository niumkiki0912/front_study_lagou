<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">

          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{profile.username}}</h4>
            <p>
              {{profile.bio}}
            </p>
            <button
              class="btn btn-sm btn-outline-secondary action-btn"
              @click="handleFollow">
                <i class="ion-plus-round"></i>
                &nbsp;
                <span v-if="!profile.following">Follow {{profile.username}}</span>
                <span v-else>unFollow {{profile.username}}</span>
            </button>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  exact
                  :class="{
                    active: tab  === 'my'
                  }"
                  :to="{
                    name: 'profile',
                  }">
                    My Articles
                </nuxt-link>
              </li>
              <li class="nav-item">
                 <nuxt-link
                  class="nav-link"
                  exact
                  :class="{
                    active: tab  === 'favorited'
                  }"
                  :to="{
                    name: 'profile',
                    query: {
                      tab: 'favorited'
                    }
                  }">
                    Favorited Articles
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
                :to="{
                  name: 'profile',
                }">
                <img :src="article.author.image" />
              </nuxt-link>
              <div class="info">
                <nuxt-link 
                  class="author"
                  :to="{
                    name: 'profile',
                  }">
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
              v-if="profile.username !== user.username"
              :to="{
                name: 'article',
                params: {
                  slug: article.slug
                }
              }"
              class="preview-link">
                <h1>{{article.title}}</h1>
                <p>{{article.description}}</p>
                <span>Read more...</span>
                <ul class="tag-list">
                  <li class="tag-default tag-pill tag-outline" v-for="item in article.tagList" :key="item">{{item}}</li>
                </ul>
            </nuxt-link>
            <nuxt-link
              class="preview-link" 
              v-else
              :to="{
                name: 'editor',
                params: {
                  slug: article.slug
                }
              }" 
            >
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import { getUser,  getProfile, followUser, unFollowUser } from '@/api/user'
  import { getArticles, addFavorite, deleteFavorite } from '@/api/article'
  import { mapState } from 'vuex'

  export default {
    async asyncData({params, query}) {
      const tab = query.tab || 'my'
      const username = params.username
      const favorited = tab === 'favorited' ? username : null
      console.log('params===>', params, username); 
      
      const [  profileRes,  articleRes  ] = await Promise.all([
        getProfile(username),
        getArticles({ author: username,  favorited })
      ])
      console.log('ruserRes===>', profileRes.data, articleRes.data);
      
      const {profile} = profileRes.data
      const { articles, articlesCount} = articleRes.data

      return {
        tab,
        profile,
        articles,
        articlesCount,
        username
      }
    },
    watchQuery: [ 'tab' ],
    computed: {
      ...mapState(['user'])
    },
    methods: {
      async handleFollow() {
        const res = this.profile.following 
          ?  await unFollowUser(this.username)
          : await followUser(this.username)
        console.log('res===>', res);
        this.profile.following  = !this.profile.following
      },
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