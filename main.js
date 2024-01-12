import { WebSocket, fetch } from 'undici'
import { config } from 'dotenv'
import { Logger } from 'tslog'
import data from './data.js'
import loadEventFiles from './start/load-event-files.js'
import login from './start/login.js'
config()

const logger = new Logger({ hideLogPositionForProduction: true })
logger.info('Loaded modules')

const eventCommands = await loadEventFiles.execute()

logger.info('Fetching ws...')
const fetchWs = await (await fetch('https://discordapp.com/api/gateway/bot', {
  method: 'GET',
  headers: {
    Authorization: data.token
  }
})).json()
const wsUrl = fetchWs.url + '?v=10&encoding=json'
logger.info('Success')

logger.info('Connecting ws...')
const con = new WebSocket(wsUrl)
con.addEventListener('message', async result => {
  const resultData = JSON.parse(result.data)
  if (resultData.op === 11) return
  console.log(resultData)

  if (resultData.op === 10) { // 接続成功 => トークンを投げる
    return login.execute(con, fetchWs, resultData)
  }

  if (resultData.t) {
    const eventCommand = eventCommands.get(resultData.t)
    if (!eventCommand) return logger.warn(`Not found! ${resultData.t}`)
    try {
      await eventCommand.execute(resultData)
    } catch (error) {
      logger.error('Event error')
      console.error(error)
    }
  }
})
