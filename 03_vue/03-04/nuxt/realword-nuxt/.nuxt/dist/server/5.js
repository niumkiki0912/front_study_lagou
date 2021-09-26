exports.ids = [5];
exports.modules = {

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

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=1122fadc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\" data-v-1122fadc>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-1122fadc>","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-1122fadc>","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\" data-v-1122fadc>"+_vm._ssrEscape(_vm._s(_vm.isLogin ? 'Sign in': 'Sign up'))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\" data-v-1122fadc>","</p>",[(_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Need an account?")]):_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\" data-v-1122fadc>"+(_vm._ssrList((_vm.errors),function(messages,field){return ((_vm._ssrList((messages),function(message,index){return ("<li data-v-1122fadc>"+_vm._ssrEscape(_vm._s(field)+" "+_vm._s(message))+"</li>")})))}))+"</ul> <form data-v-1122fadc>"+((!_vm.isLogin)?("<fieldset class=\"form-group\" data-v-1122fadc><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\" data-v-1122fadc></fieldset>"):"<!---->")+" <fieldset class=\"form-group\" data-v-1122fadc><input type=\"email\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\" data-v-1122fadc></fieldset> <fieldset class=\"form-group\" data-v-1122fadc><input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\" data-v-1122fadc></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-1122fadc>"+_vm._ssrEscape("\n            "+_vm._s(_vm.isLogin ? 'Sign in': 'Sign up')+"\n          ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=1122fadc&scoped=true&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // 仅在客户端加载 js-cookie 包

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  middleware: 'notAuthenticated',
  name: 'LoginIndex',
  computed: {
    isLogin() {
      return this.$route.name === 'login';
    }

  },

  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      errors: {}
    };
  },

  methods: { ...Object(external_vuex_["mapMutations"])(['setUser']),

    async onSubmit() {
      try {
        const {
          data
        } = this.isLogin ? await Object(user["d" /* login */])({
          user: this.user
        }) : await Object(user["e" /* register */])({
          user: this.user
        });
        console.log('data===>', data); // 保存在store中

        this.setUser(data.user); // 存储在cookie中

        Cookie.set('user', JSON.stringify(data.user));
        this.$router.push('/');
      } catch (err) {
        console.log('e===>', err);
        this.errors = err.response.data.errors;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1122fadc",
  "8ad5aaa8"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map