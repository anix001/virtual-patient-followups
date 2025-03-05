import dotenv from 'dotenv'

//[Load environment from .env files]
dotenv.config()

interface Config {
    port: number
    databaseUrl: string
    // allowedOrigins: string[]
}

const config: Config = {
    port: parseInt(process.env.PORT as string) || 8000,
    databaseUrl: process.env.DATABASE_URL as string,
    // allowedOrigins : process.env.ALLOWED_ORIGINS?.split(',') || []
}

export default config
