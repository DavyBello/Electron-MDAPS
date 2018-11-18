import React from 'react'

import Diagnosis from '../components/diagnosis/index'
import withApp from '../components/withApp'

import db from '../data/db'
import symptoms from '../data/symptoms.js'
// import patients from '../data/patients.js'

import performDiagnosis from './lib/performDiagnosis'

class DiagnosisPage extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      open: false,
      symptoms: symptoms,
      patients: [],
      results : {
        perfectFits : [],
        overFits : [],
        underFits : []
      }
    }
  }

  async componentWillMount() {
    const symptoms = await db.symptoms.find({});
    const patients = await db.patients.find({});
    this.setState({ symptoms, patients })
  }

  doDiagnosis = (symptomsArray) => {
    let results = performDiagnosis(symptomsArray)
    console.log('results');
    console.log(results);
    this.setState({results: results});
  }

  render() {
    //let symptomsArray = ['2','5','6','8','11','12']

    return (
      <Diagnosis
        diagnosis={this.state.results}
        doDiagnosis={this.doDiagnosis}
        symptoms={this.state.symptoms}
        patients={this.state.patients}/>
    )
  }
}

export default withApp(DiagnosisPage)
