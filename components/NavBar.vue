<template>
  <div class="container">
    <div class="nav">
      <nav>
        <NuxtLink to="/"> Home </NuxtLink>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  align-items: center;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-end;
  height: 60px;
  text-decoration: none;
}

.nav a {
  color: #cd853f;
  display: inline-block;
  font-weight: 700;
  font-size: 16px;
  margin: 0 10px;
  text-decoration: none;

  &:hover,
  &:focus {
    color: #b47535;
  }
}
</style>
