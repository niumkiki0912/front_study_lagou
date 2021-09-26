<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                  <input type="text" class="form-control form-control-lg" v-model="article.title" placeholder="Article Title">
              </fieldset>
              <fieldset class="form-group">
                  <input type="text" class="form-control" v-model="article.description" placeholder="What's this article about?">
              </fieldset>
              <fieldset class="form-group">
                  <textarea class="form-control" rows="8" v-model="article.body" placeholder="Write your article (in markdown)"></textarea>
              </fieldset>
              <fieldset class="form-group">
                  <input type="text" class="form-control" placeholder="Enter tags" @keypress.enter="article.tagList.push($event.target.value)" />
                            <div class="tag-list" v-for="(tag, index) in article.tagList" :key="index">{{ tag }}</div>
              </fieldset>
              <button class="btn btn-lg pull-xs-right btn-primary" type="button" @click="handlePublish">
                  Publish Article
              </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import { addArticle, updateArticle, getArticle } from '@/api/article';
  export default {
    middleware: 'authenticated',
    name: 'EditorIndex',
    async asyncData({params}) {
      let article = {}
      const { slug } = params
      console.log('params===>', params, slug);
      if(slug) {
        const {data} = await getArticle(slug)
        article = data.article
      }
      return {
        slug,
        article
      }
    },
    data() {
      return {
        article: {
          title: '',
          description: '',
          body: '',
          tagList: [],
        },
      }
    },
    methods: {
      async handlePublish() {
        try {
          const res = this.slug
            ? await updateArticle(this.slug, {
              article: this.article
            })
            : await addArticle({
              article: this.article
            })
          console.log('res===>', res);
          this.$router.push('/');
        } catch(e) {
          console.log('e===>', e);
          
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>