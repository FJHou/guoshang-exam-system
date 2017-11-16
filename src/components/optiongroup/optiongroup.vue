<template>
  <RadioGroup v-model="button"
              type="button"
              size="large"
              class="option-group"
              @on-change="selected">
      <Radio label="A" class="option-btn"></Radio>
      <Radio label="B" class="option-btn"></Radio>
      <Radio label="C" class="option-btn"></Radio>
      <Radio label="D" class="option-btn"></Radio>
  </RadioGroup>
</template>

<script type="text/ecmascript-6">
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      button: ''
    }
  },
  methods: {
    selected (e) {
      this.setQuestionInfo(e)
      // this.$store.dispatch('setQuestionInfo')
      // console.log(e)
      // e.toElement.classList.add('selected')
      // this.$emit('selected')
    },
    ...mapActions([
      'setQuestionInfo'
    ])
  }
}
</script>

<style lang="stylus">

  .option-wrapper
    padding 0 15px
    margin-top 20px
    text-align center
    .option-group
      display flex
      justify-content space-between
      algin-items center
      .option-btn
        padding 0 25px
        border-radius 32px
        color inherit
        border 1px solid #dddee1
        &.ivu-radio-wrapper-checked
          color #fff
          background-color #577aed
          border-color #577aed
          box-shadow none
</style>
