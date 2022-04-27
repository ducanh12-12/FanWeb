<template>
    <div class="shadow-lg">
    <form @submit.prevent="hanldeRegister" >
            <h1 class="text-[1.6rem] font-[500] text-[#333] text-center">Đăng kí</h1>
            <div class="flex flex-col ">
                <label>Họ và Tên Đăng Nhập:</label>
                <input v-model="name"  type="text" placeholder="vd:Nguyễn Văn A" />
                <span :class="inputName? 'done':'error'">Vui lòng nhập họ tên </span>
            </div>
             <div class="flex flex-col ">
                <label>Mật khẩu:</label>
                <input v-model="password" type="password" placeholder="Nhập mật khẩu vào đây" />
                <span :class="inputPassword? 'done':'error'">Vui lòng nhập password</span>
            </div>
            <div class="flex flex-col ">
                <label>Tuổi:</label>
                <input v-model="age" type="text" placeholder="vd:18" />
                <span :class="inputAge? 'done':'error'">Bé tí tuổi ranh học không lo học</span>
            </div>
            <div class="flex flex-col " >
                <p class="text-[1.0rem] font-[500] ">Bạn có phải là fan chị Min không?</p>
                <div class="text-left justify-start">
                <input 
                v-model="picked" 
                style="width:20px"
                class="inline"
                type="radio" 
                name="chooseone" 
                value="Yes"   >
                <label for="Yes">Có nha</label>
                </div>
                <div class="text-left justify-start">
                <input 
                v-model="picked" 
                style="width:20px"
                type="radio" 
                name="chooseone" 
                value="alittle"    >
                <label for="Maybe">Có xíu xíu thôi nha</label>
                </div>
                <div class="text-left justify-start">
                <input 
                v-model="picked"
                style="width:20px"
                type="radio"
                name="chooseone"  
                value="No"  >
                <label for="No">Không nha</label>
                </div>
                 <span :class="inputOption? 'done':'error'">Không hâm mộ thì lướt</span>
            </div>
            <div class="items-center text-center">
            <button class="px-8 py-4 mb-5 mx-[auto] rounded-lg text-base font-medium border-1px border-[#999] bg-[#FFC5DA]">Đăng kí</button>

            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name:"RegisterFan",
        data() {
            return {
            name:'',
            password:'',
            age:'',
            picked:'',
            inputName: true,
            inputPassword: true,
            inputAge:true,
            inputOption:true
            }
        },
        watch:{
            name(){
                this.inputName = true
            },
            password(){
                this.inputPassword = true
            },
            age(){
                this.inputAge = true
            },
            picked() {
                this.inputOption = true
            }
        },
        methods: {
            checkInput(){
                if (this.name === ''){
                    this.inputName = false
                }
                if (this.password === ''){
                    this.inputPassword = false
                }
                if (Number(this.age) < 18){
                    this.inputAge = false
                } 
                if ( this.picked === 'No' || this.picked === 'alittle' || this.picked === ""){
                    this.inputOption = false
                    this.picked = ''
                }
            },
            hanldeRegister () {
                this.checkInput()
                console.log(this.picked)
                if (this.inputName === true &&
                    this.inputPassword === true &&
                    this.inputAge === true &&
                    this.inputOption === true ){
                this.$store.commit('hanldeRegister',{name:this.name,password:this.password})
                this.picked = ''
                this.name = ''
                this.password = ''
                this.age = ''
                this.$emit("handle-show")
                    }
            }
        },
    }
</script>
<style scoped>
.done{
    visibility: hidden; }

.error{
    visibility: inherit;
    color: red;}

input{
    padding: 2px 5px;
    font-size: 1.0rem;
    color: black;
    border: 1px solid #333;
    width: 200px;
    margin: 0 auto;
    margin-top: 15px;
    border-radius: 4px;
}

input:focus{
    border: 1px solid #FFC5DA;
}

label {
    font-size: 1.2rem;
    font-weight: 500;
    color: #f88db4;
    margin-left: 20px
}
</style>