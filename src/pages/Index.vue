<template>
  <q-page class="column items-center justify-center">
    <div class="text-h2 q-mb-xl">MIMIC III clinical dataset visualization</div>
    <div class="text-h4 q-mb-xl">
      <i>Presented by <span class="my-colored-name">Ward Driesen</span></i>
    </div>
    <div class="row full-width items-center justify-center q-mt-lg">
      <q-img class="my-frontpage-logo q-mr-xl" :src="image('imec_logo.png')" />
      <q-img class="my-frontpage-logo q-ml-xl" :src="image('MIMIC_logo.jpg')" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  setup() {},
  methods: {
    image(image) {
      return require(`../statics/images/${image}`);
    },
  },
});
</script>

<style scoped>
.my-frontpage-logo {
  width: 300px;
}
.my-colored-name {
  color: #3f98bd;
}
</style>
