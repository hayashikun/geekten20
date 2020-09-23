<template>
  <div id="outline" class="container">
    <div class="content is-medium">
      <h2 class="title is-3">
        お伝えしたいこと
      </h2>
      <div class="block">
        このプレゼンテーションで紹介するものは、
        <br/>
        qoinとqoinを使ったいくつかのアプリケーション(Poin, pyoin, qover)です
        <br/>
        まだ無駄開発の域なので、これらはまだ何の役には立ちませんが
        <br/>
        これらのプログラムを<b>Example</b>として、
        <br/>
        これから皆様に何か役に立つものを作っていただければと思います
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
@import "../assets/panel";

#outline {
  margin: 64px auto;
}
</style>