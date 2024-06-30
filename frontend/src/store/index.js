import { fetchUserFromToken } from '~/utils/auth';

export const state = () => ({
  user: null,
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
};

export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    // Check for user token and set user in store
    const token = req.headers.cookie?.split('=')[1];
    if (token) {
      const user = await fetchUserFromToken(token);
      commit('setUser', user);
    }
  },
};
