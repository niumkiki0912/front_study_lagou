exports.ids = [4];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getYourFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return updateArticle; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 获取公共文章列表

const getArticles = params => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'GET',
  url: '/api/articles',
  params
}); // 获取我的文章列表

const getYourFeedArticles = params => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'GET',
  url: '/api/articles/feed',
  params
}); // 添加点赞

const addFavorite = slug => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'POST',
  url: `/api/articles/${slug}/favorite`
}); // 取消点赞

const deleteFavorite = slug => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'DELETE',
  url: `/api/articles/${slug}/favorite`
}); // 获取文章详情

const getArticle = slug => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'GET',
  url: `/api/articles/${slug}`
}); // 获取文章评论

const getComments = slug => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'GET',
  url: `/api/articles/${slug}/comments`
}); // 发布文章

const addArticle = data => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'POST',
  url: `/api/articles`,
  data
}); // 编辑文章

const updateArticle = (slug, data) => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'PUT',
  url: `/api/articles/${slug}`,
  data
});

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=372073b0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\" data-v-372073b0><div class=\"container\" data-v-372073b0><h1 class=\"logo-font\" data-v-372073b0>conduit</h1> <p data-v-372073b0>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\" data-v-372073b0>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-372073b0>","</div>",[_vm._ssrNode("<div class=\"col-md-9\" data-v-372073b0>","</div>",[_vm._ssrNode("<div class=\"feed-toggle\" data-v-372073b0>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-372073b0>","</ul>",[(_vm.user)?_vm._ssrNode("<li class=\"nav-item\" data-v-372073b0>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab  === 'your_feed'
                },attrs:{"exact":"","to":{
                  name: 'home',
                  query: {
                    tab: 'your_feed',
                  }
                }}},[_vm._v("\n                  Your Feed\n              ")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-372073b0>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab  === 'global_feed'
                },attrs:{"exact":"","to":{
                  name: 'home',
                }}},[_vm._v("\n                  Global Feed\n              ")])],1),_vm._ssrNode(" "),(_vm.tag)?_vm._ssrNode("<li class=\"nav-item\" data-v-372073b0>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab  === 'tag'
                },attrs:{"exact":"","to":{
                  name: 'home',
                  query: {
                    tag:  _vm.tag,
                    tab: 'tag'
                  }
                }}},[_vm._v("\n                  # "+_vm._s(_vm.tag)+"\n              ")])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\" data-v-372073b0>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-372073b0>","</div>",[_c('nuxt-link',{attrs:{"to":("profile/" + (article.author.username))}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-372073b0>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":("profile/" + (article.author.username))}},[_vm._v("\n                "+_vm._s(article.author.username)+"\n              ")]),_vm._ssrNode(" <span class=\"date\" data-v-372073b0>"+_vm._ssrEscape(_vm._s(article.createdAt))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{active: article.favorited}))+" data-v-372073b0><i class=\"ion-heart\" data-v-372073b0></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
              name: 'article',
              params: {
                slug: article.slug
              }
            }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<nav data-v-372073b0>","</nav>",[_vm._ssrNode("<ul class=\"pagination\" data-v-372073b0>","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{
                active: item === _vm.page
              }))+" data-v-372073b0>","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
                  name: 'home',
                  query: {
                    page: item,
                    tab: _vm.tab
                  }
                }}},[_vm._v(_vm._s(item))])],1)}),0)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\" data-v-372073b0>","</div>",[_vm._ssrNode("<div class=\"sidebar\" data-v-372073b0>","</div>",[_vm._ssrNode("<p data-v-372073b0>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\" data-v-372073b0>","</div>",_vm._l((_vm.tags),function(item){return _c('nuxt-link',{key:item,staticClass:"tag-pill tag-default",attrs:{"to":{
                name: 'home',
                query: {
                  tab: 'tag',
                  tag: item
                }
              }}},[_vm._v("\n              "+_vm._s(item)+"\n            ")])}),1)],2)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=372073b0&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/tag.js
 // 获取文章标签列表

const getTags = () => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: '/api/tags'
  });
};
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: 'homeIndex',

  async asyncData({
    query
  }) {
    const page = Number.parseInt(query.page || 1);
    const limit = 20;
    const tag = query.tag || '';
    const tab = query.tab || 'global_feed';
    console.log('tab===>', tab);
    const loadArticals = tab === 'global_feed' ? api_article["e" /* getArticles */] : api_article["g" /* getYourFeedArticles */];

    try {
      const [articleRes, tagRes] = await Promise.all([loadArticals({
        limit,
        offset: (page - 1) * limit,
        tag
      }), getTags()]);
      const {
        tags
      } = tagRes.data;
      const {
        articles,
        articlesCount
      } = articleRes.data;
      articles.forEach(article => article.favoriteDisabled = false);
      console.log('articles, articlesCount ===>', articles, articlesCount);
      return {
        articles,
        articlesCount,
        page,
        limit,
        tags,
        tag,
        tab
      };
    } catch (e) {
      console.log('e===>', e);
    }
  },

  watchQuery: ['tab', 'tag', 'page'],
  computed: { ...Object(external_vuex_["mapState"])(['user']),

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  methods: {
    async onFavorite(article) {
      article.favoriteDisabled = true;

      if (article.favorited) {
        // 取消点赞
        await Object(api_article["c" /* deleteFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount -= 1;
      } else {
        await Object(api_article["b" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.favoriteDisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "372073b0",
  "47c27e5c"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map