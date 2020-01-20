import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import SearchBar from './Home/index'
import Publisher from './Publisher'
import Author from './Home/Authors'
import Login from './Login/index'
import NavBar from './containers/NavBar'

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>

        <NavBar />
        <div className="App">
          <Switch>

            <Route path="/publisher/:id">
              <Publisher />
            </Route>
            <Route path="/search">
              <SearchBar />
            </Route>
            <Route path="/authors">
              <Author />
            </Route>


            <Route path="/">
              <Login />
            </Route>


          </Switch>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App
