<template>
  <v-row class="d-flex flex-column justify-center align-center justify-center text-center">
    <template v-if="error.statusCode === 404">
      <v-col cols="12" lg="6" md="7" xl="5" sm="10">
        <v-img src="/images/404.svg" />
        <p class="my-5 primary--text">
          متاسفانه صفحه مورد نظر یافت نشد…
        </p>
      </v-col>
    </template>

    <div v-else>
      <h1>
        {{ otherError }}
        <br>
      </h1>
      <p>
        {{ error.message }}
      </p>
    </div>
    <v-btn large color="primary" href="/">
      برگشت به صفحه اصلی
    </v-btn>
  </v-row>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
