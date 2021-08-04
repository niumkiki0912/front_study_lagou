/*
 * @Author: your name
 * @Date: 2021-08-02 14:52:46
 * @LastEditTime: 2021-08-03 16:28:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /front_study_lagou/front_end_engineering/module2/codes/handwriting/08-wp-entry-loacation/myPack/lib/stats.js
 */
class Stats {
  constructor(compilation) {
    this.entries = compilation.entries
    this.modules = compilation.modules
  }

  toJson() {
    return this
  }
}

module.exports = Stats