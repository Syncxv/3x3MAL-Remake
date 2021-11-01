import type { NextPage } from 'next'
import { AnimeEntity } from '../types'
interface animeGridProps {
    anime: AnimeEntity[],
}
const AnimeGrid: NextPage<animeGridProps> = ({anime}) => {
    const isData = anime.length
  return (
    <>
        <div className="anime-grid">
            {isData ? anime.map(item => <div>{item.title}</div>) : ""} 
        </div>
    </>
  )
}

export default AnimeGrid
