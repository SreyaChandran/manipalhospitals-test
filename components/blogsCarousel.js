import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import BlogCards from './blogCards2'
import { Button } from './ui/button'
import img1 from '../public/images/tips-for-avoiding-summer-migraines-and-headaches.webp'

const BlogsCarousel = () => {
  const blogs = [
    {
      "link": "#",
      "title": "Coronary Artery Disease: Recognising The Early Warning Signs To Prevent Heart Attack",
      "image": {
        "webp": "images/coronary-artery-disease-symptoms.webp",
        "png": "images/coronary-artery-disease-symptoms.png"
      },
      "author": "Department of Cardiology",
      "date": "Dec 01, 2023",
      "readTime": "3 Min Read",
      "profileImage": "images/spec_photo/team-manipal-hospitals.png"
    },
    {
      "link": "https://www.manipalhospitals.com/blog/awakening-youth-to-the-dangers-of-cardiac-arrest/",
      "title": "Silent Threats, Loud Calls - Awakening Youth To The Dangers of Cardiac Arrest",
      "image": {
        "webp": "images/healthy-heart-awareness-manipal-hospitals.webp",
        "png": "images/healthy-heart-awareness-manipal-hospitals.png"
      },
      "author": "Dr. Tanmai Yermal (Jain)",
      "date": "Nov 17, 2023",
      "readTime": "2 Min Read",
      "profileImage": "uploads/doctors_photo/interventional-cardiologist-in-kharadi-pune-dr-tanmai-yermal-jain.png"
    },
    {
      "link": "https://www.manipalhospitals.com/blog/decoding-angina-your-hearts-distress-call/",
      "title": "Decoding Angina - Your Heart's Distress Call",
      "image": {
        "webp": "images/heart-disease-treatment-manipal-hospitals.webp",
        "png": "images/heart-disease-treatment-manipal-hospitals.png"
      },
      "author": "Dr. Ranjan Kr Sharma",
      "date": "Nov 17, 2023",
      "readTime": "2 Min Read",
      "profileImage": "uploads/doctors_photo/dr-ranjan-kr-sharma-consultant-cardiology.png"
    },
    {
      "link": "https://www.manipalhospitals.com/blog/athletes-and-heart-disease-why-does-it-happen/",
      "title": "Athletes And Heart Disease: Why Does It Happen?",
      "image": {
        "webp": "images/athletes-and-heart-disease1.webp",
        "png": "images/athletes-and-heart-disease1.png"
      },
      "author": "Department of Cardiology",
      "date": "Nov 03, 2023",
      "readTime": "4 Min Read",
      "profileImage": "images/spec_photo/team-manipal-hospital23.png"
    }
  ]
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {
          blogs.map((item,index)=>(
            <CarouselItem key={index} className="pl-1 md:basis-1/1 lg:basis-1/3 flex items-center justify-center">
              <BlogCards key={index} blog={item} />
            </CarouselItem>
          ))
        }
      </CarouselContent >
      <CarouselPrevious className='bg-primary -left-8' />
      <CarouselNext className='bg-primary -right-8' />
    </Carousel>
  )
}

export default BlogsCarousel