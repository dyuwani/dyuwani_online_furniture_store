import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import BlogPostUnique from './views/blog-post-unique'
import Cart from './views/cart'
import BlogPostChic from './views/blog-post-chic'
import SignUp from './views/sign-up'
import Home from './views/home'
import BlogPostNature from './views/blog-post-nature'
import Login from './views/login'
import Desks from './views/desks'
import Lookbooks from './views/lookbooks'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={BlogPostUnique} exact path="/blog-post-unique" />
        <Route component={Cart} exact path="/cart" />
        <Route component={BlogPostChic} exact path="/blog-post-chic" />
        <Route component={SignUp} exact path="/sign-up" />
        <Route component={Home} exact path="/" />
        <Route component={BlogPostNature} exact path="/blog-post-chic1" />
        <Route component={Login} exact path="/login" />
        <Route component={Desks} exact path="/desks" />
        <Route component={Lookbooks} exact path="/lookbooks" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
