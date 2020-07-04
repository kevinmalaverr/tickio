import React, { Suspense, lazy } from 'react'
import './App.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { NotFound } from 'pages'

// import { Home} from 'pages'
// import {Login} from 'pages'
// import {LayoutDashboard} from 'components'

const Home = lazy(() => import('pages/Home/Home'))
const Login = lazy(() => import('pages/Login/Login'))
const LayoutDashboard  = lazy(() => import('components/LayoutDashboard/LayoutDashboard'))

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route path="/dashboard" component={LayoutDashboard}/>
        <Route exact path="/event/:id" component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </Suspense>
  </BrowserRouter>
)

export default App