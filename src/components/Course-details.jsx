'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import courseData from "../data/music_courses.json"



export default function CoursesDetails({ slug = 'guitar-fundamentals' }) {
    const [course, setCourse] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCourse = () => {
            setLoading(true)
            const foundCourse = courseData.courses.find(c => c.slug === slug)
            setCourse(foundCourse || null)
            setLoading(false)
        }
        fetchCourse()
    }, [slug])

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>
    }

    if (!course) {
        return <div className="flex justify-center items-center h-screen">Course not found</div>
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <Card className="overflow-hidden">
                <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
                    <Image
                        src={course.image}
                        alt={course.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
                    <div className="absolute top-4 right-4">
                        <Badge variant={course.isFeatured ? "default" : "secondary"}>
                            {course.isFeatured ? "Live" : "Coming Soon"}
                        </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{course.title}</h1>
                        <p className="text-lg sm:text-xl">Instructor: {course.instructor}</p>
                    </div>
                </div>
                <CardContent className="pt-6">
                    <p className="text-base sm:text-lg mb-4">{course.description}</p>
                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-primary">${course.price.toFixed(2)}</span>
                        <Button size="lg">
                            {course.isFeatured ? "Enroll Now" : "Join Waitlist"}
                        </Button>
                    </div>
                </CardContent>
                <CardFooter className="bg-muted mt-6 p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        <div>
                            <h3 className="font-semibold mb-2">What you'll learn</h3>
                            <ul className="list-disc list-inside">
                                <li>Comprehensive curriculum</li>
                                <li>Hands-on exercises</li>
                                <li>Expert instruction</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Course features</h3>
                            <ul className="list-disc list-inside">
                                <li>24/7 access to materials</li>
                                <li>Certificate upon completion</li>
                                <li>Community support</li>
                            </ul>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}