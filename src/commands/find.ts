import {Command} from '@oclif/core'

import YtWhisper from './yt-whisper'
import Transcription from '../transcription'

import fs = require('fs')
import readline = require('readline')

export default class Find extends Command {
  static description = 'find search terms within the video, separated by commas'

  static examples = [
    '<%= config.bin %> <%= command.id %> "https://www.youtube.com/watch?v=dQw4w9WgXcQ" "up, give, you, gonna, never"',
  ]

  static args = [{name: 'url', required: true}, {name: 'terms', required: true}]

  searchTerms: Array<string> = []

  public async run(): Promise<void> {
    const {args} = await this.parse(Find)

    const searchTerms = args.terms.split(',').map((s: string) => s.trim())
    const transcription = await YtWhisper.run(['--url', args.url])

    await this.processTranscription(transcription, searchTerms)
  }

  public async processTranscription(transcription: Transcription, searchTerms: Array<string>):Promise<void> {
    const fileStream = fs.createReadStream(transcription.filePath)

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Number.POSITIVE_INFINITY,
    })

    const searchTermRegex = new RegExp(searchTerms.join('|'), 'gmi')

    let previousValue = ''

    for await (const line of rl) {
      let m

      while ((m = searchTermRegex.exec(line)) !== null) {
        if (m.index === searchTermRegex.lastIndex) {
          searchTermRegex.lastIndex++
        }

        for (const [, match] of m.entries()) {
          // We found a match, parse and convert timestamp to seconds
          const timeStampInSeconds = transcription.convertTimestampToSeconds(
            // eslint-disable-next-line comma-dangle
            transcription.parseTimestamp(previousValue)
          )

          console.log(`Found: "${match}" \n${transcription.generateUrlWithTimestamp(timeStampInSeconds)}\n`)
        }
      }

      // Due to format of data, the thing we care about is always on the previous line
      previousValue = line
    }
  }
}
