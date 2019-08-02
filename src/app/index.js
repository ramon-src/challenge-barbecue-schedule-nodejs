const app = require('./server')
const config = require('./config')

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`)
})
