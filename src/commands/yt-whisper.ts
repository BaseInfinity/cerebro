import {Command, Flags} from '@oclif/core'
import fs = require('fs')
import Transcription from '../transcription'
import {execSync} from 'node:child_process'

export default class YtWhisper extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    url: Flags.string({required: true}),
  }

  public async run(): Promise<void | any> {
    const {flags} = await this.parse(YtWhisper)
    const youtubeId = this.getYoutubeId(flags.url)

    const transcriptionsPath = 'transcriptions'
    const outputDir = `${transcriptionsPath}/${youtubeId}`

    // Always ensure transcriptions directory exists
    if (!fs.existsSync(transcriptionsPath)) {
      fs.mkdirSync(transcriptionsPath)
    }

    // Ignore if directory exists already
    if (!fs.existsSync(outputDir)) {
      execSync(`yt_whisper ${flags.url} --output_dir ${outputDir}`, {stdio: 'inherit'})
    }

    // Round-about way to get the file name...
    const fileName = fs.readdirSync(outputDir)[0]

    return new Transcription(youtubeId, flags.url, fileName, `${outputDir}/${fileName}`)
  }

  private getYoutubeId(url: string): string {
    // Strip the YouTube ID
    const regex = /watch\?v=(\w+)/gm

    const str = url
    let m

    if ((m = regex.exec(str)) !== null) {
      return m[1]
    }

    return ''
  }
}
