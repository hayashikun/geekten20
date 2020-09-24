<template>
  <div id="introduction" class="container">
    <div class="content is-medium">
      <h2 class="title is-3">
        自己紹介
      </h2>
      <div class="block">
        <ul class="myself-list">
          <li><span>名前:</span>林 良祐</li>
          <li><span>HN:</span>はやしくんさん</li>
          <li><span>出身:</span>大阪生まれ、大阪育ち、大阪大学学部卒</li>
          <li><span>所属:</span>東京大学大学院 理学系研究科 化学専攻 博士後期課程2年</li>
          <li><span>研究:</span>金属をレーザー照射によって励起したときの電子ダイナミクスの解明</li>
          <li><span>趣味:</span>プログラミング</li>
          <li><span>❤️:</span>Python, Swift</li>
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

#introduction {
  margin: 64px auto;

  .myself-list {
    span {
      display: inline-block;
      width: 60px;
    }
  }
}
</style>