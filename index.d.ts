// index.d.ts
import { Auth as NuxtAuth } from '@nuxtjs/auth-next'
import { UserProfile } from './models/UserProfile'
import { INotify } from './plugins/notify'

declare module 'vue/types/vue' {
  interface Auth extends NuxtAuth {
    user: UserProfile & typeof NuxtAuth.prototype.user
  }
}

declare module '@nuxt/types' {
  interface Auth extends NuxtAuth {
    user: UserProfile & typeof NuxtAuth.prototype.user
  }
}

declare module 'vuex/types/index' {
  interface Auth extends NuxtAuth {
    user: UserProfile & typeof NuxtAuth.prototype.user
  }
}

declare module '@nuxt/types' {
  interface Context {
    $notify: INotify
  }
}
declare module 'vue/types/vue' {
  interface Vue {
    $notify: INotify
  }
}
