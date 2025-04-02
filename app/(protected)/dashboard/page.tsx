"use client"

import Hero from '@/components/ui/animated-hero'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const locations = [
  {
    name: "Coffee Shop Meet-Cute",
    description: "Master the art of casual conversation over a perfectly brewed cup of coffee. The aroma of espresso sets the perfect scene.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
  },
  {
    name: "Park Stroll",
    description: "A peaceful walk in the park could turn into something special. Natural lighting and fresh air make for perfect conversation starters.",
    image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f",
  },
  {
    name: "Gym Connection",
    description: "Between sets and reps lies the perfect opportunity. Show your confidence in an energetic environment.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
  },
  {
    name: "Classroom Chemistry",
    description: "Study groups and shared classes - where intellectual attraction begins. Knowledge is the ultimate attraction.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    name: "Street Style",
    description: "Spontaneous encounters on city streets. Urban energy and chance meetings create unforgettable moments.",
    image: "https://images.unsplash.com/photo-1492369681015-46c9ca4dee01",
  },
]

export default function Dashboard() {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((location, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={location.image}
                alt={location.name}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{location.name}</CardTitle>
              <CardDescription>{location.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full">Start Approach</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
} 