<template>
  <div class="exam-grade">
    <Ehead :title="'国商控股商学院'" :styles="titleColor">
      <div slot="left" class="left-slot">
        <RouteBack></RouteBack>
      </div>
      <div slot="right" class="right-slot">
        <div @click="showCard">记录</div>
      </div>
    </Ehead>
    <div class="grade-content">
      <div class="grade-show" :class="gradeShowColor">
        <p class="used-time">
          <Icon type="ios-clock-outline"></Icon>
          <span>考试用时：{{}}</span>
        </p>
        <div class="grade-bg">
          <p class="top-unit">分</p>
          <p class="score">20</p>
          <p class="state">未通过考试</p>
        </div>
      </div>
      <div class="question-detail">
        <ul>
          <li class="type-wrapper">
            <div class="left-part">
              <i>单</i>
            </div>
            <div class="right-part">
              <p class="q-type">{单选题}</p>
              <p class="q-state">共{}题,答对{}题</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="check-grade">
      <Button type="primary"
              shape="circle"
              size="large"
              class="grade-btn"
              >查看答案及解析</Button>
    </div>
    <div class="close-card" v-show="toggleCard" @click="showCard">
      <Icon type="close-round" class="close-btn"></Icon>
    </div>
    <Anwsercard v-show="toggleCard" :data=data></Anwsercard>
  </div>
</template>

<script type="text/ecmascript-6">
import Ehead from 'base/head/head'
import RouteBack from 'base/back/route-back'
import Anwsercard from 'components/anwsercard/anwsercard'

export default {
  data () {
    return {
      isPass: false,
      toggleCard: false,
      data: []
    }
  },
  methods: {
    showCard () {
      this.toggleCard = !this.toggleCard
    }
  },
  computed: {
    titleColor () {
      return this.isPass ? 'background: #6383ef' : 'background: rgb(162, 130, 230)'
    },
    gradeShowColor () {
      return this.isPass ? 'pass' : 'no-pass'
    }
  },
  components: {
    Ehead,
    RouteBack,
    Anwsercard
  }
}
</script>

<style lang="stylus">

.exam-grade
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  z-index 3
  background-color #fff
  .grade-content
    // margin-top -50px
    position relative
    .grade-show
      position relative
      padding-top 90%
      // background-image
      background center  no-repeat
      background-size 100% 100%
      &.pass
        background-image url('./result_bg.png')
      &.no-pass
        background-image url('./result_no_bg.png')
    .used-time
      position absolute
      top 10px
      left 15px
      color #fff
      font-size 14px
    .grade-bg
      display flex
      flex-direction column
      justify-content center
      align-items center
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      margin auto
      background url('result_no_img.png') center/60% no-repeat
      text-align center
      color #fff
      .top-unit
        padding-left 80px
        font-size 16px
      .score
        font-size 90px
        line-height 80px
      .state
        font-size 14px
  .question-detail
    .type-wrapper
      display flex
      // height 58px
      border-bottom 1px solid #e1e1e1
      .left-part
        flex 0 0 45px
        padding-top 14px
        text-align center
        i
          display inline-block
          width 24px
          height 24px
          line-height 24px
          text-align center
          font 12px
          font-style normal
          color #fff
          background-color #feb126
          border-radius 50%
      .right-part
        flex 1
        padding-top 17px
        padding-bottom 10px
        .q-type
          font-size 16px
        .q-state
          padding-top 10px
          color #cbcbcb
  .check-grade
    margin-top 15px
    text-align center
    .grade-btn
      width 60%
  .close-card
    position fixed
    bottom 10px
    left 50%
    right 50%
    margin-left -15px
    z-index 3
    width 30px
    height 30px
    line-height 30px
    border-radius 50%
    text-align center
    .close-btn
      font-size 20px
</style>
