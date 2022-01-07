import { Middleware } from '@nuxt/types'

const middleware: Middleware = (context) => {
  // Use context
  if (context.$auth.loggedIn) {
    context.redirect(302, '/panel')
  }
}

export default middleware
