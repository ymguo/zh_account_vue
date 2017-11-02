import Vue from 'vue'

export default new Vue({
  data: {
    template: '',
    inviter: '',
    baseUrl: ''
  },
  created () {
    this.baseUrl = process.env.VUE_APP_SERVER_URL || 'http://test.m.zhisland.com'
  }
})
