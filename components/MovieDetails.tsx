'use client'
import { MovieCardProps } from '@/types'
import React, { useState } from 'react'

type Props = {
  movie: MovieCardProps
  open: boolean
  id: number
  setIsOpen: (open: boolean) => void
}

const MovieDetails = ({ movie, open, id, setIsOpen }: Props) => {

  return (
    <>
      {open && id === movie._id && (
        <div className='w-[30%] h-[85%] z-[1000] middle fixed top-1/2 left-1/2 overflow-hidden flex flex-col bg-white rounded-md'>
          <img className='w-full h-[40%]' src={`${movie.backdrop_path}`} alt="" />
          <div className='overflow-y-scroll scroll-hide py-4'>
            <h2 className='text-xl font-semibold mt-1 text-center'>{movie.original_title}</h2>
            <p className='font-medium mt-1 px-4 text-center'>{movie.overview}</p>
            <div className='mt-3 flex px-8 justify-between'>
              <p className='font-bold'>Release Date</p>
              <p className='font-semibold'>{movie.release_date || 'NA'}</p>
            </div>
            <div className='mt-3 flex px-8 justify-between'>
              <p className='font-bold'>Genre</p>
              <p className='font-semibold'>{movie.genres[0]}</p>
            </div>
            <div className='mt-3 flex px-8 justify-between'>
              <p className='font-bold'>Rating</p>
              <p className='font-semibold'>{movie.vote_average.toFixed(1)}/10</p>
            </div>
            <a className='text-center block w-[80%] mx-auto p-2 mt-4 rounded-md bg-blue-300' target='_blank' href={`${movie.youtube_trailer}`}>Trailer</a>
            <button className='w-[80%] mx-auto p-2 mt-4 rounded-md block bg-yellow-400'>Rent</button>
          </div>
        </div>
      )}

    </>
  )
}

export default MovieDetails