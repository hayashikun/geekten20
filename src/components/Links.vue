<template>
  <div id="links" class="container">
    <div class="content is-medium">
      <h2 class="title is-3">
        Links
      </h2>
      <ul>
        <li><a href="https://talent.supporterz.jp/geekten/2020/">技育展2020</a></li>
        <li><a href="http://geekten.hayashikun.com">geekten.hayashikun.com</a></li>
        <li><a href="https://github.com/hayashikun/geekten20">
          <fai :icon="['fab', 'github']"/> hayashikun/geekten20</a>
        </li>
        <li><a href="https://github.com/hayashikun/qoin">
          <fai :icon="['fab', 'github']"/> hayashikun/qoin</a>
        </li>
        <li><a href="https://github.com/hayashikun/qover">
          <fai :icon="['fab', 'github']"/> hayashikun/qover</a>
        </li>
        <li><a href="https://github.com/hayashikun/poin">
          <fai :icon="['fab', 'github']"/> hayashikun/poin</a>
        </li>
        <li><a href="https://mediapipe.dev">mediapipe.dev</a></li>
        <li><a href="https://github.com/google/mediapipe">
          <fai :icon="['fab', 'github']"/> google/mediapipe</a>
        </li>
        <li><a href="https://twitter.com/haya4p"><fai :icon="['fab', 'twitter']"/> haya4p</a></li>
        <li><a href="https://twitter.com/haya4p"><fai :icon="['fab', 'github']"/> hayashikun</a></li>


      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Links",
}
</script>

<style lang="scss" scoped>
@import "/node_modules/bulma/bulma.sass";

#links {
  margin: 64px auto;

}
</style>