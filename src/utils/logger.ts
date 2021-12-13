import logger from 'pino'

const log = logger({
  prettyPrint: true,
  base: {
    pid: false
  },
  timestamp: () => `, time: ${new Date().toISOString()}`
})

export default log
