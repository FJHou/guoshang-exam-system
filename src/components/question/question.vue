<template>
  <div class="question">
    <Ehead :title="'国商控股商学院'" :styles="'background: #6383ef'">
      <div slot="left" class="left-slot">
        <RouteBack></RouteBack>
      </div>
      <div slot="right" class="right-slot">
      </div>
    </Ehead>
    <div class="animate-group">
<!--       <Card style="width:300px; margin: 30px auto">
          <div style="text-align:center;">
              <div class="animate-ground">
                <img src="./gear.png" class="gear rotate" width="120">
                <img src="./gear2.png" class="gear2 rotate2" width="60">
              </div>
              <Alert type="warning" show-icon>
                  此页面正在建设中...
              </Alert>
          </div>
      </Card> -->
      <Alert type="warning" show-icon>
        此页面正在建设中...
      </Alert>
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
  .animate-group
    position relative
    h3
      font-size 16px
      padding-top 20px
    .gear2
      margin-left: -30px
    .rotate
      animation rotate 10s infinite linear
      transform rotate()
    @keyframes rotate
    {
      from {transform: rotate(0deg)}
      to {transform: rotate(360deg)}
    }
    .rotate2
      animation rotate2 10s infinite linear
      transform rotate()
    @keyframes rotate2
    {
      from {transform: rotate(0deg)}
      to {transform: rotate(-360deg)}
    }
</style>
