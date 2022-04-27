<template>
<div>
    <div class="flex flex-row justify-between bg-[#ffc5da]">
        <div class="flex items-center ml-10 ">
            <img class="w-10 h-10  rounded-full" src="../assets/logo.png" />
            </div>
        <div >
            <ul class="list-none text-[1.5rem] flex flex-row font-[400] text-center text-[black] ">
                <li class="mr-3 p-3 hover:bg-[#f98eb5] hover:text-[#333] delay-600  "> <nuxt-link to="/">Home</nuxt-link> </li>
                <li class="mr-3 p-3 hover:bg-[#f98eb5] hover:text-[#333]  delay-600  "> <nuxt-link to="../navbar/datapage">Data</nuxt-link> </li>
                <li class="mr-3 p-3 hover:bg-[#f98eb5] hover:text-[#333] delay-600  "> <nuxt-link to="../navbar/profile">Profile</nuxt-link> </li>
            </ul>
            
        </div>
    </div>
    <nuxt-child />
</div>
</template>

<script>
    export default {
        name:"NabarPage"
    }
</script>
