exports.webpack = config => Object.assign(config, {
  target: 'electron-renderer'
})

exports.exportPathMap = () => ({
  '/start': { page: '/start' },
  '/diagnosis': { page: '/diagnosis' },
  '/homepage': { page: '/homepage' },
  '/disease-records': { page: '/disease-records' },
  '/patient-records': { page: '/patient-records' },
  '/new-disease': { page: '/new-disease' },
  '/new-patient': { page: '/new-patient' }
})
