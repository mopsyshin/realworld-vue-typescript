import Vue from 'vue'
import Vuex from 'vuex'
import home from './home.module'
// import auth from './auth.module'
// import article from './article.module'
// import profile from './profile.module'

Vue.use(Vuex)

const index = new Vuex.Store({
    modules: {
        home,
    }
})

export default index;
