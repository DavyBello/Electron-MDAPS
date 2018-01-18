import React from 'react'
import Head from 'next/head'
import {MuiThemeProvider, getMuiTheme, grey500} from 'material-ui/styles'

import Main from './main'

export default function withApp(Child) {
  class WrappedComponent extends React.Component {    
    render() {
      return (
        <MuiThemeProvider muiTheme={getMuiTheme({
          palette: {
            canvasColor: grey500
          }
        })}>
          <Main>
            <Head>
              <meta charSet="utf-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
              <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"/>

              <title>
                MEDICAL DIAGNOSIS AND THERAPY SYSTEM
              </title>
            </Head>
            <Child/>
          </Main>
        </MuiThemeProvider>
      )
    }
  }

  return WrappedComponent
}
