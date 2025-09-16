<script setup lang="ts">
import { Button } from '@/shared/ui/button';
</script>

<template>
  <div class="h-screen w-screen" :class="$style.root">
    <div class="max-w-lg mx-auto pt-30">
      <h2 class="bg-orange-500 px-2 py-1 rounded-lg mb-4">что написано в сурре 4 аяте 24?</h2>
      <div class="grid grid-cols-2 gap-2">
        <Button>можно убивать людей</Button>
        <Button>можно насиловать женщин</Button>
        <Button>можно насиловать мужщин</Button>
        <Button>можно насиловать раба</Button>
      </div>
    </div>
  </div>
</template>

<style module>
.root {
	background: url('@/views/assets/bg.png') no-repeat center center fixed;
	background-size: cover;
}
</style>
