import base from './dev'

base.env = 'deploy'
base.api.host = 'http://test-deploy.com'

export default base
