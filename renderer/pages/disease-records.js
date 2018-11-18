import React from 'react'

import DiseaseRecords from '../components/diseaseRecords/index'
import withApp from '../components/withApp'

import db from '../data/db'
// import symptoms from '../data/symptoms.js'
// import diseases from '../data/diseases.js'

class DiseaseRecordsPage extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      open: false,
      symptoms: [],
      diseases: [],
    }
  }

  async componentWillMount() {
    const symptoms = await db.symptoms.find({});
    const diseases = await db.diseases.find({});
    this.setState({ symptoms, diseases })
  }

  render() {
    return (
      <DiseaseRecords
        symptoms={this.state.symptoms}
        diseases={this.state.diseases}
      />
    )
  }
}

export default withApp(DiseaseRecordsPage)
