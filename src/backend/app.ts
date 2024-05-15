import express from "@src/backend/lib/express"
const routes = require( './http/routes/routes' )
export const app = express()


app.use( express.json() )
app.use( '/api', routes )

