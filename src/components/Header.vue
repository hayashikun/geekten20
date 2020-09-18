<template>
  <header id="app-header">
    <div class="container">
      <nav class="navbar is-fixed-top is-dark">
        <div class="navbar-start">
          <a class="navbar-item" href="https://github.com/hayashikun/qoin">
            <h1>hayashikun/qoin</h1>
          </a>
          <a class="navbar-item" href="https://hayashikun.com/geekten20">
            <h2>hayashikun.com/geekten20</h2>
          </a>
        </div>

        <div class="navbar-end">
          <h2 class="navbar-item">Ryosuke Hayashi</h2>
          <a class="navbar-item" href="https://twitter.com/haya4p">
            <h2>Twitter - @haya4p</h2>
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
@import "/node_modules/bulma/bulma.sass";

#app-header {
  margin-top: 96px;

  .navbar-item {
    color: white;
  }
  a {
    text-decoration: none;
  }
  h1 {
    font-size: 1.6em;
    margin: 4px 10px;
  }
  h2 {
    font-size: 1.2em;
  }
}
</style>