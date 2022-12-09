import React from 'react'
const carousel1 =
  'https://api.time.com/wp-content/uploads/2018/08/best-comedy-specials.jpg'
const carousel2 =
  'https://iulianionescu.com/wp-content/uploads/standup-comedy.jpg'
const carousel3 =
  'https://amtshows.com/wp-content/uploads/2014/05/stand-up-comedy-neon-sign.jpg'
const carousel4 =
  'https://seedworld.com/site/wp-content/uploads/2019/11/Standup-Comedy-1-696x464.jpg'
const carousel5 =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Jesus_is_coming.._Look_Busy_%28George_Carlin%29.jpg/1200px-Jesus_is_coming.._Look_Busy_%28George_Carlin%29.jpg'
const carousel6 = 'https://media.timeout.com/images/105411928/630/472/image.jpg'
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

export default function ComedyCarousel() {
  return (
    <div className="App justify-start bg-gradient-to-r from-blue-100 to-blue-300 p-10 border-b-2">
      <div className="flex items-center object-contain h-96">
        <Carousel
          plugins={[
            'arrows',
            'infinite',
            {
              resolve: autoplayPlugin,
              options: {
                interval: 3000,
              },
            },
          ]}
          animationSpeed={1000}
        >
          <img
            className="rounded-2xl shadow-2xl object-fill h-96"
            src={carousel1}
          />
          <img
            className="rounded-2xl shadow-2xl object-fill h-96"
            src={carousel2}
          />
          <img
            className="rounded-2xl shadow-2xl object-fill h-96"
            src={carousel3}
          />
          <img
            className="rounded-2xl shadow-2xl object-fill h-96"
            src={carousel4}
          />
          <img
            className="rounded-2xl shadow-2xl object-fill h-96"
            src={carousel5}
          />
          <img
            className="rounded-2xl shadow-2xl object-fill h-96"
            src={carousel6}
          />
        </Carousel>
      </div>
    </div>
  )
}
