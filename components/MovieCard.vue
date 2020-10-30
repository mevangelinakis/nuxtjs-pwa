<template>
  <div class="card">
    <div class="card__img">
      <img :src="movie.Poster" :alt="`${movie.Title} Poster`" />
    </div>
    <h2 class="card__title">
      <NuxtLink :to="link" class="card__link"
        >{{ movie.Title }} ({{ movie.Year }})</NuxtLink
      >
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },

    term: {
      type: String,
      required: true,
    },
  },

  computed: {
    link() {
      return {
        path: `/movie/${this.movie.imdbID}`,
        query: {
          term: this.term,
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #a8cac3;
  border: 2px solid #a8cac3;
  border-radius: 22px 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 20px;
  max-width: 300px;
  position: relative;

  &__img {
    flex: 0 0 100%;

    img {
      border-top-left-radius: 22px;
      border-top-right-radius: 4px;
      height: auto;
      width: 100%;
    }
  }

  &__title {
    font-size: 18px;
    padding: 20px;
  }

  &__link {
    color: #000;
    text-decoration: none;

    &::after {
      bottom: 0;
      content: "";
      left: 0;
      pointer-events: auto;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;
    }
  }

  &:hover,
  &:focus {
    background-color: #8daaa4;
    border-color: #8daaa4;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);

    .card__link {
      color: #000;
    }
  }
}
</style>