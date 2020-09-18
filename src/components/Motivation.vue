<template>
  <div id="motivation" class="container">
    <div class="content">
      <h2 class="title is-3">
        モチベ
      </h2>
      <div class="block motivation-list">
        <div class="box">
          <img src="@/assets/mail.png" alt="mail" style="height: 200px"/>
          <div>楓さんから技育展の案内</div>
        </div>
        <div class="arrow">
          <font-awesome-icon :icon="['fas', 'arrow-right']"/>
        </div>
        <div class="box">
          <img src="@/assets/thinking.png" alt="thinking" style="height: 180px"/>
          <div>久しぶりになんか作って出てみるか！<br/>でも何を作ろう</div>
        </div>
        <div class="arrow">
          <font-awesome-icon :icon="['fas', 'arrow-right']"/>
        </div>
        <div class="box">
          <img src="@/assets/to_poin.png" alt="to_poin" style="height: 180px"/>
          <div>発表といえばプレゼン、<br/>プレゼンといえば<b>ポインター！</b></div>
        </div>
        <div class="arrow">
          <font-awesome-icon :icon="['fas', 'arrow-right']"/>
        </div>
        <div class="box">
          <img src="@/assets/hand.png" alt="hand" style="height: 180px"/>
          <div>ポインターをどうやって動かす？<br/>手の動きに連動させれば映えるかな？</div>
        </div>
        <div class="arrow">
          <font-awesome-icon :icon="['fas', 'arrow-right']"/>
        </div>
        <div class="box">
          <img src="@/assets/pipe.png" alt="pipe" style="height: 180px"/>
          <div><a @click="openModal">mediapipe</a>ってのがあるけど
            <br/>C++だしライブラリとして使えるわけじゃない</div>
        </div>
        <div class="arrow">
          <font-awesome-icon :icon="['fas', 'arrow-right']"/>
        </div>
        <div class="box">
          <img src="@/assets/senju_kannon.png" alt="senju_kannon" style="height: 200px"/>
          <div><b>簡単に手とか顔とかの検出ができて、<br/>検出データで遊べるものを作ろう！</b></div>
        </div>

      </div>
    </div>

    <modal
        :click-to-close="true"
        name="mediapipe-modal"
        :scrollable="true"
        height="80%"
        width="90%">
      <div class="box mediapipe-modal-wrapper">
        <p class="title is-4">
          <a href="https://mediapipe.dev/">MediaPipe</a>
          &emsp; - &emsp;
          <a href="https://github.com/google/mediapipe">google/mediapipe</a>
        </p>
        <iframe class="mediapipe-iframe" src="https://mediapipe.dev/" />
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  name: "Motivation",
  methods: {
    openModal() {
      this.$modal.show('mediapipe-modal');
    },
  }
}
</script>

<style lang="scss" scoped>
@import "/node_modules/bulma/bulma.sass";
@import "../assets/panel";

#motivation {
  margin: 64px auto;

  .motivation-list {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .box {
    text-align: center;
  }

  .arrow {
    font-size: 2em;
    margin: 100px 16px;
  }
}

.mediapipe-modal-wrapper {
  height: 100%;
  .mediapipe-iframe {
    width: 100%;
    height: 90%;
  }
}
</style>