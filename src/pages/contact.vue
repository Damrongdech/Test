<template>
  <div class="container" style="text-align: center">
    <div style="text-align: left">
      <router-link :to="{ name: 'main' }">กลับหน้าแรก</router-link>
    </div>
    <h1>Portfolio</h1>
    <h2>Contact</h2>
    <p>---------------------------------------</p>
    <img src="@/assets/QRC.png" />
    <p>อีเมล : {{ email }}</p>
    <p>เบอร์โทรติดต่อ : {{ phone }}</p>
  </div>

  <div style="text-align: right">
    <router-link :to="{ name: 'profile' }">ไปที่หน้า [ Profile ]</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "ch.damrongdech_st@tni.ac.th",
      phone: "092-889-7552",
    };
  },
};
</script>