export default class Transcription {
  youtubeId: string
  youtubeUrl: string
  fileName: string
  filePath: string

  constructor(youtubeId: string, youtubeUrl: string, fileName: string, filePath:string) {
    this.youtubeId = youtubeId
    this.youtubeUrl = youtubeUrl
    this.fileName = fileName
    this.filePath = filePath
  }

  public convertTimestampToSeconds(timeStamp: string): number {
    let [hours, minutes, seconds] = timeStamp.split(':')

    // If seconds is undefined, then we are dealing with a video less than 1 hour and have to massage it into a full Timestamp
    // Example: MM:SS -> HH:MM:SS
    if (seconds === undefined) {
      seconds = minutes
      minutes = hours
      hours = '00'
    }

    // Convert to seconds
    return (Number(hours) * 60 * 60) + (Number(minutes) * 60) + Number(seconds.slice(0, 2))
  }

  public parseTimestamp(line: string): string {
    // We strip only the first timestamp in parens
    // Format Example: (12:02.320) --> 12:07.640
    const regex = /(\d+.+) --/gm

    let m

    // Boilerplate regex code
    while ((m = regex.exec(line)) !== null) {
      if (m.index === regex.lastIndex) {
        regex.lastIndex++
      }

      // eslint-disable-next-line no-unreachable-loop
      for (const [, match] of m.entries()) {
        // Bail early
        return match
      }
    }

    return ''
  }

  public generateUrlWithTimestamp(timeStampInSeconds: number): string {
    return `${this.youtubeUrl}&t=${timeStampInSeconds}s`
  }
}
