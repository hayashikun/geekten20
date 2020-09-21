<template>
  <div id="product" class="container">
    <div class="content is-medium">
      <h2 class="title is-3">
        つくったもの
      </h2>
      <div class="block">
        <div class="columns">
          <div class="column">
            <img src="@/assets/product.png" alt="product" style="width: 90%; margin-top: 12px"/>
          </div>
          <div class="column is-three-quarters">
            <h3>qoin</h3>
            Webカメラの映像から手や顔を検出し、検出データをgRPCで他のアプリケーションへ送信するアプリケーション<br/>
            検出にはgoogle/mediapipeを利用し、両手検出などの追加機能を実装した<br/>
            データ送信は、gRPC Serverを起動し、リクエストに対して検出データをレスポンスとして送る方法 (PullStream) と、
            別のgRPC Serverへリクエストとして検出データを送る方法 (PushStream) の2つに対応している<br/>
            mediapipeはC++で実装され、<a href="https://bazel.build/">bazel</a>でビルドされているため、qoinもC++で実装し、bazelでビルドした
          </div>
        </div>
        <img src="@/assets/system.png" alt="system" style="width: 90%"/>
        <div class="tabs is-fullwidth is-medium is-toggle">
          <ul>
            <li v-bind:class="{ 'is-active': activeTab === 'poin' }">
              <a v-on:click="activeTab = 'poin'">Poin</a>
            </li>
            <li v-bind:class="{ 'is-active': activeTab === 'pyoin_app' }">
              <a v-on:click="activeTab = 'pyoin_app'">pyoin (head_direction, janken, hand_number)</a>
            </li>
            <li v-bind:class="{ 'is-active': activeTab === 'pyoin_server' }">
              <a v-on:click="activeTab = 'pyoin_server'">pyoin (pp_server)</a>
            </li>
          </ul>
        </div>
        <div class="tab-contents">
          <div class="content" v-bind:class="{ 'is-active': activeTab === 'poin' }">
            poin content
          </div>
          <div class="content" v-bind:class="{ 'is-active': activeTab === 'pyoin_app' }">
            pyoin_app content
          </div>
          <div class="content" v-bind:class="{ 'is-active': activeTab === 'pyoin_server' }">
            pyoin_server content
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      activeTab: 'poin'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "/node_modules/bulma/bulma.sass";
@import "../assets/panel";

#product {
  margin: 64px auto;

  .tabs {
    ul {
      margin: 0 auto;
      @media screen and (max-width: 769px) {
        display: block;
      }
    }
  }

  .tab-contents {
    margin: 0 16px;
  }

  .tab-contents .content {
    display: none;
  }

  .tab-contents .content.is-active {
    display: block;
  }
}
</style>