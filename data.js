import { config } from 'dotenv'
config()

export default {
  mutaoColor: 16760703,
  greenColor: 9043849,
  redColor: 16744319,
  discordApi: 'https://discord.com/api/v10/',
  token: `Bot ${process.env.DISCORD_TOKEN}`
}
