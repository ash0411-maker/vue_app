import Vue from 'vue/dist/vue.esm';
import axios from 'axios';

new Vue({
  el: '.js-booksIndex',
  data: {
    // 表示する本の詳細情報
    bookInfo: {},
    // 情報の表示有無を判定（デフォルトで非表示設定）
    bookInfoBool: false
  },
  methods: {
    // 詳細情報を表示するメソッド
    setBookInfo(id){
      axios.get(`api/books/${id}.json`).then(res => {
        // this.bookInfo = res.data;により，本情報をdataに格納し，
        this.bookInfo = res.data;
        this.bookInfoBool = true;
      });
    }
  }
});


new Vue({
  el: ".js-bookIndex",
  data: {
    bookInfo: {},
    bookInfoBool: false
  },
  methods: {
    setBookInfo(id) {
      axios.get("api/books/${id}.json").then(res => {
        this.bookInfo = res.data;
        this.bookInfoBool = true;
      })
    }
  }
})