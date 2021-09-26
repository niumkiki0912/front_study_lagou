exports.ids = [3];
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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=template&id=8095aade&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\" data-v-8095aade><div class=\"row\" data-v-8095aade><div class=\"col-md-10 offset-md-1 col-xs-12\" data-v-8095aade><form data-v-8095aade><fieldset data-v-8095aade><fieldset class=\"form-group\" data-v-8095aade><input type=\"text\" placeholder=\"Article Title\""+(_vm._ssrAttr("value",(_vm.article.title)))+" class=\"form-control form-control-lg\" data-v-8095aade></fieldset> <fieldset class=\"form-group\" data-v-8095aade><input type=\"text\" placeholder=\"What's this article about?\""+(_vm._ssrAttr("value",(_vm.article.description)))+" class=\"form-control\" data-v-8095aade></fieldset> <fieldset class=\"form-group\" data-v-8095aade><textarea rows=\"8\" placeholder=\"Write your article (in markdown)\" class=\"form-control\" data-v-8095aade>"+_vm._ssrEscape(_vm._s(_vm.article.body))+"</textarea></fieldset> <fieldset class=\"form-group\" data-v-8095aade><input type=\"text\" placeholder=\"Enter tags\" class=\"form-control\" data-v-8095aade> "+(_vm._ssrList((_vm.article.tagList),function(tag,index){return ("<div class=\"tag-list\" data-v-8095aade>"+_vm._ssrEscape(_vm._s(tag))+"</div>")}))+"</fieldset> <button type=\"button\" class=\"btn btn-lg pull-xs-right btn-primary\" data-v-8095aade>\n                Publish Article\n            </button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=template&id=8095aade&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  name: 'EditorIndex',

  async asyncData({
    params
  }) {
    let article = {};
    const {
      slug
    } = params;
    console.log('params===>', params, slug);

    if (slug) {
      const {
        data
      } = await Object(api_article["d" /* getArticle */])(slug);
      article = data.article;
    }

    return {
      slug,
      article
    };
  },

  data() {
    return {
      article: {
        title: '',
        description: '',
        body: '',
        tagList: []
      }
    };
  },

  methods: {
    async handlePublish() {
      try {
        const res = this.slug ? await Object(api_article["h" /* updateArticle */])(this.slug, {
          article: this.article
        }) : await Object(api_article["a" /* addArticle */])({
          article: this.article
        });
        console.log('res===>', res);
        this.$router.push('/');
      } catch (e) {
        console.log('e===>', e);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/editor/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8095aade",
  "13008de0"
  
)

/* harmony default export */ var editor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map