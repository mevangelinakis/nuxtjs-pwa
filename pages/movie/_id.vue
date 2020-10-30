<template>
  <section class="container">
    <div class="back-wrap">
      <NuxtLink :to="`/search/${$route.query.term}`" class="back-wrap__link">
        &larr; Back
      </NuxtLink>
    </div>
    <div class="movie">
      <div class="movie__img">
        <img :src="movie.Poster" :alt="`${movie.Title} Poster`" />
      </div>
      <div class="movie__info">
        <h1 class="movie__title">
          {{ movie.Title }}
          <h2 class="movie__subtitle">{{ movie.Year }}</h2>
        </h1>
        <div class="movie__general">
          <span class="movie__general-entry">{{ movie.Rated }}</span>
          <span class="movie__general-entry">{{ movie.Released }}</span>
          <span class="movie__general-entry">{{ movie.Runtime }}</span>
        </div>
        <div class="movie__details">
          <div class="movie__details-entry">
            <h3 class="movie__details-entry-title">Genre</h3>
            {{ movie.Genre }}
          </div>
          <div class="movie__details-entry">
            <h3 class="movie__details-entry-title">Director</h3>
            {{ movie.Director }}
          </div>
          <div class="movie__details-entry">
            <h3 class="movie__details-entry-title">Writers</h3>
            {{ movie.Writer }}
          </div>
          <div class="movie__details-entry">
            <h3 class="movie__details-entry-title">Actors</h3>
            {{ movie.Actors }}
          </div>
          <div class="movie__details-entry">
            <h3 class="movie__details-entry-title">Plot</h3>
            {{ movie.Plot }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from "@/api";

export default {
  async asyncData({ params }) {
    const response = await api.getMovie(params.id);

    const movie = response.data;

    return {
      movie,
    };
  },
};
</script>

<style lang="scss" scoped>
.back-wrap {
  margin-bottom: 20px;

  &__link {
    color: #cd853f;
    font-weight: 700;
    font-size: 16px;
    margin: 0 10px;
    text-decoration: none;

    &:hover,
    &:focus {
      color: #b47535;
    }
  }
}

.movie {
  display: flex;

  &__img {
    flex: 0 0 auto;

    img {
      height: auto;
      width: 100%;
    }
  }

  &__info {
    flex: 1 1 auto;
    padding-left: 20px;
  }

  &__title {
    font-size: 36px;
    margin-bottom: 10px;
  }

  &__subtitle {
    background-color: #a8cac3;
    border-radius: 4px;
    display: inline-block;
    font-size: 18px;
    margin-left: 15px;
    padding: 5px;
  }

  &__general {
    align-items: center;
    color: #757575;
    display: flex;
    margin-bottom: 50px;

    &-entry {
      &:not(:last-child)::after {
        content: "|";
        display: inline-block;
        margin: 0 10px;
      }
    }
  }

  &__details {
    &-entry {
      margin-bottom: 20px;
      &-title {
        font-size: 16px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
