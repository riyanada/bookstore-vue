import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.lightGreen.base, // #E53935
                secondary: colors.lightGreen.accent4, // #FFCDD2
                accent: colors.lightGreen.lighten2, // #3F51B5
            },
        },
    },
});
