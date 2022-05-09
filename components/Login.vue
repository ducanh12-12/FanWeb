<template>
  <div class="shadow-lg">
    <form @submit.prevent="handleLogin">
      <h1 class="text-[1.4rem] text-[#333] font-[500]">Đăng Nhập</h1>
      <div class="flex flex-col mt-2">
        <label class="text-[1.2rem] font-[500] ml-2 text-[#f88db4]"
          >Tên Đăng Nhập:</label
        >
        <input
          class="justify-center mx-[auto] mt-2 rounded-sm w-[220px] text-[1.2rem] border-[#333] border-[1px] hover:border-[#f88db4]"
          type="text"
          placeholder="vd:Nguyễn Văn A"
        />
        <span :class="status ? 'done' : 'error'">Tài khoản không tồn tại</span>
      </div>
      <div class="flex flex-col mt-2">
        <label class="text-[1.2rem] ml-2 font-[500] text-[#f88db4]"
          >Mật khẩu:</label
        >
        <input
          class="justify-center mx-[auto] mt-2 rounded-sm w-[220px] text-[1.2rem] border-[#333] border-[1px] hover:border-[#f88db4]"
          type="text"
          placeholder="Nhập mật khẩu vào đây"
        />
        <span :class="status ? 'done' : 'error'">Mật khẩu không đúng</span>
      </div>
      <div class="items-center text-center">
        <button
          class="px-8 py-4 mt-2 mb-5 mx-[auto] rounded-lg text-base font-medium border-1px border-[#999] bg-[#FFC5DA]"
        >
          Đăng nhập
        </button>
      </div>
    </form>
    <button @click="handleHidden">Bạn chưa có tài khoản</button>
  </div>
</template>

<script>
export default {
  name: 'LoginFan',
  data() {
    return {
      status: true,
    }
  },
  methods: {
    handleHidden() {
      this.$emit('hidden-cart')
    },
    handleLogin() {},
  },
}
</script>
<style scoped>
.done {
  visibility: hidden;
}

.error {
  visibility: inherit;
  color: red;
}
</style>
