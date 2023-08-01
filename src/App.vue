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
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialogbottom-transition">
      <search />
    </v-dialog>
  </v-app>
</template>

<script>
import CHeader from '@/components/CHeader.vue'
import CFooter from '@/components/CFooter.vue'
import CSideBar from '@/components/CSideBar.vue'
import CAlert from '@/components/CAlert.vue'
import Search from '../src/views/SearchView.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "App",
  components: {
    CHeader,
    CFooter,
    CSideBar,
    CAlert,
    Search,
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
