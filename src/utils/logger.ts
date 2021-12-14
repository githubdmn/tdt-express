import logger from 'pino'

export default logger({
  prettyPrint: true,
  base: {
    pid: false
  },
  timestamp: () => `, time: ${new Date().toISOString()}`
})
