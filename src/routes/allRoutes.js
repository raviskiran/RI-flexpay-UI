import React from 'react'
import { Redirect } from 'react-router-dom'

//Pages
import PagesStarter from '../pages/Utility/pages-starter'
import PagesMaintenance from '../pages/Utility/pages-maintenance'
import PagesComingsoon from '../pages/Utility/pages-comingsoon'
import PagesTimeline from '../pages/Utility/pages-timeline'
import PagesFaqs from '../pages/Utility/pages-faqs'
import PagesPricing from '../pages/Utility/pages-pricing'
import Pages404 from '../pages/Utility/pages-404'
import Pages500 from '../pages/Utility/pages-500'
import PagesInvoice from '../pages/Utility/invoice'

// Authentication related pages
import Login from '../pages/Authentication/Login'
import Logout from '../pages/Authentication/Logout'
import Register from '../pages/Authentication/Register'
import ForgetPwd from '../pages/Authentication/ForgetPassword'

//  // Inner Authentication
import Login1 from '../pages/AuthenticationInner/Login'
import Register1 from '../pages/AuthenticationInner/Register'
import Recoverpw from '../pages/AuthenticationInner/Recoverpw'
import LockScreen from '../pages/AuthenticationInner/auth-lock-screen'

// Profile
import UserProfile from '../pages/Authentication/user-profile'

import CustomerList from '../pages/CustomerList/index'
import ProfileUsers from '../pages/ProfileUsers/index'
import ImportCards from '../pages/ImportCards/index'
import CreateCardHolder from '../pages/CreateCardHolder/index'
import Cards from '../pages/Cards/index'
import CardHoldersList from '../pages/CardHoldersList/index'
import UsersList from '../pages/UsersList/index'
import CreateUser from '../pages/CreateUser/index'

const userRoutes = [
  // //profile
  { path: '/profile', component: UserProfile },

  { path: '/customer-list', component: CustomerList },
  { path: '/users-list', component: UsersList },

  { path: '/new/profile-users', component: ProfileUsers },
  { path: '/import-cards', component: ImportCards },
  { path: '/cards', component: Cards },
  { path: '/card-holders-list', component: CardHoldersList },

  { path: '/create-card-holder/:id', component: CreateCardHolder },
  { path: '/create-card-holder', component: CreateCardHolder },

  { path: '/create-user', component: CreateUser },

  // this route should be at the end of all other routes
  { path: '/', exact: true, component: () => <Redirect to="/users-list" /> }
]

const authRoutes = [
  { path: '/logout', component: Logout },
  { path: '/login', component: Login },
  { path: '/forgot-password', component: ForgetPwd },
  { path: '/register', component: Register },

  { path: '/pages-maintenance', component: PagesMaintenance },
  { path: '/pages-comingsoon', component: PagesComingsoon },
  { path: '/pages-404', component: Pages404 },
  { path: '/pages-500', component: Pages500 },

  // Authentication Inner
  { path: '/pages-login', component: Login1 },
  { path: '/pages-register', component: Register1 },
  { path: '/page-recoverpw', component: Recoverpw },
  { path: '/auth-lock-screen', component: LockScreen }
]

export { userRoutes, authRoutes }
