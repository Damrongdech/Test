<template>
  <div class="container" style="text-align: center">
    <div style="text-align: left">
      <router-link :to="{ name: 'main' }">กลับหน้าแรก</router-link>
    </div>
    <h1>Portfolio</h1>
    <h2>Profile</h2>
    <p>---------------------------------------</p>
    <img src="@/assets/profile.png" />
    <p>ชื่อ : {{ name }} {{ lname }}</p>
    <p>ชื่อเล่น : {{ nname }}</p>
    <p>อายุ : {{ age }}</p>
    <p>น้ำหนัก : {{ weight }}</p>
    <p>ส่วนสูง : {{ height }}</p>
    <p>ทักษะ : {{ skill }}</p>
  </div>
  <div style="text-align: right">
    <router-link :to="{ name: 'contact' }">ไปที่หน้า [ Contact ]</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "ดำรงเดช",
      lname: "โชคพานิชศิริ",
      nname: "บุ๊ค",
      age: "20",
      weight: "60",
      height: "170",
      skill: "Java, C#, mySQL, MATLAB, OpenCV-Python, R(rstudio)",
    };
  },
};
</script>