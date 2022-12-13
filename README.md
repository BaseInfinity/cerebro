# Cerebro

Allows you to search youtube videos given a search term to generate exact URL's to the timestamp in the Youtube video


## Installation

This repository uses `youtube-dl` and [OpenAI's Whisper](https://openai.com/blog/whisper) to generate subtitle files for any youtube video.

To get started, you'll need Python 3.7 or newer. Install the binary by running the following command:

    pip install git+https://github.com/m1guelpf/yt-whisper.git

You'll also need to install [`ffmpeg`](https://ffmpeg.org/), which is available from most package managers:

```bash
# on Ubuntu or Debian
sudo apt update && sudo apt install ffmpeg

# on MacOS using Homebrew (https://brew.sh/)
brew install ffmpeg

# on Windows using Chocolatey (https://chocolatey.org/)
choco install ffmpeg
```

Now that WhisperAI is installed, lets install other packages and generate a distro build

```bash
npm install
npm run build
```

## Usage
```bash
./bin/run find "https://www.youtube.com/watch?v=T6ppSe33SmA" "new, diablo, help"
```

Example Output:
```js
Found: "Diablo"
https://www.youtube.com/watch?v=T6ppSe33SmA&t=7s

Found: "new"
https://www.youtube.com/watch?v=T6ppSe33SmA&t=64s

Found: "new"
https://www.youtube.com/watch?v=T6ppSe33SmA&t=64s

Found: "new"
https://www.youtube.com/watch?v=T6ppSe33SmA&t=72s

Found: "new"
https://www.youtube.com/watch?v=T6ppSe33SmA&t=77s

Found: "help"
https://www.youtube.com/watch?v=T6ppSe33SmA&t=505s

Found: "help"
https://www.youtube.com/watch?v=T6ppSe33SmA&t=602s

```

## Important
* Be sure to use quotes around your CLI arguments
* Initial downloads and transcriptions will be slow, but you can repeat the command again with diff search inputs and it will be blazingly fast
