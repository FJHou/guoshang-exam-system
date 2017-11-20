<template>
  <div class="exam-room">
      <Ehead :title="'国商控股商学院'">
        <div slot="left" class="left-slot">
          <RouteBack></RouteBack>
        </div>
        <div slot="right" class="right-slot">{{CountDowntimer}}</div>
      </Ehead>
      <Slider class="question-content" ref="slider" @scrollEnd="scrollEnd">
        <div>
          <h3 class="question-title">
            <span class="question-type">单选题</span>
            <span class="question-number">第1题</span>
          </h3>
          <div class="topic-wrapper">
            <p class="topic">为啥</p>
            <p class="option">A、啊啊啊</p>
            <p class="option">B、啊啊啊</p>
            <p class="option">C、啊啊啊</p>
            <p class="option">D、啊啊啊</p>
          </div>
          <h3 class="question-hint">单选题</h3>
          <div class="option-wrapper">
            <OptionGroup/>
          </div>
        </div>
        <div>
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
            <OptionGroup/>
          </div>
        </div>
      </Slider>
      <!-- </Scroll> -->
      <footer>
        <!-- <transition name="fade"> -->
          <span
            class="drec-control pre"
            :class="toggleCard ? 'hidden' : ''"
            v-show="shouldShowLeft"
            @click="_pre">
            <Icon type="arrow-left-c"></Icon>
          </span>
        <!-- </transition> -->
        <span class="footer-btn-wrapper">
          <Button
            type="ghost"
            shape="circle"
            class="anwser-card-btn"
            :class="toggleCard ? 'on' : ''"
            @click.prevent="showAnwserCard"
            >答题卡</Button>
          <Button
            type="ghost"
            shape="circle"
            class="send-paper-btn"
            @click.prevent="sendPaperEvent"
            >交卷</Button>
        </span>
        <!-- <transition name="fade"> -->
          <span
            class="drec-control next"
            :class="toggleCard ? 'hidden' : ''"
            v-show="shouldShowRight"
            @click="_next">
            <Icon type="arrow-right-c"></Icon>
          </span>
      <!-- </transition> -->
      </footer>
      <AnwserCard :data="data" v-show="toggleCard"></AnwserCard>
      <Modal v-model="shouldShowPaperModal"
             :closable="false"
             :maskClosable="false"
             class-name="vertical-center-modal"
             >
        <p slot="header" style="color:#ff9900;text-align:center;border-bottom:none">
            <Icon type="alert-circled"></Icon>
            <span style="font-size:16px">你确定要交卷吗？</span>
        </p>
        <div style="text-align:center; font-size: 16px">
            <p>共有试题100到，已做50道。您确定交卷吗？</p>
            <p style="color:#ccc; font-size: 14px; padding-top: 10px">{{CountDowntimer}}</p>
        </div>
        <div slot="footer">
          <div style="display: flex;justify-content: center">
            <Button type="primary"
                    size="large"
                    :loading="loading"
                    @click.prevent="confirmSendPaper">
                  交卷</Button>
            <Button type="ghost"
                    size="large"
                    style="margin-left: 40px"
                    @click.prevent="shouldShowPaperModal = false">
                  取消</Button>
          </div>
        </div>
      </Modal>

  </div>
</template>

<script type="text/ecmascript-6">
import {mapMutations} from 'vuex'
// import Ehead from 'base/head/head'
// import RouteBack from 'base/back/route-back'
// import Slider from 'base/slider/slider'
// import AnwserCard from 'components/anwsercard/anwsercard'
// import OptionGroup from 'components/optiongroup/optiongroup'
// import Scroll from 'base/scroll/scroll'
import {CountDownTimer} from 'countdown-timer-js'
import {Button, Icon, Modal, Message} from 'iview'

const Ehead = (resolve) => {
  import('base/head/head').then((module) => {
    resolve(module)
  })
}

const RouteBack = (resolve) => {
  import('base/back/route-back').then((module) => {
    resolve(module)
  })
}

const Slider = (resolve) => {
  import('base/slider/slider').then((module) => {
    resolve(module)
  })
}

const AnwserCard = (resolve) => {
  import('components/anwsercard/anwsercard').then((module) => {
    resolve(module)
  })
}

const OptionGroup = (resolve) => {
  import('components/optiongroup/optiongroup').then((module) => {
    resolve(module)
  })
}

const Scroll = (resolve) => {
  import('base/scroll/scroll').then((module) => {
    resolve(module)
  })
}

export default {
  data () {
    return {
      CountDowntimer: '',
      scrollCurrentIndex: 0,
      scrollLastIndex: 1,
      toggleCard: false,
      shouldShowLeft: false,
      shouldShowRight: true,
      data: [
        {
          type: '单选题',
          num: 1,
          isSelect: false,
          result: '',
          isRight: false
        },
        {
          type: '单选题',
          num: 2,
          isSelect: false,
          result: '',
          isRight: true
        }
      ],
      loading: false,
      shouldShowPaperModal: false,
      modalLoading: false
    }
  },
  created () {
    this.canClick = true
  },
  mounted () {
    this.setQuestions(this.data)
    this.setTime()
    // this._setQuetWidth()
    // this._initSlider()...
    this._scrollToggleButton()
  },
  methods: {
    setTime () {
      this.timer = new CountDownTimer('00:00:60', (times) => {
        this.CountDowntimer = times
      })
    },
    // 确认交卷
    confirmSendPaper () {
      this.loading = true
      setTimeout(() => {
        this.shouldShowPaperModal = false
        this.$Message.success('交卷成功')
        this.loading = false
      }, 2000)
    },
    sendPaperEvent () {
      this.shouldShowPaperModal = true
    },
    showAnwserCard () {
      this.toggleCard = !this.toggleCard
      this.toggleRightButton = !this.toggleRightButton
      this.toggleLeftButton = !this.toggleLeftButton
    },
    _pre () {
      if (!this.canClick) {
        return
      }
      this.canClick = false
      this.$refs.slider.prev()
    },
    _next () {
      if (!this.canClick) {
        return
      }
      this.canClick = false
      this.$refs.slider.next()
    },
    _scrollToggleButton () {
      if (this.scrollCurrentIndex === 0) {
        // 第一题
        this.shouldShowLeft = false
        this.shouldShowRight = true
        return
      }

      if (this.scrollCurrentIndex === this.scrollLastIndex) {
        // 说明滚动到最后一题
        this.shouldShowRight = false
        this.shouldShowLeft = true
        return
      }

      this.shouldShowLeft = true
      this.shouldShowRight = true
    },
    _getCurrentPage () {
      this.scrollCurrentIndex = this.$refs.slider.getCurrentPage().pageX
    },
    scrollEnd () {
      this._getCurrentPage()
      this._scrollToggleButton()
      this.canClick = true
      this.setCurrentIndex(this.scrollCurrentIndex)
    },
    ...mapMutations({
      setCurrentIndex: 'SET_CURRENT_INDEX',
      setQuestions: 'SET_QUESTIONS'
    })
  },
  components: {
    Ehead,
    RouteBack,
    AnwserCard,
    OptionGroup,
    Scroll,
    Slider,
    Modal,
    Button,
    Icon,
    Message
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'

// 自定义iview Modal组件样式

.ivu-modal-header
  padding-bottom 0
  border-bottom none
.ivu-modal-footer
  padding-top 0
  border-top none
.vertical-center-modal
  display flex
  align-items center
  justify-content center
  .ivu-modal
    top 0

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
    .question-title
      padding 10px 15px
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
</style>
