import { app } from './app'
import { ENV } from './env'


app.listen(ENV.PORT, () => { console.log('server is up!') })