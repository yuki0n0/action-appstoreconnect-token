const jwt = require('jsonwebtoken')
const core = require('@actions/core')

const keyId = process.env.INPUT_KEY_ID
const issuerId = process.env.INPUT_ISSUER_ID
const key = process.env.INPUT_KEY

const payload = { iss: issuerId, aud: 'appstoreconnect-v1', exp: Math.floor(Date.now() / 1000) + 20 * 60 }
const signedToken = jwt.sign(payload, key, { algorithm: 'ES256', keyid: keyId })

core.setOutput('token', signedToken)
