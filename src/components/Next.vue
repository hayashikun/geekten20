<template>
  <div id="next" class="container">
    <div class="content is-medium">
      <h2 class="title is-3">
        今後の展望
      </h2>
      <div class="block">
        <ul>
          <li>qoinのbug fix (C++力を高めなきゃ😇)</li>
          <li>qoverはスケールできないので、データの持ち方や設計をちゃんと考えないといけない</li>
          <li>qoinで検出できる対象 (現状はface_meshとhand_trackingのみ) をもっと増やしたい</li>
          <li>検出データをニューラルネットで処理するやつ面白そうだしもっとやりたい</li>
        </ul>

        mediapipeの開発は活発に続いており、今後もっと検出できる対象が増えるはず
        <br/>
        <Tweet id="1308683735580114949"></Tweet>
      </div>
    </div>
  </div>
</template>
<script>
import {Tweet} from 'vue-tweet-embed'

export default {
  name: "Next",
  components: {
    Tweet
  }
}
</script>

<style lang="scss" scoped>
@import "/node_modules/bulma/bulma.sass";
@import "../assets/panel";

#next {
  margin: 64px auto;
}
</style>