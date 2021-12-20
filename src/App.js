import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/home';
import Aboutus from './component/aboutus';
import { Route, Switch } from 'react-router-dom';
export default function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/aboutus' component={Aboutus} />
      </Switch>
    </>
  )
}

