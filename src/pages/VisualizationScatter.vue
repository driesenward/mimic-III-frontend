<template>
  <q-page class="q-pa-md column justify-center items-center">
    <div v-if="error" class="my-error-wrapper q-mb-xl">
      <div>An error occured, try again later.</div>
    </div>
    <q-btn
      class="my-insert-button absolute-top-right q-ma-md"
      color="primary"
      label="Insert testdata"
      @click="mockData"
    />
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
  methods: {
    mockData() {
      let test = { male: [], female: [] };
      for (let i = 16; i < 100; i += 2) {
        test.male.push({
          age: i,
          occurrences: Math.floor(
            ((Math.floor(Math.random() * 10000) + i * 60) * i) / 10
          ),
        });
        test.female.push({
          age: i,
          occurrences: Math.floor(
            ((Math.floor(Math.random() * 10000) + i * 60) * i) / 10
          ),
        });
      }
      this.allData = test;
    },
  },
};
</script>

<style>
.my-insert-button {
  background: #3c3c3b !important;
}
</style>
