// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    googleFonts: {
        download: true,
        families: {
            Roboto: true,
        }
    },
    devtools: {enabled: false},
    css: ["~/assets/css/main.scss", "~/assets/css/light-mode.scss", "~/assets/css/dark-mode.scss"],
    modules: ['@nuxtjs/color-mode', '@nuxtjs/google-fonts', 'nuxt-icon', '@pinia/nuxt'],
    nitro: {
        experimental: {
            database: true
        },
        database: {
            default: {
                connector: 'postgresql',
                options: {
                    user: "admin",
                    password: "admin",
                    host: "localhost",
                    database: "simpleexpense",
                    port: 5432,

                }
            }
        }
    }
})
