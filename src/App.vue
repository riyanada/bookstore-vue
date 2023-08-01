<style>
.v-toolbar {
  flex: 0 !important;
}

.v-application .py-3 {
  text-align: center !important;
}

.v-card__text {
  text-align: center !important;
}
</style>

<template>
  <v-app>
    <c-header />
    <c-side-bar />
    <c-content>
      <v-slide-y-transition mode="out-in">
        <router-view></router-view>
      </v-slide-y-transition>
    </c-content>
    <c-footer />
    <c-alert />
    <!-- <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialogbottom-transition">
      <search />
    </v-dialog> -->
    <keep-alive>
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialogbottom-transition">
        <component :is="currentComponent"></component>
      </v-dialog>
    </keep-alive>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CHeader from '@/components/CHeader.vue'
import CFooter from '@/components/CFooter.vue'
import CSideBar from '@/components/CSideBar.vue'
import CAlert from '@/components/CAlert.vue'
import Search from '@/views/SearchView.vue'
import Login from '@/views/LoginView.vue'
import Register from '@/views/RegisterView.vue'
import Cart from '@/views/CartView.vue'

export default {
  name: "App",
  components: {
    CHeader,
    CFooter,
    CSideBar,
    CAlert,
    Search,
    Login,
    Register,
    Cart,
  },
  methods: {
    ...mapActions({
      setStatusDialog: 'dialog/setStatus',
    })
  },
  computed: {
    ...mapGetters({
      statusDialog: 'dialog/status',
      currentComponent: 'dialog/component'
    }),
    dialog: {
      get() {
        return this.statusDialog
      },
      set(value) {
        this.setStatusDialog(value)
      }
    }
  }
};
</script>
