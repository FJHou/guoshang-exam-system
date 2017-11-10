<template>
  <Scroll
    :data="data"
    :probe-type="probeType"
    :listen-scroll="listenScroll"
    class="exam-list"
  >
    <ul>
      <li v-for="item in data" class="question" @click="selectItem(item)">
        <span class="exam-icon">
          <Icon type="document-text" class="document-text"></Icon>
        </span>
        <div class="exam-info">
          <p class="exam-name">金融、资产管理与投资基金</p>
          <p class="exam-time">
            <span>考试时间: 2017-10-01 08:00:00</span>
          </p>
        </div>
      </li>
    </ul>
  </Scroll>
</template>

<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll'

export default {
  props: {
    data: {
      type: Array,
      default: null
    }
  },
  methods: {
    selectItem (e) {
      this.$emit('select', e)
    }
  },
  created () {
    this.probeType = 3
    this.listenScroll = true
  },
  components: {
    Scroll
  }
}
</script>

<style lang="stylus">
.exam-list
  .question
    padding 12px 12px 15px
    display flex
    position relative
    &:before
      content ''
      position: absolute
      bottom 0
      left 0
      width 100%
      height 1px
      background-color #e1e1e1
    .exam-icon
      flex 0 0 20px
      text-align center
      .document-text
        color #c2c2c2
        font-size 12px
        vertical-align top
    .exam-info
      flex 1
      .exam-name
        font-size 16px
        color #434343
      .exam-time
        margin-top 20px
        font-size 14px
        color #919191
</style>
