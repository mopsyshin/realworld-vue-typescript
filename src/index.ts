import Vue from 'vue'
import RealWorld from './RealWorld.vue'
import router from './router/router'
import index from './store'


new Vue({
  el: "#app",
  template: `
    <div>
        <real-world/>  
    </div>
    `,
  data: {
    name: 'World'
  },
  components: {
    RealWorld
  },
  router,
  store: index
})
