import axios from 'axios'

export const state = () => ({
  loadedPosts: [],
})

export const getters = {
  loadedPosts: (state) => state.loadedPosts,
}

export const mutations = {
  setPosts(state, posts) {
    state.loadedPosts = posts
  },
}

export const actions = {
  nuxtServerInit(vuexContext, context) {
    return axios
      .get('https://newapp-73d23.firebaseio.com/posts.json')
      .then((res) => {
        const postsArray = []
        for (const key in res.data) {
          postsArray.push({ ...res.data[key], id: key })
        }
        vuexContext.commit('setPosts', postsArray)
      })
      .catch((e) => context.error(e))
  },
  setPosts(vuexContext) {
    vuexContext.commit('setPosts')
  },
}
