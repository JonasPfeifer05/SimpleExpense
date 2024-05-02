// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    googleFonts: {
        download: true,
        families: {
            Roboto: true,
        }
    },
    routeRules: {
        '/api/**': {
            proxy: { to: "backend:3001/api/**", },
        }
    },
    devtools: {enabled: false},
    css: ["~/assets/css/main.scss", "~/assets/css/light-mode.scss", "~/assets/css/dark-mode.scss"],
    modules: ['@nuxtjs/color-mode', '@nuxtjs/google-fonts', 'nuxt-icon', '@pinia/nuxt',"nuxt-security"],
})
