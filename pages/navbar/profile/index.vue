<template>
    <div>
        <div class="items-center text-center flex justify-center ">
            <img src="../../../assets/1.jpg" class="w-[500px]" alt="">
        </div>
        <div class="text-center flex flex-col items-center">
            <p class="font-bold  text-[1.6rem] ">Information</p>
            <span class="decoration-inherit w-[700px]">Nguyễn Minh Hằng sinh ngày 7 tháng 12 năm 1988 tại Hà Nội, là tiểu thư trong một gia đình có gia thế. Năm 13 tuổi cô sang Đức cùng gia đình khi bố mẹ làm việc trong Đại sứ quán Việt Nam tại Đức.[1] Hơn 9 năm học tập tại Đức, tốt nghiệp European University Viadrina[2], Min có 2 năm làm việc ở Red Bridge TV & Film production Đức và Vindragon JSC trong vai trò chuyên viên sản xuất phim và thiết kế đồ họa.[3] Nghệ danh MIN sau này lúc cô hoạt động nghệ thuật cũng lấy ý tưởng từ chính tên bạn bè ở Đức hay gọi vì không phát âm được Nguyễn hay Hằng (chữ Minh đọc lơ lớ thành Min)...(Và là tình yêu của em nữa)</span>
        </div>
        <div class="text-center flex flex-col items-center">
            <h2 class="font-bold text-[1.6rem]">FanClub</h2>
            <p v-for="member in nameMember" :key="member">{{member}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:"ProfileMyLove",
        data() {
            return {
            }
        },
        computed: {
            nameMember() { 
                    return this.$store.state.user.map((member) => member.name)
            },
        }
    }
</script>