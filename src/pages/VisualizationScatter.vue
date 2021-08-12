<template>
  <q-page class="q-pa-md column justify-center items-center">
    <div v-if="error" class="my-error-wrapper q-mb-xl">
      <div>An error occured, try again later.</div>
    </div>
    <scatter-chart :allData="allData"></scatter-chart>
  </q-page>
</template>

<script>
import api from "../service/ApiService";
import ScatterChart from "../components/ScatterChart.vue";

export default {
  name: "VisualizationBar",
  components: { ScatterChart },
  data() {
    return {
      allData: undefined,
      error: false,
    };
  },
  created() {
    api
      .fetchIndividualResults()
      .then((response) => {
        this.allData = response.data;
      })
      .catch((err) => {
        this.error = true;
      });
  },
};
</script>

<style></style>
