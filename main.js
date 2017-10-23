import { spawn } from 'child_process'
import lastfm from './lastfm'
import inquirer from 'inquirer'

const KEY = 'f4f7103885c7cb573513d2583a0d5ea7'
const RETRIES = 3
const PIRATEBAY = 'https://thepiratebay.org'

lastfm.setAPIKey(KEY)

async function main() {
  let trackSearch

  main: for (;;) {
    trackSearch = await inquirer.prompt([
      {
        message: 'Track name',
        suffix: ':',
        name: 'title',
      },
      {
        message: 'Artist name',
        suffix: ' (optional):',
        name: 'artist',
      },
    ])

    let tracks = await searchTrack(trackSearch.title, trackSearch.artist)
    let track

    if (!tracks || !tracks.length) {
      console.log('No tracks found! :(')

      continue main
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

      if (!selection.track) continue main

      track = await getTrack(selection.track)

      // For some reason, lastfm sometimes does not return
      // an album, but repeated requests do? wat?
      let tries = RETRIES // eslint-disable-line
      while (track.album === undefined && tries--) {
        track = await getTrack(selection.track)
      }
      if (track.album === undefined) {
        console.log(
          `No album found for "${track.artist.name} - ${track.name}"`,
        )
        continue main
      }
    } while (track.album === undefined)

    console.log(`Album Artist: ${track.album.artist}`)
    console.log(`Album title: ${track.album.title}`)

    let searchString = [
      track.album.artist,
      track.album.artist !== track.album.title ? track.album.title : '',
    ]
      .map(s => s.trim())
      .map(s => s.replace(/[^\wäöüÄÖÜß\s]/gu, ''))
      .map(s => s.replace(/\s{1,}/g, ' '))
      .join(' ')
      .trim()

    let args = [
      `${PIRATEBAY}/search/${encodeURIComponent(searchString)}/0/99/100`,
    ]

    spawn('firefox', args, { detached: true })
  }
}

function searchTrack(track, artist) {
  return lastfm.Track
    .search({ track, artist })
    .then(res => res.results.trackmatches.track)
}

function getTrack(track) {
  if (!track.mbid) {
    return lastfm.Track
      .getInfo({ track: track.name, artist: track.artist })
      .then(res => res.track)
  }

  return lastfm.Track
    .getInfo({ mbid: track.mbid })
    .then(res => res.track)
    .catch(() => getTrack({ name: track.name, artist: track.artist }))
}

main().then(() => void 0, console.error)
