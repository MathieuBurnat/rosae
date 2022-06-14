<template>
  <div v-if="!store.keypair">
    <p class="text-xl">Authentification</p>

    <div
      tabindex="0"
      class="max-w-xs my-4 border collapse collapse-plus border-base-300 bg-base-100 rounded-box"
    >
      <div class="text-xl font-medium collapse-title">
        <span> Keypair information </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </div>
      <div class="collapse-content">
        <p>
          When an entity uses the API as the seller or provider role, it needs
          to provide a public and private key.
        </p>
        <p class="my-4">
          The API does't store the private key, it only stores the public key.
          This information will be use to certify the action.
        </p>
        <p class="my-4">
          Note : Create an action with a private key doesn't mean beeing
          certified, to certified your actions you need contact our support.
        </p>
      </div>
    </div>

    <div class="mb-4">
      <label
        class="block mb-2 text-sm font-bold text-gray-700"
        for="Public Key"
      >
        Public Key
      </label>
      <input
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="publicKey"
        type="text"
        placeholder="public key"
        v-model="publicKey"
      />
    </div>

    <div class="mb-4">
      <label
        class="block mb-2 text-sm font-bold text-gray-700"
        for="Private Key"
      >
        Private Key
      </label>
      <input
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="privateKey"
        type="text"
        placeholder="private key"
        v-model="privateKey"
      />
    </div>
    <button class="btn btn-xs btn-primary" @click="saveKeypair">
      I want to save this key pair temporarily
    </button>
  </div>
  <div v-else>
    <button class="btn btn-xs btn-outline btn-error" @click="resetKeypair">
      Reset my key pair
    </button>
  </div>
  <div class="divider"></div>
</template>

<script>
import { store } from "./session.js";

export default {
  data() {
    return {
      publicKey: "",
      privateKey: "",
      store,
    };
  },
  methods: {
    async getKeypair() {
      // If keypair is temporarily stored in the store, we use it
      if (store.keypair) {
        return store.keypair;
      } else {
        // Else we get the keypair from this component
        const keypair = {
          publicKey: this.publicKey,
          privateKey: this.privateKey,
        };
        return keypair;
      }
    },
    // Save keypair temporarily
    async saveKeypair() {
      const keypair = {
        publicKey: this.publicKey,
        privateKey: this.privateKey,
      };
      store.setKeypair(keypair);
    },
    // Reset keypair
    async resetKeypair() {
      // Userfriendly action
      this.publicKey = store.keypair.publicKey;
      this.privateKey = store.keypair.privateKey;

      // Reset temporary keypair
      store.resetKeypair();
    },
  },
};
</script>
