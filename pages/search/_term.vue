<template>
  <section class="container">
    <div class="row">
      <div v-for="movie in movies" :key="movie.imdbID" class="col">
        <MovieCard :movie="movie" :term="$route.params.term" />
      </div>
    </div>
  </section>
</template>

<script>
import api from "@/api";
import MovieCard from "@/components/MovieCard";

export default {
  components: {
    MovieCard,
  },

  async asyncData({ params }) {
    const response = await api.getMovies(params.term);

    const movies = response.data.Search;

    return {
      movies,
    };
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
}

.col {
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0 10px;

  @media (min-width: 576px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (min-width: 768px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  @media (min-width: 992px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
}
</style>
