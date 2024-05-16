'use client'
import { MovieCardProps } from '@/types'
import Image from 'next/image'
import React, { useState } from 'react'
import MovieDetails from './MovieDetails'

type Props = {
    movie: MovieCardProps
}

const MovieCard = ({movie}: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [id, setId] = useState(0)

   const handleImageClick = () => {
    setIsOpen(true)
    setId(movie._id)
   }

  return (
    <>
    <section className=''>
        <Image onClick={() => handleImageClick()} className='rounded-md' src={`${movie.poster_path}`} alt='poster' width={200} height={100}/>
    </section>
    {isOpen && (
      <div onClick={() => setIsOpen(false)} className='absolute bg-black w-full h-full opacity-40 top-0 left-0 z-[500]'></div>
    )}
      <MovieDetails movie={movie} setIsOpen = {setIsOpen} open = {isOpen} id = {id}/>
    </>
  )
}

export default MovieCard