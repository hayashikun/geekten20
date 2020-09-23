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
              <a v-on:click="activeTab = 'pyoin_app'">pyoin</a>
            </li>
            <li v-bind:class="{ 'is-active': activeTab === 'qover' }">
              <a v-on:click="activeTab = 'qover'">qover</a>
            </li>
          </ul>
        </div>
        <div class="tab-contents">
          <div class="content" v-bind:class="{ 'is-active': activeTab === 'poin' }">
            <h3><a href="https://github.com/hayashikun/poin">Poin (Rust)</a></h3>
            <div class="columns">
              <div class="column is-three-fifths">
                qoinから受け取った手の位置に応じて画面上のポインターを移動させるアプリケーション
              </div>
              <div class="column">
                <img src="@/assets/poin.gif" alt="system" style="width: 100%"/>
              </div>
            </div>
          </div>
          <div class="content" v-bind:class="{ 'is-active': activeTab === 'pyoin_app' }">
            <h3><a href="https://github.com/hayashikun/pyoin">pyoin (Python)</a></h3>
            <div class="columns">
              <div class="column is-three-fifths">
                qoinから受け取った手、顔の検出データから、
                <ul>
                  <li>顔の向き (head_direction)</li>
                  <li>じゃんけんの手 (janken)</li>
                  <li>指の数 (hand_number)</li>
                </ul>
                をリアルタイムで判別するアプリケーション
                <br/><br/>
                顔の向きの判別は左右の目の角度や、目と唇の角度から計算した
                <br/>
                じゃんけんの手と指の数は、単純なニューラルネットワークを用いて判別している
                <br/>
                <a href="https://github.com/hayashikun/pyoin/blob/master/data/janken.ipynb">data/janken.ipynb</a>
              </div>
              <div class="column">
                <img src="@/assets/janken.gif" alt="system" style="width: 100%"/>
              </div>
            </div>
          </div>
          <div class="content" v-bind:class="{ 'is-active': activeTab === 'qover' }">
            <h3><a href="https://github.com/hayashikun/qover">qover (Python)</a></h3>
            <div class="columns">
              <div class="column">
                <img src="@/assets/qover.png" alt="qover" style="width: 80%"/>
              </div>
              <div class="column is-half">
                qoinからPushStreamで受け取ったデータをPushStreamで複数のクライアントに送信するgRPCサーバー
                <br/>
                qoverを用いることで、ネットワークを超えて検出データをやり取りできる
                <br/>
                クライアントへはPullStreamによってデータが送られるため、接続hostを変えるだけでネットワーク越しのqoinの情報を取得できる
                <br/><br/>
                ProxyにはEnvoyを用い、<code>gh.hayashikun.com</code>にデプロイした
                <br/>
                <code>gdh.hayashikun.com</code>はデモとして手の動きサンプルを配信している
                <br/>
                connectを押すと手の動きが確認できるので是非（同時接続数は限られているので動かなかったらすんません）
                <br /><br />
                JSで手の動きを表示させる実装は
                <a href="https://github.com/hayashikun/geekten20/blob/master/src/components/HandTransfer.vue">
                  HandTransfer.vue
                </a>
                を参照ください
              </div>
              <div class="column is-one-quarter">
                <HandTransfer/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HandTransfer from "@/components/HandTransfer";

export default {
  name: "Product",
  components: {HandTransfer},
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