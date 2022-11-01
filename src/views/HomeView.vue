<template>
    <div>
       <landing-nav />
    <section>
        <div class="flex justify-between w-[90%] mx-auto mt-9 md:flex-col">
            <div class="mt-10 w-[40%] md:w-[80%] md:mx-auto md:text-center">
                <h2 class="text-2xl font-semibold mb-2 md:text-center">Make use of our services conveniently</h2>
                <p class="w-[70%]  md:text-base text-xl md:w-[100%]">Buy data, pay TV subscriptions and buy airtime at any time and at any place.
                    Buy data, pay TV subscriptions and buy airtime at any time and at any place.
                </p>
                
            </div>
            <div class="w-[40%] md:w-[90%] md:mx-auto md:mt-5">
                <img :src="img2" class="w-[100%]" alt="hero one">
            </div>
            
        </div>
        <div class="flex justify-between w-[90%] mx-auto mt-9 md:flex-col">
            <div class="w-[40%] md:w-[80%] md:mx-auto md:mt-5">
                <img class="w-[100%]" :src="img1" alt="hero two">
            </div>
            <div class="w-[40%] mt-10 md:w-[100%] md:text-center">
                <h2 class="text-2xl font-semibold mb-2">Secure your money for free and get rewards
</h2>
<p class="w-[50%] text-xl md:w-[100%]">
    Get the most secure payment app ever and enjoy it.
</p>
            </div>
        </div>
        <div class="flex justify-between w-[90%] mx-auto my-20 md:flex-col">
            <div class="w-[40%] mt-10 md:w-[100%] md:text-center">
                <h2 class="text-2xl font-semibold mb-2">Enjoy commission-free stock trading</h2>
                <p class="w-[50%] text-xl md:w-[100%]">Online investing has never been easier than it is right now</p>
            </div>
            <div class="w-[40%] md:w-[90%] md:mx-auto md:mt-5">
                <img class="w-[100%]" :src="img3" alt="hero three">
            </div>
            
        </div>
        <div class="flex  w-[90%] mx-auto md:flex-col">
            <div class="w-[50%] md:w-[90%] md:mx-auto">
                <img :src="img4" alt="newsletter hero">
            </div>
            <div class="w-[40%] mt-20 md:mt-0 md:w-[90%] md:mx-auto">
                <h2 class="text-3xl font-bold mt-10 text-[#252B42]">Join Us!</h2>
                <p class="font-normal my-4 mt-10 text-[#858C94]">
Subscribe to our newsletter and get free network cheat codes into your inbox, updates on lower subscription plans and new updates from clano.
                </p>
                <div class="mt-20 md:my-5 w-[100%]">
                    <input type="email" placeholder="Your Email" class="py-2 border-[1px] border-[#d0d0d0] px-2 w-[70%] sm:w-[64%] rounded-tl-md rounded-bl-md">
                    <span class="bg-[#916bbf] text-white py-2 px-2 rounded-tr-md rounded-br-md border-[1.6px] border-[#916bbf] cursor-pointer">Subscribe</span>
                </div>
            </div>
        </div>
    </section>
    <Footer1 />
</div>
</template>

<script>
import img1 from '../assets/Safety Box 1.png'
import img2 from '../assets/Saving 1.png'
import img3 from '../assets/Trading 1.png'
import Footer1 from '../components/Footer/Footer.vue'
import LandingNav from '../components/Nav/Nav.vue'
import img4 from '../assets/Frame 11.png'


export default {
    data() {
        return {
            img1,
            img2,
            img3,
            img4
        };
    },
    components: { Footer1, LandingNav }
}
</script>