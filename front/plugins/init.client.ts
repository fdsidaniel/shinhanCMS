import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
//import AOS from 'aos'
//import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
  })
  nuxtApp.vueApp.use(vuetify)
  const router = useRouter()
  $fx.setRouter(router)
  if (typeof window !== 'undefined') {
    // nuxtApp.AOS = AOS.init({
    //   //duration: 1200,
    // })

    return {
      //provide: { AOS },
    }
  }
})
