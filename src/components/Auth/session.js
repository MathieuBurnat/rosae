// store.js
import { reactive } from 'vue'

export const store = reactive({
    keypair: null,
    setKeypair(keypair) {
        console.log("temp save");
        this.keypair = keypair
        console.log(this.keypair);
    },
})