import { spawn } from 'child_process'
import lastfm from './lastfm'
import inquirer from 'inquirer'

const KEY = ''
const RETRIES = 3
const PIRATEBAY = 'https://thepiratebay.org'

lastfm.setAPIKey(KEY)

async function main() { // eslint-disable-line
  let tracks = await searchTrack(process.argv[2], process.argv[3])
  let track

  if (!tracks || !tracks.length) {
    console.log('No tracks found! :(')

    return
  }

  do {
    let selection = await inquirer.prompt({
      type: 'list',
      message: 'Select track',
      name: 'track',
      choices: tracks.map(t => ({
        name: `${t.artist} - ${t.name}`,
        value: t,
      })),
    })

    if (!selection.track) return

    track = await getTrack(selection.track)

    // For some reason, lastfm sometimes does not return
    // an album, but repeated requests do? wat?
    let tries = RETRIES // eslint-disable-line
    while (track.album === undefined && tries--) {
      track = await getTrack(selection.track)
    }
    if (track.album === undefined) {
      console.log(`No album found for "${track.artist.name} - ${track.name}"`)
      return // eslint-disable-line
    }
  } while (track.album === undefined)

  console.log(`Album Artist: ${track.album.artist}`)
  console.log(`Album title: ${track.album.title}`)

  let args = [
    `${PIRATEBAY}/search/${encodeURIComponent(track.album.title)}/0/99/100`,
  ]

  spawn('firefox', args, { detached: true })
}

function searchTrack(track, artist) {
  return lastfm.Track.search({ track, artist })
    .then(res => res.results.trackmatches.track)
}

function getTrack(track) {
  if (!track.mbid) {
    return lastfm.Track.getInfo({ track: track.name, artist: track.artist })
      .then(res => res.track)
  }

  return lastfm.Track.getInfo({ mbid: track.mbid })
    .then(res => res.track)
    .catch(() =>
      getTrack({ name: track.name, artist: track.artist })
    )
}

main()
  .then(() => void 0, console.error)
