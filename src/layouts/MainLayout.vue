<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal class="header_normal">
      <q-toolbar>
        <q-btn
          @click="leftDrawerOpen = !leftDrawerOpen"
          flat
          round
          dense
          icon="menu"
          class="q-mr-sm"
        />

        <q-toolbar-title>MIMIC III Visualization</q-toolbar-title>
        <q-space />
        <q-img class="my-imec-logo" :src="image('imec_logo.png')" />
      </q-toolbar>
    </q-header>

    <q-drawer
      class="left-navigation text-white myDrawer"
      show-if-above
      v-model="leftDrawerOpen"
      style="
        background-image: url(https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg);
        background-size: cover;
      "
      side="left"
      elevated
    >
      <div class="full-height drawer_normal">
        <div style="height: calc(100% - 117px); padding: 10px">
          <q-toolbar>
            <q-avatar>
              <q-img class="my-imec-logo" :src="image('me.png')" />
            </q-avatar>
            <q-toolbar-title>Ward Driesen</q-toolbar-title>
          </q-toolbar>
          <hr />
          <q-scroll-area style="height: 100%">
            <q-list padding>
              <q-item
                active-class="tab-active"
                to="/"
                exact
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="dashboard" />
                </q-item-section>

                <q-item-section> Home </q-item-section>
              </q-item>

              <q-item
                active-class="tab-active"
                to="/visualizeBar"
                exact
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="space_dashboard" />
                </q-item-section>

                <q-item-section> Grouped </q-item-section>
              </q-item>

              <q-item
                active-class="tab-active"
                to="/visualizeScatter"
                exact
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="grid_view" />
                </q-item-section>

                <q-item-section> Individual </q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
    };
  },
  methods: {
    image(image) {
      return require(`../statics/images/${image}`);
    },
  },
});
</script>

<style scoped>
.drawer_normal {
  background-color: rgba(1, 1, 1, 0.75);
}

.navigation-item {
  border-radius: 5px;
}

.tab-active {
  background-color: #3f98bd;
}

body {
  background: #f1f1f1 !important;
}

.header_normal {
  background: #3f98bd;
}

.my-imec-logo {
  width: 100px;
}
</style>
