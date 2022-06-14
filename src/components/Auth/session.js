// store.js
import { reactive } from 'vue'

export const store = reactive({
    keypair: null,
    setKeypair(keypair) {
        this.keypair = keypair
    },
    resetKeypair() {
        this.keypair = null
    },
})