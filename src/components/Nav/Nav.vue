<template>
  
  <section class="w-[90%] mx-auto my-4 flex justify-between">
    <h2>clano</h2>
    <nav class="menu">
      <ul class="flex justify-between">
        <button class="hidden md:block" @click="closeNavMenu">
          X
        </button>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li class="mx-20 md:mx-0 md:my-9">
          <router-link to="/register">Register</router-link>
        </li>
        <li>
          <router-link to="/guides">Guide</router-link>
        </li>
      </ul>
    </nav>
    <button class="hidden md:block" @click="showNavMenu">Menu</button>
  </section>
</template>

<script>
export default {
  methods: {
    showNavMenu() {
      const menu = document.querySelector('.menu')
      menu.classList.add('active-nav')
    },
    closeNavMenu() {
      const menu = document.querySelector('.menu')
      menu.classList.remove('active-nav')
    }
  }
}
</script>