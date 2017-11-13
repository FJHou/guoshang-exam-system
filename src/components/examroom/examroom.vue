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
        <ul ref="qutList">
          <li>
            <h3 class="question-title">
              <span class="question-type">单选题</span>
              <span class="question-number">第1题</span>
            </h3>
            <div class="topic-wrapper">
              <p class="topic">为啥</p>

              <p class="option">啊啊啊</p>
            </div>
            <h3 class="question-hint">单选题</h3>
            <div class="option-wrapper">
              <RadioGroup v-model="select" class="option-group" @on-change="selected">
                 <!--  <Radio label="options[index]" size="large" class="radio" v-for="(options, index) in questions.options"></Radio> -->
                  <Radio label="A" size="large" class="radio"></Radio>
                  <Radio label="B" size="large" class="radio"></Radio>
                  <Radio label="C" size="large" class="radio"></Radio>
                  <Radio label="D" size="large" class="radio"></Radio>
              </RadioGroup>
            </div>
          </li>
          <li>
            <h3 class="question-title">
              <span class="question-type">单选题</span>
              <span class="question-number">第2题</span>
            </h3>
            <div class="topic-wrapper">
              <p class="topic">为啥</p>

              <p class="option">啊啊啊</p>
            </div>
            <h3 class="question-hint">单选题</h3>
            <div class="option-wrapper">
              <RadioGroup v-model="select" class="option-group" @on-change="selected">
                 <!--  <Radio label="options[index]" size="large" class="radio" v-for="(options, index) in questions.options"></Radio> -->
                  <Radio label="A" size="large" class="radio"></Radio>
                  <Radio label="B" size="large" class="radio"></Radio>
                  <Radio label="C" size="large" class="radio"></Radio>
                  <Radio label="D" size="large" class="radio"></Radio>
              </RadioGroup>
            </div>
          </li>
          <li>
            <h3 class="question-title">
              <span class="question-type">单选题</span>
              <span class="question-number">第3题</span>
            </h3>
            <div class="topic-wrapper">
              <p class="topic">为啥</p>

              <p class="option">啊啊啊</p>
            </div>
            <h3 class="question-hint">单选题</h3>
            <div class="option-wrapper">
              <RadioGroup v-model="select" class="option-group" @on-change="selected">
                 <!--  <Radio label="options[index]" size="large" class="radio" v-for="(options, index) in questions.options"></Radio> -->
                  <Radio label="A" size="large" class="radio"></Radio>
                  <Radio label="B" size="large" class="radio"></Radio>
                  <Radio label="C" size="large" class="radio"></Radio>
                  <Radio label="D" size="large" class="radio"></Radio>
              </RadioGroup>
            </div>
          </li>
        </ul>
      </div>
      <!-- </Scroll> -->
      <footer>
        <transition name="fade" @afterLeave="afterLeave">
          <span
            class="drec-control pre"
            :class="toggleCard ? 'hidden' : ''"
            v-show="shouldShowLeft"
            @click="_pre">
            <Icon type="arrow-left-c"></Icon>
          </span>
        </transition>
        <span class="footer-btn-wrapper">
          <Button
            type="ghost"
            shape="circle"
            class="anwser-card-btn"
            :class="toggleCard ? 'on' : ''"
            @click.native="showAnwserCard"
            >答题卡</Button>
          <Button
            type="ghost"
            shape="circle"
            class="send-paper-btn"
            @click.native="sendPaperEvent"
            >交卷</Button>
        </span>
        <transition name="fade" @afterLeave="afterLeave">
          <span
            class="drec-control next"
            :class="toggleCard ? 'hidden' : ''"
            v-show="shouldShowRight"
            @click="_next">
            <Icon type="arrow-right-c"></Icon>
          </span>
      </transition>
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
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      CountDowntimer: '',
      scrollCurrentIndex: 0,
      scrollLastIndex: 0,
      toggleCard: false,
      shouldShowLeft: false,
      shouldShowRight: true,
      data: [],
      select: ''
    }
  },
  computed: {
    shouldHiddenLeftBtn () {
      // return this.toggleLeftButton
    }
  },
  created () {
    this.canClick = true
  },
  mounted () {
    // console.log(CountDownTimer)
    this.setTime()
    this._setQuetWidth()
    this._initSlider()
    this._scrollEnd()
    this._scrollToggleButton()
  },
  methods: {
    setTime () {
      this.timer = new CountDownTimer('1:20:23', (times) => {
        this.CountDowntimer = times
        // console.log(times)
      })
    },
    selected (me) {
      // console.log(me)
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
      this.toggleRightButton = !this.toggleRightButton
      this.toggleLeftButton = !this.toggleLeftButton
    },
    sendPaper () {
      // .then()
    },
    afterLeave () {
      this.canClick = false
    },
    _setQuetWidth () {
      let $qutList = this.$refs.qutList
      let itemArr = $qutList.children
      this.scrollLastIndex = itemArr.length - 1
      // console.log('%c' + this.scrollLastIndex, 'color: red')
      let arr = []
      let clientWidth = $qutList.clientWidth
      let width = 0

      arr.forEach.call(itemArr, (item, index) => {
        item.classList.add('questions-item')
        item.style.width = clientWidth + 'px'
        width += clientWidth
      })

      $qutList.style.width = width + 'px'
    },
    _initSlider () {
      this.slider = new BScroll(this.$refs.qutCotent, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true
      })
    },
    _pre () {
      this.slider.prev()
      this._getCurrentPage()
    },
    _next () {
      this.slider.next()
      this._getCurrentPage()
    },
    _scrollToggleButton () {
      if (this.scrollCurrentIndex === this.scrollLastIndex) {
      // 说明滚动到最后一题
        this.shouldShowRight = false
        this.shouldShowLeft = true
        return
      }

      if (this.scrollCurrentIndex === 0) {
      // 第一题
        this.shouldShowLeft = false
        this.shouldShowRight = true
        return
      }

      this.shouldShowLeft = true
      this.shouldShowRight = true
    },
    _getCurrentPage () {
      this.scrollCurrentIndex = this.slider.getCurrentPage().pageX
      // console.log(typeof this.scrollCurrentIndex)
      // console.log('%c scrollCurrentIndex = ' + this.scrollCurrentIndex, 'color: pink')
      // console.log('%c scrollLastIndex = ' + this.scrollLastIndex, 'color: green')
    },
    _scrollEnd () {
      this.slider.on('scrollEnd', () => {
        this._scrollToggleButton()
      })
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
    overflow hidden
    > ul
      overflow hidden
      .questions-item
        float left
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
      flex 1
      display flex
      justify-content center
      .anwser-card-btn, .send-paper-btn
        color #2d8cf0
        border-color #2d8cf0
        font-size 14px
        width 70px
        height 33px
      .anwser-card-btn
        &.on
          background-color #2d8cf0
          color #fff
      .send-paper-btn
        margin-left 10px
    .drec-control
      position absolute
      width 33px
      height 33px
      background #2d8cf0
      color #fff
      line-height 33px
      text-align center
      font-size 20px
      border-radius 50%
      transition all .3s ease
      &.pre
        left 15px
      &.next
        right 15px
      &.hidden
        display none
        // opacity 0
</style>
