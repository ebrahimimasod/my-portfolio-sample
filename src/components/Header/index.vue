<template>
  <header class="header">
    <div class="container">
      <div class="header-logo-container">
        <h1 class="header-logo">Portfolio</h1>
      </div>
      <div class="header-nav-container">
        <NavLinks />
      </div>
    </div>
  </header>
</template>

<script>
import NavLinks from "../NavLinks";
export default {
  name: "Header",
  components: {
    NavLinks,
  },
};
</script>

<style >
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9;
}

.header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header .header-logo {
  color: var(--base-color);
}

.header .header-nav-container .nav-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.header .header-nav-container .nav-container .item .link-item {
  color: #000;
  font-weight: bold;
  padding: 12px 35px;
  border-radius: 50px;
}

.header .header-nav-container .nav-container .item .link-item.active {
  color: var(--base-color);
  background-color: var(--theme-color);
  font-weight: normal;
}
</style>