import type { App, Plugin } from 'vue'

const plugin: Plugin = {
    install: (app: App) => {
        app.component('')
    }
}

export default plugin