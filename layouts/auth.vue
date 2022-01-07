<template>
  <v-app>
    <v-container class="fill-height">
      <v-row class="d-flex flex-column" align="center" justify="center">
        <v-col cols="auto" class="mb-0 mb-md-3 mb-lg-5">
          <nuxt-link :to="{name: 'index'}">
            <Logo width="220" />
          </nuxt-link>
        </v-col>
        <v-col cols="12" xl="3" lg="4" md="5" sm="8">
          <nuxt />
        </v-col>
        <v-col
          cols="12"
          xl="3"
          lg="4"
          md="5"
          sm="8"
          class="d-flex flex-row justify-lg-space-between align-center mt-0 mt-md-3 mt-lg-5"
        >
          <span class="subtitle-2 grey--text">
            تلک‌پلت را درشبکه های اجتماعی دنبال کنید!
          </span>
          <v-btn icon color="">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn icon color="">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn icon color="">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>

<style>
</style>
