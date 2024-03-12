import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// import { VDataTable } from 'vuetify/labs/VDataTable'
//import draggable from 'vuedraggable'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
  })
  nuxtApp.vueApp.use(vuetify)
  //nuxtApp.vueApp.component('draggable', draggable)
  // nuxtApp.vueApp.component('VDataTable', VDataTable)
  nuxtApp.vueApp.config.globalProperties.$utils = $utils
  nuxtApp.vueApp.config.globalProperties.$fx = $fx
  const router = useRouter()
  $fx.setRouter(router)
})
