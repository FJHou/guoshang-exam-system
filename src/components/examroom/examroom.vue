<template>
  <div class="exam-room">
      <Ehead :title="'国商控股商学院'">
        <div slot="left" class="left-slot">
          <RouteBack></RouteBack>
        </div>
        <div slot="right" class="right-slot"></div>
      </Ehead>
      <div class="question-content">

      </div>
      <footer>
        <span class="drec-control pre">
          <Icon type="arrow-left-c"></Icon>
        </span>
        <span class="footer-btn-wrapper">
          <Button type="primary" shape="circle" class="anwser-card-btn" @click.native="showAnwserCard">答题卡</Button>
          <Button type="primary" shape="circle" class="send-paper" @click.native="sendPaperEvent">交卷</Button>
        </span>
        <span class="drec-control next">
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

export default {
  data () {
    return {
      toggleCard: false,
      data: {a: 'b'}
    }
  },
  methods: {
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
    },
    sendPaper () {
      // .then()
    }
  },
  components: {
    Ehead,
    RouteBack,
    AnwserCard
  }
}
</script>

<style lang="stylus">

.exam-room
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  z-index 2
  background-color #fff
  .question-content

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
      .anwser-card-btn, .send-paper
        width 70px
        height 33px
      .send-paper
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
</style>
