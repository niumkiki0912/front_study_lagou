exports.ids = [2];
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

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return followUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return unFollowUser; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 用户登录

const login = data => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'POST',
  url: '/api/users/login',
  data
}); // 用户注册

const register = data => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'POST',
  url: '/api/users',
  data
}); // 获取当前用户信息

const getUser = data => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'GET',
  url: '/api/user'
}); // 修改用户信息

const updateUser = data => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'PUT',
  url: '/api/user',
  data
}); // 获取profile

const getProfile = username => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'GET',
  url: `/api/profiles/${username}`
}); // 关注用户

const followUser = username => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'POST',
  url: `/api/profiles/${username}/follow`
}); // 取消关注用户

const unFollowUser = username => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'DELETE',
  url: `/api/profiles/${username}/follow`
});

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=aefe297c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\" data-v-aefe297c><div class=\"container\" data-v-aefe297c><div class=\"row\" data-v-aefe297c><div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-aefe297c><img"+(_vm._ssrAttr("src",_vm.profile.image))+" class=\"user-img\" data-v-aefe297c> <h4 data-v-aefe297c>"+_vm._ssrEscape(_vm._s(_vm.profile.username))+"</h4> <p data-v-aefe297c>"+_vm._ssrEscape("\n            "+_vm._s(_vm.profile.bio)+"\n          ")+"</p> <button class=\"btn btn-sm btn-outline-secondary action-btn\" data-v-aefe297c><i class=\"ion-plus-round\" data-v-aefe297c></i>\n               \n              "+((!_vm.profile.following)?("<span data-v-aefe297c>"+_vm._ssrEscape("Follow "+_vm._s(_vm.profile.username))+"</span>"):("<span data-v-aefe297c>"+_vm._ssrEscape("unFollow "+_vm._s(_vm.profile.username))+"</span>"))+"</button></div></div></div></div> "),_vm._ssrNode("<div class=\"container\" data-v-aefe297c>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-aefe297c>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-aefe297c>","</div>",[_vm._ssrNode("<div class=\"articles-toggle\" data-v-aefe297c>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-aefe297c>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-aefe297c>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab  === 'my'
                },attrs:{"exact":"","to":{
                  name: 'profile',
                }}},[_vm._v("\n                  My Articles\n              ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-aefe297c>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab  === 'favorited'
                },attrs:{"exact":"","to":{
                  name: 'profile',
                  query: {
                    tab: 'favorited'
                  }
                }}},[_vm._v("\n                  Favorited Articles\n              ")])],1)],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\" data-v-aefe297c>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-aefe297c>","</div>",[_c('nuxt-link',{attrs:{"to":{
                name: 'profile',
              }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-aefe297c>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
                  name: 'profile',
                }}},[_vm._v("\n                "+_vm._s(article.author.username)+"\n              ")]),_vm._ssrNode(" <span class=\"date\" data-v-aefe297c>"+_vm._ssrEscape(_vm._s(article.createdAt))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{active: article.favorited}))+" data-v-aefe297c><i class=\"ion-heart\" data-v-aefe297c></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),(_vm.profile.username !== _vm.user.username)?_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
              name: 'article',
              params: {
                slug: article.slug
              }
            }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")]),_vm._v(" "),_c('ul',{staticClass:"tag-list"},_vm._l((article.tagList),function(item){return _c('li',{key:item,staticClass:"tag-default tag-pill tag-outline"},[_vm._v(_vm._s(item))])}),0)]):_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
              name: 'editor',
              params: {
                slug: article.slug
              }
            }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)})],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=aefe297c&scoped=true&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  async asyncData({
    params,
    query
  }) {
    const tab = query.tab || 'my';
    const username = params.username;
    const favorited = tab === 'favorited' ? username : null;
    console.log('params===>', params, username);
    const [profileRes, articleRes] = await Promise.all([Object(user["b" /* getProfile */])(username), Object(api_article["e" /* getArticles */])({
      author: username,
      favorited
    })]);
    console.log('ruserRes===>', profileRes.data, articleRes.data);
    const {
      profile
    } = profileRes.data;
    const {
      articles,
      articlesCount
    } = articleRes.data;
    return {
      tab,
      profile,
      articles,
      articlesCount,
      username
    };
  },

  watchQuery: ['tab'],
  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },
  methods: {
    async handleFollow() {
      const res = this.profile.following ? await Object(user["f" /* unFollowUser */])(this.username) : await Object(user["a" /* followUser */])(this.username);
      console.log('res===>', res);
      this.profile.following = !this.profile.following;
    },

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
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "aefe297c",
  "04628a28"
  
)

/* harmony default export */ var pages_profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map