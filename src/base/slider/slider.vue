<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>

  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  props: {
    click: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    setTimeout(() => {
      this._setQuetWidth()
      this._initSlider()
    }, 20)
  },
  methods: {
    _setQuetWidth () {
      let $slider = this.$refs.sliderGroup
      let itemArr = $slider.children
      let arr = []
      let clientWidth = $slider.clientWidth
      let width = 0

      arr.forEach.call(itemArr, (item, index) => {
        item.classList.add('questions-item')
        item.style.width = clientWidth + 'px'
        width += clientWidth
      })

      $slider.style.width = width + 'px'
    },
    _initSlider () {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true,
        probeType: 2,
        click: true
      })
      this.scrollEnd()
    },
    scrollEnd () {
      let me = this
      this.slider.on('scrollEnd', () => {
        me.$emit('scrollEnd')
      })
    },
    prev () {
      this.slider && this.slider.prev()
    },
    next () {
      this.slider && this.slider.next()
    },
    refresh () {
      this.slider && this.slider.refresh()
    },
    getCurrentPage () {
      return this.slider && this.slider.getCurrentPage()
    }
  }
}
</script>

<style lang="stylus">
.slider-group
  position relative
  overflow hidden
  white-space nowrap
  .questions-item
    float left
</style>
