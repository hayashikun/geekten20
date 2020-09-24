<template>
  <header id="app-header">
    <div class="container">
      <nav class="navbar is-fixed-top is-dark">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://github.com/hayashikun/qoin">
            <h1>hayashikun/qoin</h1>
          </a>

          <a role="button" class="navbar-burger burger"
             v-bind:class="{ 'is-active': burgerActive }" v-on:click="burgerActive = !burgerActive"
             aria-label="menu" aria-expanded="false" data-target="header-navbar">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="header-navbar" class="navbar-menu" v-bind:class="{ 'is-active': burgerActive }">
          <div class="navbar-start">
            <a class="navbar-item" href="http://geekten.hayashikun.com">
              <h2>geekten.hayashikun.com</h2>
            </a>
          </div>
          <div class="navbar-end">
            <a class="navbar-item" href="https://twitter.com/haya4p">
              <h2><fai :icon="['fab', 'twitter']"/> haya4p</h2>
            </a>
            <a class="navbar-item" href="https://github.com/hayashikun">
              <h2><fai :icon="['fab', 'github']"/> hayashikun</h2>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      "burgerActive": false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "/node_modules/bulma/bulma.sass";

#app-header {
  margin-top: 96px;

  a {
    text-decoration: none;
  }

  .navbar-burger {
    margin-top: auto;
    margin-bottom: auto;
  }

  .navbar-item {
    margin-left: 8px;
    margin-right: 8px;
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