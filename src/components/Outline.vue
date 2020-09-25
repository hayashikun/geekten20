<template>
  <div id="outline" class="container">
    <div class="content is-medium">
      <h2 class="title is-3">
        お伝えしたいこと
      </h2>
      <div class="columns">
        <div class="column">
          このプレゼンテーションで紹介するものは、
          <ul>
            <li>Webカメラの映像から顔や手のトラッキングをするアプリケーション<code>qoin</code></li>
            <li><code>qoin</code>を利用したアプリケーション（<code>Poin</code>, <code>pyoin</code>, <code>qover</code>）</li>
          </ul>
          です
          <br/><br/>
          これらのアプリはまだ何の価値も生み出していませんし、見通しも立っていません（<b>無駄開発！</b>）
          <br/>
          この発表では<code>qoin</code>と<code>qoin</code>を利用したアプリケーションの<b>Concept</b>と<b>Example</b>を紹介するので、
          <br/>
          この発表を聞いて皆様に<b>ワクワク</b>していただき、これから皆様と一緒に価値を創造していきたいと思っています
          <br/>
          （＝こんなことできんじゃないの？みたいなのあればコメント下さい！）
          <br/>
          （＝皆様も使ってみてください！）
        </div>
        <div class="column is-one-quarter">
          <img src="@/assets/face_mesh.png" alt="face_mesh" style="width: 100%" />
          <img src="@/assets/hand_tracking.png" alt="hand_tracking" style="width: 100%" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Outline",
}
</script>

<style lang="scss" scoped>
@import "/node_modules/bulma/bulma.sass";

#outline {
  margin: 64px auto;
}
</style>