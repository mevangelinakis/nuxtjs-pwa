<template>
  <section class="container">
    <form action="" class="search" @submit.prevent>
      <div class="search__wrap">
        <input
          v-model="term"
          name="term"
          placeholder="Search for a movie"
          class="search__input"
        />
        <button class="search__btn" @click="handleClick">SEARCH</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data: () => ({
    term: "",
  }),

  methods: {
    handleClick() {
      if (this.term.length) {
        this.$router.push({
          path: `/search/${this.term}`,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  margin: 0 auto;
  max-width: 600px;
  width: 100%;

  &__wrap {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
  }

  &__input {
    border-color: #a8cac3;
    border-radius: 22px 0 0 4px;
    border-style: solid;
    border-width: 2px 0 2px 2px;
    color: #292929;
    flex: 1 1 0%;
    font-size: 18px;
    height: 50px;
    padding: 0 20px;
    min-width: 0%;
  }

  &__btn {
    background-color: #a8cac3;
    border: 2px solid #a8cac3;
    border-radius: 0 4px 22px 0;
    color: #000;
    flex: 0 0 auto;
    font-weight: 700;
    font-size: 16px;
    height: 50px;
    padding: 0 30px;

    &:hover,
    &:focus {
      background-color: #8daaa4;
      border-color: #8daaa4;
      cursor: pointer;
    }
  }
}
</style>
