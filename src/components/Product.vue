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
            <h3><a href="https://github.com/hayashikun/qoin">qoin</a></h3>
            Webカメラの映像から手や顔を検出し、検出データをgRPCで他へ送信するアプリケーション<br/>
            検出には<code>google/mediapipe</code>を利用し、データを抽出する処理などを追加した<br/>
            データ送信は、gRPC Serverを起動し、リクエストに対して検出データをレスポンスとして送る方法 (PullStream) と、
            別のgRPC Serverへリクエストとして検出データを送る方法 (PushStream) の2つに対応している<br/>
            <code>mediapipe</code>はC++で実装され、<a href="https://bazel.build/">bazel</a>でビルドされているため、
            <code>qoin</code>もC++で実装し、bazelでビルドした
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
            <div class="columns">
              <div class="column is-three-fifths">
                <h3><a href="https://github.com/hayashikun/poin">Poin (Rust)</a></h3>
                <code>qoin</code>から受け取った手の位置に応じて画面上のポインターを移動させるアプリケーション
                <br/>
                GUIライブラリには<a href="https://github.com/PistonDevelopers/conrod">conrod</a>を使った
                <br/><br/>
                プレゼンで使おうと思ってましたが、超使いにくいので使いません
              </div>
              <div class="column">
                <img src="@/assets/poin.gif" alt="system" style="width: 100%"/>
              </div>
            </div>
          </div>
          <div class="content" v-bind:class="{ 'is-active': activeTab === 'pyoin_app' }">
            <div class="columns">
              <div class="column is-three-fifths">
                <h3><a href="https://github.com/hayashikun/pyoin">pyoin (Python)</a></h3>
                <code>qoin</code>から受け取った手、顔の検出データから、
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
                <img src="@/assets/head_direction.gif" alt="system" style="width: 80%"/>
                <img src="@/assets/janken.gif" alt="system" style="width: 80%"/>
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
                <code>qoin</code>からPushStreamで受け取ったデータをPushStreamで複数のクライアントに送信するgRPCサーバー
                <br/>
                クライアントへはPullStreamによってデータが送られるため、接続hostを変えるだけでネットワーク越しに<code>qoin</code>の情報を取得できる
                <br/>
                （<code>Poin</code>や<code>pyoin</code>を別のネットワーク、別の端末でも接続先を変えるだけで使えるということ）
                <br/><br/>
                <code>gh.hayashikun.com:3000</code>にデプロイしたので、本番ではリアルタイムデモをお見せします
                <br/>
                <code>gdh.hayashikun.com:3000</code>はデモとして手の動きサンプルを配信しているので、いつでも動きます
                <br/>
                <code>connect</code>を押すと手の動きが確認できるので是非
                （課金が怖くてよわよわフリートでデプロイしていて、同時接続数は多分そんなに多くないです動かなかったらごめんなさい）
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