'use client'
import React from 'react'
import Link from 'next/link'
import courseData from "../data/music_courses.json"
import { BackgroundGradient } from './ui/background-gradient'
import Button from './Button'

function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter(course => course.isFeatured)

    return (
        <div className='py-12 bg-gray-900'>
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
                </div>
            </div>
            <div className='mt-10 mx-8'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                    {
                        featuredCourses.map(item => (
                            <div key={item.id} className='flex justify-center'>
                                <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                    <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                        <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{item.title}</p>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{item.description}</p>
                                        <Link href={`/courses/${item.slug}`}>
                                            <Button
                                            text='Learn more'
                                            />
                                        </Link>
                                    </div>
                                </BackgroundGradient>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FeaturedCourses