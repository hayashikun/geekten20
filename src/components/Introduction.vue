<template>
  <div id="introduction" class="container">
    <div class="content is-medium">
      <h2 class="title is-3">
        自己紹介
      </h2>
      <div class="block">
        <ul class="myself-list">
          <li><span>HN:</span>はやしくんさん</li>
          <li><span>出身:</span>大阪生まれ、大阪育ち</li>
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