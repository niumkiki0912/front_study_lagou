<template>
  <div class="article-meta">
    <nuxt-link :to="{
      name: 'profile',
      params: {
        username: article.author.username
      }
    }">
      <img :src="article.author.image" />
    </nuxt-link>
    <div class="info">
      <nuxt-link class="author" :to="{
        name: 'profile',
        params: {
          username: article.author.username
        }
      }">
        {{ article.author.username }}
      </nuxt-link>
      <span class="date">{{ article.createdAt | date('MMM DD, YYYY') }}</span>
    </div>
    <button
      class="btn btn-sm btn-outline-secondary"
      :class="{
        active: article.author.following
      }"
      @click="handleFollow"
    >
      <i class="ion-plus-round"></i>
      &nbsp;
      <span v-if="!article.author.following">Follow {{article.author.username}}</span>
      <span v-else>unFollow {{article.author.username}}</span>
      <!-- Follow Eric Simons <span class="counter">(10)</span> -->
    </button>
    &nbsp;&nbsp;
    <button
      class="btn btn-sm btn-outline-primary"
      :class="{
        active: article.favorited
      }"
      @click="onFavorite(article)"
    >
      <i class="ion-heart"></i>
      &nbsp;
      Favorite Post <span class="counter">(29)</span>
    </button>
  </div>
</template>

<script>
import { followUser, unFollowUser } from '@/api/user'
import { addFavorite, deleteFavorite } from '@/api/article'
import {  mapState  } from 'vuex';
export default {
  name: 'ArticleMeta',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState(['user'])
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
    },
    async handleFollow() {
      const res = this.article.following 
        ?  await unFollowUser(this.user.username)
        : await followUser(this.user.username)
      console.log('res===>', res);
      this.article.author.following  = !this.article.author.following
    }
  },
  
}
</script>

<style>

</style>
