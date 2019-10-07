import {
  Component
} from "./lib.component"

const Carousel = {
  init ({ url, selector }) {
    this.selector = document.querySelector(selector)
    this.initComponents()
    this.callApi(url)
  },

  html (content = null) {
    if (content !== null) {
      this.selector.innerHTML = content
    }
    return this.selector.innerHTML
  },

  initComponents () {
    Component.init()
    console.log("컴포넌트 호출")
  },

  callApi (url) {
    console.log("Api 호출")
  }
}

export default Carousel
