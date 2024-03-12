export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    // handle error, e.g. report to a service
  }

  // Also possible
  nuxtApp.hook('vue:error', (error, instance, info) => {
    // handle error, e.g. report to a service
  })
  nuxtApp.hook('app:mounted', (vueApp) => {
    setTimeout(() => { 
        const inputs = document.querySelectorAll('input'); 
        inputs.forEach(input => { 
            input.setAttribute('autocomplete', 'off'); 
        // 여기서 input 태그에 대한 추가적인 로직을 수행할 수 있습니다.
        });
    }, 1000);
    // handle error, e.g. report to a service
  })
  
})