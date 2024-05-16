'use client'
import React, { ReactHTMLElement, useState } from 'react'
import { RiSearchLine } from '@remixicon/react'
import { useRouter } from 'next/navigation'
import { filterYears } from '@/constants'

const SearchBox = () => {
    const router = useRouter()
    const [movie, setMovie] = useState('')
    const [year, setYear] = useState('2024')
    const [rating, setRating] = useState('0')

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (movie === '') {
            alert('Search for a movie')
        }

        const searchParams = new URLSearchParams(window.location.search)
        if (movie) {
            searchParams.set('movie', movie)
        } else {
            searchParams.delete('movie')
        }

        if (year) {
            searchParams.set('year', year)
        } else {
            searchParams.delete('year')
        }

        if (rating) {
            searchParams.set('rating', rating)
        } else {
            searchParams.delete('rating')
        }

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`
        router.push(newPathname, { scroll: false })
    }

    return (
        <>
            <form onSubmit={handleSearch} className='flex gap-4' action="">
                <input onChange={(e) => setMovie(e.target.value)} value={movie} className='w-[40%] h-[35px] focus:outline-none px-3 rounded-md' type="text" name='movie' />

                <select className='p-2 rounded-md focus:outline-none' onChange={(e) => setYear(e.target.value)} name="" id="">
                    <option value="2024">All year</option>
                    {filterYears.map(year => (
                        <option key={year} value={`${year}`}>{year}</option>
                    ))}
                </select>

                <select className='p-2 rounded-md focus:outline-none' onChange={(e) => setRating(e.target.value)} name="" id="">
                    <option value="0">All</option>
                    <option value="5">Greater than 5</option>
                    <option value="6">Greater than 6</option>
                    <option value="7">Greater than 7</option>
                    <option value="8">Greater than 8</option>
                    <option value="9">Greater than 9</option>
                </select>



                <button type='submit' className='bg-white w-9 p-2 h-9 rounded-full'><RiSearchLine size={20} /></button>
            </form>
        </>
    )
}

export default SearchBox