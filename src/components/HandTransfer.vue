<template>
  <div>
    <div class="url-wrapper">
      <label>
        <input v-model="url" v-bind:disabled="this.stream" style="width: 300px; font-size: large;">
      </label>
      <button @click="connect" style="margin: 4px 12px; font-size: large">{{ this.stream == null ? "Connect" : "Disconnect" }}</button>
    </div>
    <canvas id="canvas" width="400" height="300"></canvas>
  </div>
</template>

<script>
const {HandTrackingPullRequest} = require("../proto/qoin/proto/hand_tracking_pb");
const {HandTrackingClient} = require("../proto/qoin/proto/hand_tracking_grpc_web_pb");
import * as THREE from "three";

export default {
  name: "HandTransfer",
  data() {
    const scene = new THREE.Scene();
    const renderer = null;
    const camera = new THREE.PerspectiveCamera(50, 4 / 3);
    const light = new THREE.DirectionalLight(0xffffff);
    const material = new THREE.LineBasicMaterial();
    const lines = new THREE.Group();
    return {
      url: 'http://gdh.hayashikun.com:3000',
      stream: null,
      connection: [
        0, 1, 1, 2, 2, 3, 3, 4,
        0, 5, 5, 6, 6, 7, 7, 8,
        5, 9, 9, 10, 10, 11, 11, 12,
        9, 13, 13, 14, 14, 15, 15, 16,
        13, 17,
        0, 17, 17, 18, 18, 19, 19, 20
      ],
      scene, renderer, camera, light, material, lines
    }
  },
  mounted() {
    const $canvas = document.getElementById("canvas");
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: $canvas
    });

    this.camera.position.set(0, 0, 0.8);
    this.light.position.set(0, 0, 1);
    this.scene.add(this.lines);
    this.scene.add(this.light);
  },
  methods: {
    connect() {
      if (this.stream != null) {
        this.stream.cancel();
        this.stream = null;
        return;
      }
      let client = new HandTrackingClient(this.url, null, null);
      const request = new HandTrackingPullRequest();
      this.stream = client.handTrackingPullStream(request, {});
      let self = this;
      this.stream.on('data', function (response) {
        for (let i = 0; i < self.lines.children.length; i++) {
          self.lines.remove(self.lines.children[i]);
        }
        const landmarks = response.getLandmarkList().getLandmarkList();
        for (let i = 0; i < self.connection.length / 2; ++i) {
          const geometry = new THREE.Geometry();
          let ls = landmarks[self.connection[i * 2]];
          let le = landmarks[self.connection[i * 2 + 1]];
          geometry.vertices.push(
              new THREE.Vector3(ls.getX() - 0.5, -ls.getY() + 0.5, ls.getZ() - 0.5),
              new THREE.Vector3(le.getX() - 0.5, -le.getY() + 0.5, le.getZ() - 0.5),
          );
          const line = new THREE.Line(geometry, self.material);
          self.lines.add(line);
        }
        self.renderer.render(self.scene, self.camera);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "/node_modules/bulma/bulma.sass";

.url-wrapper {
  label {
    margin: 0 8px;
  }
}

#canvas {
  margin: 4px;
}
</style>
