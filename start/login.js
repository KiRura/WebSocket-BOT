import { ActivityType, GatewayIntentBits } from 'discord.js'
import { Logger } from 'tslog'

const logger = new Logger({ hideLogPositionForProduction: true })

export default {
  execute (con, fetchWs, resultData) {
    logger.info('Connected')

    con.send(JSON.stringify({
      op: 2,
      d: {
        token: process.env.DISCORD_TOKEN,
        properties: {
          os: 'Windows',
          browser: 'node.js undici',
          device: 'node.js undici'
        },
        presence: {
          activities: [{
            name: 'Connecting with Websocket',
            type: ActivityType.Playing
          }],
          status: 'online',
          afk: false
        },
        shards: [0, fetchWs.shards],
        intents: GatewayIntentBits.Guilds
      }
    }))
    logger.info('Success to login')

    setInterval(() => {
      con.send(JSON.stringify({ op: 1, d: null }))
    }, resultData.d.heartbeat_interval)
  }
}
