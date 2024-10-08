import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/games',
    name: 'Games',
    component: loadPage('GamesPage')
  },
  {
    path: '/games/:gameId',
    name: 'GameDetails',
    component: loadPage('GameDetailsPage')
  },
  {
    path: '/review/create/:gameId',
    name: 'CreateReview',
    component: loadPage('CreateReviewPage'),
  },
  {
    path: '/review/:reviewId',
    name: 'ReviewDetails',
    component: loadPage('ReviewDetailsPage')
  },
  {
    path: '/profile/:profileId',
    name: 'Profile',
    component: loadPage('ProfileDetailsPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
