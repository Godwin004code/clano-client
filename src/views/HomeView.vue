<template>
    <div>
       <landing-nav />
    <section>
        <div class="flex justify-between w-[90%] mx-auto mt-9 md:flex-col">
            <div class="mt-10 w-[40%] md:w-[100%] md:text-center">
                <h2 class="text-2xl font-semibold mb-2">Make use of our services conveniently</h2>
                <p class="w-[70%]  text-xl md:w-[100%]">Buy data, pay TV subscriptions and buy airtime at any time and at any place.
                    Buy data, pay TV subscriptions and buy airtime at any time and at any place.
                </p>
                
            </div>
            <div class="w-[40%] md:w-[90%] md:mx-auto md:mt-5">
                <img :src="img2" class="w-[100%]" alt="hero one">
            </div>
            
        </div>
        <div class="flex justify-between w-[90%] mx-auto mt-9 md:flex-col">
            <div class="w-[40%] md:w-[90%] md:mx-auto md:mt-5">
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


export default {
    data() {
        return {
            img1,
            img2,
            img3
        };
    },
    components: { Footer1, LandingNav }
}
</script>