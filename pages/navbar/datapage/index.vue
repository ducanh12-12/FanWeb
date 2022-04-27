<template>
    <div class="flex justify-center items-center">
        <login-fan v-if="!status" @hidden-cart="handleClick" class="w-[400px] min-h-[300px] px-2">Chưa có tài khoản?</login-fan>
        <RegisterFan v-if="status" @handle-show="() => !status" class="w-[400px] min-h-[100px] px-2" />
    </div>
</template>
<script>
import LoginFan from '../../../components/Login.vue'
import RegisterFan from '../../../components/Register.vue'
    export default {
        name:"DataPage",
        layout:"thumnail",
        components:{
            LoginFan,
            RegisterFan
        },
        data() {
            return {
                status: false
            }
        },
        methods: {
            handleClick(){
                this.status = true
            }
        },
    }
</script>