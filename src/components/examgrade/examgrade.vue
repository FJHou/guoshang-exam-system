<template>
  <div class="exam-grade">
    <Ehead :title="'国商控股商学院'" :styles="'background: #6383ef'">
      <div slot="left" class="left-slot">
        <RouteBack></RouteBack>
      </div>
      <div slot="right" class="right-slot">
        <div>记录</div>
      </div>
    </Ehead>
    <div class="grade-content">
      <div class="grade-show">
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
              <p class="q-type">单选题</p>
              <p class="q-state">共题,答对题</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Ehead from 'base/head/head'
import RouteBack from 'base/back/route-back'
export default {
  components: {
    Ehead,
    RouteBack
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
      background url('./result_bg.png') center/100%  no-repeat
      background-size 100% 100%
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
        padding-left 50px
        font-size 16px
      .score
        font-size 90px
      .state
        font-size 16px
</style>
