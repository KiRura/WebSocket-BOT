import data from './data.js'
import { writeFileSync } from 'fs'

export default {
  async send (channelId, type, message) {
    return await (await fetch(`${data.discordApi}channels/${channelId}/${type}`, {
      method: 'POST',
      headers: {
        Authorization: data.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    })).json()
  },
  username (username, discriminator) {
    return `${username}${discriminator ? `#${discriminator}` : ''}`
  },
  writeFile (path, data) {
    writeFileSync(path, Buffer.from(JSON.stringify(data)))
  }
}
