import { createApp } from 'vue'
import App from './App.vue'
import shell from 'vue-shell'
import "v-network-graph/lib/style.css"
import VNetworkGraph from "v-network-graph"

const app = createApp(App).mount('#app')
app.use(shell)
app.use(VNetworkGraph)