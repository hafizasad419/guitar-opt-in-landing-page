import 'dotenv/config'

export const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
export const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX
export const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID

export const CLIENT_URL = "https://guitar-opt-in-landing-page.vercel.app"
export const PORT = 5000
export const NODE_ENV = process.env.NODE_ENV