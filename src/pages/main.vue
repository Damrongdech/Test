<template>
  <div class="container" style="text-align: center">
    <h1>Portfolio</h1>
    <p>---------------------------------------</p>
    <div>
      <router-link :to="{ name: 'profile' }">View My [ Profile ]</router-link>
    </div>
    <div>
      <router-link :to="{ name: 'contact' }">View My [ Contact ]</router-link>
    </div>
    <p>---------------------------------------</p>
  </div>
</template>