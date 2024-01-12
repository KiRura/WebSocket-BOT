import { Collection } from 'discord.js'
import { readdirSync } from 'fs'
import { Logger } from 'tslog'
const logger = new Logger({ hideLogPositionForProduction: true })

export default {
  async execute () {
    const eventCommands = new Collection()
    const eventFiles = readdirSync('./event').filter(eventFileName => eventFileName.endsWith('.js'))
    for (const eventFileName of eventFiles) {
      try {
        const eventCommand = (await import(`../event/${eventFileName}`)).default
        eventCommands.set(eventCommand.name, eventCommand)
        logger.info(`Loaded ${eventFileName}`)
      } catch (error) {
        logger.error(`Cannot load ${eventFileName}`)
        console.error(error)
      }
    }

    return eventCommands
  }
}
