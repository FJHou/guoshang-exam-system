<template>
  <div class="exam-room">
      <Ehead :title="'国商控股商学院'">
        <div slot="left" class="left-slot">
          <RouteBack></RouteBack>
        </div>
        <div slot="right" class="right-slot">{{CountDowntimer}}</div>
      </Ehead>
<!--       <Scroll :data="data"
              :probe-type="1"
              class="question-content"> -->
      <div class="question-content" ref="qutCotent">
<!--         <ul>
          <li  v-for="(questions, index) in item.questions">
            <h3 class="question-title">
              <span class="question-type">{{item.type}}</span>
              <span class="question-number">第{{questions.num}}题</span>
            </h3>
            <div class="topic-wrapper">
              <p class="topic">{{questions.topic}}</p>

              <p class="option" v-for="(options, idx) in questions.options">{{options}}</p>
            </div>
            <h3 class="question-hint">[{{questions.type}}]请作答：</h3>
            <div class="option-wrapper">
              <RadioGroup v-model="select" class="option-group" @on-change="selected">
                  <Radio label="options[index]" size="large" class="radio" v-for="(options, index) in questions.options"></Radio>
                  <Radio label="A" size="large" class="radio"></Radio>
                  <Radio label="B" size="large" class="radio"></Radio>
                  <Radio label="C" size="large" class="radio"></Radio>
                  <Radio label="D" size="large" class="radio"></Radio>
              </RadioGroup>
            </div>
          </li>
        </ul> -->
      </div>
      <!-- </Scroll> -->
      <footer>
        <span class="drec-control pre" :class="toggleControlButton ? 'hidden' : ''">
          <Icon type="arrow-left-c"></Icon>
        </span>
        <span class="footer-btn-wrapper">
          <Button
            type="ghost"
            shape="circle"
            class="anwser-card-btn"
            @click.native="showAnwserCard"
            >答题卡</Button>
          <Button
            type="ghost"
            shape="circle"
            class="send-paper-btn"
            @click.native="sendPaperEvent"
            >交卷</Button>
        </span>
        <span class="drec-control next" :class="toggleControlButton ? 'hidden' : ''">
          <Icon type="arrow-right-c"></Icon>
        </span>
      </footer>
      <AnwserCard :data="data" v-show="toggleCard"></AnwserCard>
  </div>
</template>

<script type="text/ecmascript-6">
import Ehead from 'base/head/head'
import RouteBack from 'base/back/route-back'
import AnwserCard from 'components/anwsercard/anwsercard'
import Scroll from 'base/scroll/scroll'
import {CountDownTimer} from 'countdown-timer-js'

export default {
  data () {
    return {
      CountDowntimer: '',
      toggleCard: false,
      toggleControlButton: false,
      data: [
        {
          type: '单选题',
          questions: [
            {
              num: 1,
              topic: '哪一种不是水果',
              state: true,
              options: [
                '香蕉',
                '苹果',
                '橘子',
                '辣鸡'
              ]
            },
            {
              num: 2,
              state: false,
              topic: '哪一种不是水果',
              options: [
                '香蕉',
                '苹果',
                '橘子',
                '辣鸡'
              ]
            },
            {
              num: 3,
              state: true,
              topic: '哪一种不是水果',
              options: [
                '香蕉',
                '苹果',
                '橘子',
                '辣鸡'
              ]
            }
          ],
          totalCount: 10
        }
      ],
      select: ''
    }
  },
  mounted () {
    // console.log(CountDownTimer)
    this.setTime()
  },
  methods: {
    setTime () {
      this.timer = new CountDownTimer('1:20:23', (times) => {
        this.CountDowntimer = times
        console.log(times)
      })
    },
    selected (me) {
      console.log(me)
    },
    _setQuetWidth () {

    },
    sendPaperEvent () {
      this.$Modal.confirm({
        content: '<p>共有实体100题，已做。您确认交卷吗？</p> <p></p>',
        okText: '交卷',
        cancelText: '继续考试',
        onOk: () => {
          // this.sendPaper()  /* 发送考题 1*/
          this.$Message.info('交卷成功')
          this.$router.replace({
            path: '/exam'
          })
        }
      })
    },
    showAnwserCard () {
      this.toggleCard = !this.toggleCard
      this.toggleControlButton = !this.toggleControlButton
    },
    sendPaper () {
      // .then()
    }
  },
  components: {
    Ehead,
    RouteBack,
    AnwserCard,
    Scroll
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'

.exam-room
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  z-index 2
  background-color #fff
  .question-content
    position absolute
    top 50px
    bottom 50px
    left 0
    right 0
    > ul
      display flex
      .questions-item
        display flex
    .question-title
      padding 10px 15px
      // height 30px
      // line-height 30px
      background-color #f8f8f8
      box-shadow 0 1px 0 0 #e1e1e1
      .question-type
        padding 3px 5px
        font-size 14px
        border-radius 3px
        background-color $color-theme
        color #fff
      .question-number
        color #434343
        margin-left 6px
    .topic-wrapper
      padding 10px 15px 30px
      color #434343
      font-size 16px
      .option
        padding-left 10px
        margin-top 25px
    .question-hint
      padding 10px 15px
      font-size 16px
    .options-select
      display flex
      justify-content center
    .option-wrapper
      padding 0 10px
      margin-top 20px
      text-align center
      .option-group
        display flex
        .radio
          flex 1
          text-align left
  footer
    display flex
    align-items center
    justify-content space-between
    position absolute
    bottom 0
    padding 0 15px
    width 100%
    height 50px
    background #f8f8f8
    z-index 3
    box-shadow 0 1px 2px 1px #e1e1e1
    .footer-btn-wrapper

      .anwser-card-btn, .send-paper-btn
        color #2d8cf0
        border-color #2d8cf0
        font-size 14px
        width 70px
        height 33px
      .send-paper-btn
        margin-left 10px
    .drec-control
      width 33px
      height 33px
      background #2d8cf0
      color #fff
      line-height 33px
      text-align center
      font-size 20px
      border-radius 50%
      transition all .3s ease
      &.hidden
        // visibility hidden
        opacity 0
</style>
