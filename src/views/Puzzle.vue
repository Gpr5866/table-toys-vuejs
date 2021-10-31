<template>
    <div class="puzzle">
        <p-application :backgroundColor="0x1099bb" :width="800" :height="600" @ticker="ticker" :enableTicker="true">
      <p-container
        :interactive="true"
        :rotation="rotation"
        :x="350"
        :y="250"
      >
        <p-sprite
          v-for="n in 10"
          :key="n"
          :src="require('../assets/sprite.png')"
          :x="((n - 1) % 5) * 20"
          :y="Math.floor((n - 1) / 5) * 20"
          :anchorX="0.2"
          :anchorY="0.2"
        />
      </p-container>
    </p-application>
    </div>
</template>

<script>
import { PApplication, PContainer, PSprite } from "vue-pixi-wrapper";

export default {
  components: {
    PApplication,
    PContainer,
    PSprite
  },
  data() {
    return {
      rotation: 0
    };
  },
  methods: {
    ticker(delta) {
      this.rotation -= 0.01 * delta;
    }
  }
};
</script>

<style scoped>
.puzzle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    font-size: 40px;
    color: rgb(167, 167, 167);
    font-weight: 600;
}
</style>