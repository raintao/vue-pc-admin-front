let allEnv = {
    'development': './dev',
    'sit': './sit',
    'production': './deploy'
}
let env = allEnv[process.env.NODE_ENV]
let config = require(`${env}`).default
export default config
