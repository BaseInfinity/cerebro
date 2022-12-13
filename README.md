# Cerebro

Simple CLI that allows you to search youtube videos given a search term and generates an exact Youtube URL with timestamp in the Youtube video


## Installation

#### Whisper-AI

This repository uses `youtube-dl` and [OpenAI's Whisper](https://openai.com/blog/whisper) to generate subtitle files for any youtube video.

To get started, you'll need `Python 3.7` or newer. Install the binary by running the following command:

    sudo -H pip install git+https://github.com/m1guelpf/yt-whisper.git

If after this you cannot run the `yt_whisper` globally from the CLI, then add the directory path that `pip` installs packages to your `~/.bash_profile` or `~/.bashrc`:

```
export PATH="~/.local/bin:$PATH"
```

Close your terminal to start a new session and account for these new changes.

#### ffmpeg

You'll also need to install [`ffmpeg`](https://ffmpeg.org/), which is available from most package managers:

```bash
# on Ubuntu or Debian
sudo apt update && sudo apt install ffmpeg

# on MacOS using Homebrew (https://brew.sh/)
brew install ffmpeg

# on Windows using Chocolatey (https://chocolatey.org/)
choco install ffmpeg
```

#### Node
You will also need to install Node: `>=14.0.0`

#### Cerebro
Now that WhisperAI is installed, lets install other packages and generate a distro build

```bash
# If you haven't cloned the repo and aren't at root directory yet....
gh repo clone BaseInfinity/cerebro && cd cerebro

npm install && npm run build
```

## Usage
```bash
./bin/run find "https://www.youtube.com/watch?v=dQw4w9WgXcQ" "up, give, you, gonna, never"
```

## Example Output:
```bash
./bin/run find "https://www.youtube.com/watch?v=dQw4w9WgXcQ" "up, give, you, gonna, never"
[youtube] dQw4w9WgXcQ: Downloading webpage
[youtube] dQw4w9WgXcQ: Downloading android player API JSON
[info] dQw4w9WgXcQ: Downloading 1 format(s): 251
[download] Destination: /var/folders/m4/wmggw2n90qq12py32x4790gh0000gn/T/dQw4w9WgXcQ.webm
[download] 100% of    3.28MiB in 00:00:00 at 8.13MiB/s
[ExtractAudio] Destination: /var/folders/m4/wmggw2n90qq12py32x4790gh0000gn/T/dQw4w9WgXcQ.mp3
Deleting original file /var/folders/m4/wmggw2n90qq12py32x4790gh0000gn/T/dQw4w9WgXcQ.webm (pass -k to keep)
Downloaded video "Rick Astley - Never Gonna Give You Up (Official Music Video)". Generating subtitles...
Detected language: English
100%|███████████████████████████████████████████████████████████████████████████████████████████████████████21204/21204 
[01:23<00:00, 252.80frames/s]
Saved VTT to /Users/stefanayala/cerebro/transcriptions/dQw4w9WgXcQ/Rick_Astley___Never_Gonna_Give_You_Up__Official_Music_Video.vtt
Found: "You"
https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=22s

Found: "You"
https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=30s

Found: "you"
https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=34s

Found: "you"
https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=39s

Found: "Never"
https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=42s

Found: "gonna"
https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=42s

```

## Important
* Be sure to use quotes around your CLI arguments
* Initial downloads and transcriptions will be slow, but you can repeat the command again with diff search inputs and it will be blazingly fast

## Shoutouts
This couldn't have been done without the awesome CLI made by https://github.com/m1guelpf/yt-whisper and OpenAI's underlying Whisper tech. 

My contribution is just a glorified abuse of regex =)
