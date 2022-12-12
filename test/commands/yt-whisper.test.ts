import {expect, test} from '@oclif/test'

describe('yt-whisper', () => {
  test
  .stdout()
  .command(['yt-whisper'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['yt-whisper', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
