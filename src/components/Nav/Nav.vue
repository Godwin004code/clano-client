<template>
  
  <section class="w-[90%] mx-auto my-4 flex justify-between">
    <h2>clano</h2>
    <nav>
      <ul class="flex justify-between">
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li class="mx-20">
          <router-link to="/register">Register</router-link>
        </li>
        <li>
          <router-link to="/guides">Guide</router-link>
        </li>
      </ul>
    </nav>
    <button class="bg-[#4960F9] px-3 text-white py-2 rounded-md ">Get Started</button>
  </section>
</template>