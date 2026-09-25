import React from 'react'
import "./spotify.scss"
import MacWindow from './MacWindow'

const Spotify = () => {
  return (
    <MacWindow width='30vw'>
        <div className="spotify-window">
           <iframe data-testid="embed-iframe" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/artist/2oSONSC9zQ4UonDKnLqksx?utm_source=generator&theme=0&si=08966f2ffc4644ad" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </MacWindow>
  )
}

export default Spotify
