import React from 'react'

import CreateDisease from '../components/createDisease/index'
import withApp from '../components/withApp'

import db from '../data/db'
// import symptoms from '../data/symptoms.js'

class CreateDiseasePage extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      open: false,
      symptoms: []
    }
  }
  
  async componentWillMount() {
    const symptoms = await db.symptoms.find({});
    this.setState({ symptoms })
  }

  render() {
    return (
      <CreateDisease symptoms={this.state.symptoms}/>
    )
  }
}

export default withApp(CreateDiseasePage)
