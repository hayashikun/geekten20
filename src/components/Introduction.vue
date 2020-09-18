<template>
  <div id="introduction" class="container">
    <div class="content is-medium">
      <h2 class="title is-3">
        自己紹介
      </h2>
      <div class="block">
        <ul>
          <li>名前: 林 良祐</li>
          <li>出身: 大阪生まれ、大阪育ち、大阪大学学部卒</li>
          <li>所属: 東京大学大学院 理学系研究科 化学専攻 博士後期課程2年</li>
          <li>研究: 金属をレーザー照射によって励起したときの電子ダイナミクスの解明</li>
          <li>趣味: プログラミング</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduction",
}
</script>

<style lang="scss" scoped>
@import "/node_modules/bulma/bulma.sass";
@import "../assets/panel";

#introduction {
  margin: 64px auto;
}
</style>