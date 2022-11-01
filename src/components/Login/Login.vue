<template>
    <section class="flex w-[100%] h-[100vh] md:h-[100%]">
       <div class="side-pic px-6 md:hidden">
        <h2>clano</h2>
        <p class="font-semibold text-3xl text-white my-5 pl-10">
            Welcome back to Clano
        </p>
        <p class="font-semibold text-3xl text-white pl-12 mb-4">Log In Now!</p>
        <div class="w-[100%] h-[60%]">
            <img :src="img1" class="h-[100%]" alt="side container">
        </div>
       </div>
       <div class="w-[40%] mx-auto md:w-[100%] side-acc md:px-5">
        <h2 class="text-3xl font-semibold text-center mt-9 md:text-white hidden md:block"> Welcome back!</h2>
        <h2 class="text-3xl font-semibold text-center md:mt-2 mt-9  md:text-white">Login</h2>
        <div class="mb-5">
            <label for="email" class="text-lg font-normal md:text-white">Email</label>
            <input type="email" placeholder="abc@gmail.com" class="border-[1px] border-[#d0d0d0] rounded-lg block w-[100%] px-2 py-2 md:py-3 md:rounded-[5px]">
        </div>
        <div class="mb-5">
            <label for="pwd" class="text-lg font-normal md:text-white">Password</label>
            <input type="password" placeholder="Enter Your Password" class="border-[1px] border-[#d0d0d0] rounded-lg block w-[100%] px-2 py-2 md:py-3 md:rounded-[5px]">
        </div>
       
        <button class="bg-[#916bbf] w-[100%] py-2 text-white rounded-lg mt-10 md:bg-white md:text-[#916bbf]" @click="handleLogin">
           Login
        </button>
        <div class="text-center md:text-white mt-3">
            You dont't have an account? <span class="md:text-black text-[#916bbf]">
                <router-link to="/register">Register here</router-link>
            </span>
        </div>
       </div>       
    </section>
</template>
<script>
import img1 from '../../assets/side-picture.png'
export default {
    data() {
        return {
            img1
        }
    },
    methods: {
        handleLogin() {
            window.location.pathname = '/dashboard'
        }
    }
}
</script>