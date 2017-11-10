<template>
  <div class="notice">
    <Ehead :title="'国商控股商学院'">
      <div slot="left" class="left-slot">
        <RouteBack></RouteBack>
      </div>
      <div slot="right" class="right-slot"></div>
    </Ehead>
    <h1 class="exam-name-title">金融、资产管理与投资基金</h1>
    <h2 class="notice-title">考试须知</h2>
    <div class="basic-info">
      <h3 class="basic-info-title">基本信息</h3>
      <p>考试开放时间：2018-10-01 14:30-16:30</p>
      <p>考试时间：90分钟</p>
      <p>总分：100分</p>
      <p>及格分：60分</p>
      <p>可考次数：1次</p>
    </div>
    <div class="question-info">
      <h3 class="question-info-title">题目信息</h3>
      <table>
        <thead>
          <tr>
            <td>单选题</td>
            <td>单选题</td>
            <td>单选题</td>
            <td>单选题</td>
            <td>单选题</td>
            <td>单选题</td>
          </tr>
        </thead>
        <tr>
          <td>20题</td>
          <td>20题</td>
          <td>20题</td>
          <td>20题</td>
          <td>20题</td>
          <td>20题</td>
        </tr>
        <tr>
          <td>20分</td>
          <td>20分</td>
          <td>20分</td>
          <td>20分</td>
          <td>20分</td>
          <td>20分</td>
        </tr>
      </table>
    </div>
    <div class="btn-wrapper">
      <Button type="primary" shape="circle" class="join-exam" @click.native="examRoom">进入考试</Button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Ehead from 'base/head/head'
import RouteBack from 'base/back/route-back'
export default {
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  data () {
    return {

    }
  },
  methods: {
    examRoom () {
      this.$router.replace({
        path: '/exam/examroom'
      })
    }
  },
  components: {
    Ehead,
    RouteBack
  }
}
</script>

<style lang="stylus">
  .notice
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 2
    background-color #fff
  .exam-name-title
    margin-top: 24px
    text-align: center
    font-size: 18px
  .notice-title
    margin-top 10px
    font-size 18px
    text-align center
  .basic-info
    font-size 14px
    padding-right 18px
    padding-left 18px
    .basic-info-title
      margin-top 20px
      margin-bottom 15px
      font-size 16px
    > p
      color #8c8c8c
      font-size 14px
      margin-bottom 10px
  .question-info
    padding-right 18px
    padding-left 18px
    table
      margin-top 14px
      border 1px solid #e1e1e1
      width 100%
      text-align center
      thead
        color #434343
      td
        padding 8px 5px
        border 1px solid #e1e1e1
        font-size 12px
    .question-info-title
      padding-top 6px
      font-size: 16px
  .btn-wrapper
    margin-top 28px
    text-align center
    .join-exam
      width 60%
      font-size 14px
</style>
