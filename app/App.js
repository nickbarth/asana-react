import React from 'react'
import ReactDom from 'react-dom'
import {Router} from 'react-router'
import Routes from './config/routes'

ReactDom.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
);
