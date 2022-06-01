<template>
  <div v-if="status == 'READY_TO_USE'">
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        color="green"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
  </div>
  <div v-if="status == 'UNDER_REPAIR'">🛠️</div>
  <div v-if="status == 'OUT'">💀</div>
</template>

<script>
export default {
    props: ["status"],
}
</script>
