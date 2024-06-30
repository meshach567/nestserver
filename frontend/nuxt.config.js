export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
  },
  modules: ['@nuxt/apollo'],
  router: {
    middleware: ['admin'],
    extendRoutes(routes, resolve) {
        routes.push({
          name: 'places',
          path: '/places',
          component: resolve(__dirname, 'pages/places.vue'),
        },{
            name: 'place-details',
            path: '/places/:id',
            component: resolve(__dirname, 'pages/places/[id].vue'),

        });
    },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:4000/graphql' // Update this with your backend API URL
      },
    },
  },
});