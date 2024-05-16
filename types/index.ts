
export interface MovieCardProps{
    _id: number
    backdrop_path: string
    genres: string[]
    original_title: string
    poster_path: string
    release_date: string
    overview: string
    title: string
    vote_average: number
    vote_count: number
    youtube_trailer: string
    sources: string[]
    contentType: string
}

export interface searchProps{
    movie: string
    year: string
    rating: string
} 

export interface filterProps{
    movie: string
} 