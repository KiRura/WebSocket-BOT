// import { EmbedBuilder } from 'discord.js'
// import f from '../functions.js'
// import data from '../data.js'
import { Logger } from 'tslog'

const logger = new Logger({ hideLogPositionForProduction: true })

export default {
  name: 'READY',
  async execute (resultData) {
    // const channel = '1146562994688503999'
    // console.log(await f.send(channel, 'messages', {
    //   embeds: [new EmbedBuilder()
    //     .setTitle(`${f.username(resultData.d.user.username, resultData.d.user.discriminator)}はWebSocket経由で起動しました。`)
    //     .setDescription(`導入数: ${resultData.d.guilds.length}`)
    //     .setColor(data.greenColor)
    //     .toJSON()
    //   ]
    // }))

    logger.info(`${resultData.d.user.username}${resultData.d.user.discriminator ? `#${resultData.d.user.discriminator}` : ''} ALL READY`)
  }
}
