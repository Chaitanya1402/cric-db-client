import React from 'react'

const About = () => {
  return (
    <div className='about'>
        <div className='px-[7.5%] my-7'>
        <h2 className='text-2xl md:text-3xl font-medium mb-4'>What is <span className='font-anton'>CricDB</span> ?</h2>
        <p className='text-justify'>CricDB is a website that allows you to view cricket player details much more easily. You can also filter players based on their role - batsman, wicket-keeper, all-rounder or bowler to narrow your search results. All the details of a player are stored in our database. You can view his ICC Ranking, teams played for along with the player’s personal information. <br /> <br />
          Cricket is a sport that we all love and appreciate. And we consistently require a player’s details for showcasing the facts in a debate. There’s no better place to do this than CricDB. CricDB offers you a wide range of player database and their details. Our website has been used by many well-known sports analysts around the world and we are really glad that we could assist them.
        </p>

        <div className='testimonials flex md:flex-row flex-col justify-center items-center mt-7'>
          <div className='testimonial-card md:w-auto w-[65%] px-7 py-4 mx-10 md:mb-0 mb-10 rounded-lg'>
            <div className='h-32 w-32 md:h-48 md:w-48 m-auto'>
              <img src="https://m.media-amazon.com/images/M/MV5BZmI0MDkwMTgtYzliYS00NWQ4LTg2OTUtNDdhYTYwZWI0NDk3XkEyXkFqcGdeQXVyOTAyMDgxODQ@._V1_.jpg" className='w-[100%] h-[100%] object-cover object-top rounded-full' alt="" />
            </div>
            <div className="mt-4 text-center">
              <p className='text-lg font-semibold'>Harsh Bhogle</p>
              <p className='italic'>"CricDB is the game changer in this modern world where data is the new oil."</p>
            </div>
          </div>

          <div className='testimonial-card md:w-auto w-[65%] px-7 py-4 mx-10 md:mb-0 mb-10 rounded-lg'>
            <div className='h-32 w-32 md:h-48 md:w-48 m-auto'>
              <img src="https://c.cricketpakistan.com.pk/images/posts/cover_1582389535cover.jpg" className='w-[100%] h-[100%] object-cover object-top rounded-full' alt="" />
            </div>
            <div className="mt-4 text-center">
              <p className='text-lg font-semibold'>Danny Morrison</p>
              <p className='italic'>"Many sports enthusiasts now rely on the accurate information that CricDB offers."</p>
            </div>
          </div>

          <div className='testimonial-card md:w-auto w-[65%] px-7 py-4 mx-10 md:mb-0 mb-10 rounded-lg'>
            <div className='h-32 w-32 md:h-48 md:w-48 m-auto'>
              <img src="https://www.tollywood.net/wp-content/uploads/2019/08/Ravi-Shastri.jpg" className='w-[100%] h-[100%] object-cover object-top rounded-full' alt="" />
            </div>
            <div className="mt-4 text-center">
              <p className='text-lg font-semibold'>Ravi Shastri</p>
              <p className='italic'>"CricDB fetches information so fast that it compels me to say, fetching like a tracer bullet."</p>
            </div>
          </div>

        </div>
      </div>

      <div className='px-[7.5%] mt-10 pb-10'>
        <h2 className='text-2xl md:text-3xl font-medium mb-2'>What are the tech-stacks used to build <span className='font-anton'>CricDB</span> ?</h2>
        
        <div className="imgs flex justify-center items-center mb-2">
          <a href="https://reactjs.org/" target="_blank"><img className='mx-3 sm:h-16 h-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="ReactJS" /></a>
          <a href="https://nodejs.org/en/" target="_blank"><img className='mx-3 sm:h-20 h-10' src="https://brandlogos.net/wp-content/uploads/2015/09/nodejs-logo-vector-download.jpg" alt="NodeJS" /></a>
          <a href="https://www.mongodb.com/" target="_blank"><img className='mx-3 sm:h-20 h-10' src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png" alt="MongoDB" /></a>
          <a href="https://tailwindcss.com/" target="_blank"><img className='mx-3 sm:h-20 h-10' src="https://res.cloudinary.com/practicaldev/image/fetch/s--neFmc7k8--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/i/9w1d71e00a6xdltour1s.png" alt="TailwindCSS" /></a>
        </div>

        <p className='text-justify'>We have used the MERN stack for building and managing this website. The front end is based on React, an open-source Javascript library and the styling has been done using Tailwind CSS, a CSS Framework. We have used MongoDB, a NoSQL database to store the players' information. Additionally, we used a few APIs for getting the flag based on the country code and also fetching a player’s Wikipedia. Since React is a single-page application, there is rarely any page reload and the fetches are very quick. This increases the user experience too. Lastly, we also set up an Express app at the backend to handle the server requests. For the future scope, we are planning to increase the number of details so that you don’t miss any detail about your favourite players.</p>
      </div>
    </div>
  )
}

export default About