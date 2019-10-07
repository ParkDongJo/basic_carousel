
export const Component = {

  init () {
    this.target = document.querySelector("#carousel")
    this.initEvents()
    this.render()
  },

  initEvents () {

  },

  render () {
    this.target.innerHTML = "<div>hello</div>"
  }
}
