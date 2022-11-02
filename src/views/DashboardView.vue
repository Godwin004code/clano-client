<template>
    <section class="w-[100%] bg-[#F5F6FA] h-[100%]">
        <section class="bg-[#916bbf] w-[100%] mx-auto rounded-bl-[60px] rounded-br-[60px] py-4 px-12 sm:px-8">
            <header class="flex justify-between">
                <div>clano</div>
            <div>
                <div class="fas fa-user text-2xl text-white"></div>
            </div>
            </header>
            <h2 class="text-white font-bold text-4xl my-5">Welcome <span>John</span></h2>
            <h2 class="text-white pb-5">You are always connected when you're with us.</h2>
        </section>
        <section class="w-[90%] mx-auto mt-4 flex md:flex-col">
            <div class="bg-[#9631A7] py-7 px-5 text-white w-[33%] md:w-[95%] rounded-tl-md rounded-bl-md md:mx-auto md:mb-4 md:rounded-md">
                <div class="text-2xl font-medium flex justify-between">
                    <h2>Your Balance</h2>
                    <h2 class="bg-[#F67BF9] rounded-[50%] px-3 py-1">&#8358;</h2>
                </div>
                <h2 class="my-4 text-2xl">1,999</h2>
                <h2 class="underline">
                    <router-link to="/">Fund wallet</router-link>
                </h2>
            </div> 
            <div class="bg-[#A27430] py-7 px-5 text-white w-[33%] md:w-[95%] md:mx-auto md:mb-4 md:rounded-md">
                <h2 class="text-2xl font-medium">Buy Data</h2>
                <ul>
                    <li>Airtel</li>
                    <li>MTN</li>
                    <li>Glo</li>
                </ul>
            </div>
            <div class="bg-[#31A78B] py-7 px-5 text-white w-[33%] md:w-[95%] rounded-tr-md rounded-br-md md:mx-auto md:mb-4 md:rounded-md">
                <h2 class="text-2xl font-medium">Pay Bills</h2>
                <h2 class="text-white bg-[#AEEBE3] w-[30%] text-sm text-center rounded-lg">coming soon</h2>
            </div>
        </section>
        <section class="shadow-md py-4 w-[90%] mx-auto mt-5 px-3 mb-3">
            <h2 class="text-3xl mb-3">How to fund your wallet</h2>
            <p>
                You can deposit or transfer fund into your clano account number to get credited instantly. You can pay any amount through any means e.g POS, ATM, Mobile App transfer to your clano account and you get credited immediately.
            </p>
            <h2>Go to your <span class="text-[##916bbf] underline">
                <router-link to="/">Profile</router-link>
            </span> for your unique account details </h2>
        </section>
    </section>
</template>
<script>
</script>