<template>
  <div id="next" class="container">
    <div class="content is-medium">
      <h2 class="title is-3">
        今後の展望など
      </h2>
      <div class="block">
        <ul>
          <li><code>qoin</code>のbug fix (C++力を高めなきゃ😇)</li>
          <li><code>qover</code>は現状スケールできない設計なので、データの持ち方や設計をちゃんと考えないといけない</li>
          <li><code>qoin</code>で検出できる対象が現状はface_meshとhand_trackingのみなので、もっと増やしたい（<code>mediapipe</code>にあるものならすぐできる）</li>
          <li><code>google/mediapipe</code>自体が面白いプロジェクトなので、contributeしたい</li>
          <li>検出データをニューラルネットで処理するやつ面白そうだしもっとやりたい</li>
        </ul>
        <code>google/mediapipe</code>の開発は活発に続いていて、今後もっと検出できる対象が増えるはず
      </div>

      <div class="columns">
        <div class="column">
          もっとかわいくなりたい
          <Tweet id="1299740138902228997"></Tweet>
        </div>
        <div class="column">
          最終的にはTony Starkになりたい
          <Tweet id="1308683735580114949"></Tweet>
        </div>
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

#next {
  margin: 64px auto;
}
</style>