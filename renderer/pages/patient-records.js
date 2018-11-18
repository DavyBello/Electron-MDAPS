import React from 'react'

import PatientRecords from '../components/patientRecords/index'
import withApp from '../components/withApp'

import db from '../data/db'
// import patients from '../data/patients.js'

class PatientRecordsPage extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      open: false,
      patients: []
    }
  }

  async componentWillMount(){
    const patients = await db.patients.find({});
    this.setState({ patients })
  }

  render() {
    return (
      <PatientRecords patients={this.state.patients}/>
    )
  }
}

export default withApp(PatientRecordsPage)
