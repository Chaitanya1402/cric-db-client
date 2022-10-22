import React from 'react'
import website_icon from '../images/web_icon.png';

const Contact = () => {
  return (
    <div className='w-[85%] m-auto mt-8 contact'>
      <h2 className='font-merriweather text-xl font-medium mb-2'>Developer Information</h2>
      <p>Hello people, my name is <span className='font-semibold'>Chaitanya Sondur</span>. First of all, I would like to thank you all for showing interest to browse this website. This is one of the happiest things for a developer. I am a full-stack web developer from Mumbai, India. I like to develop projects using the MERN stack. If you have any queries or suggestions, kindly contact me on my social media links provided below. I am looking forward to your suggestions to always learn and grow in life.</p>

      <div className="social-links my-8 flex justify-center flex-col md:flex-row items-center">
        <div className='flex justify-center items-center mx-8 p-2'>
          <i class="fa-brands fa-github text-3xl"></i>
          <a href='https://github.com/Chaitanya1402' className='px-2 font-medium underline contact-link-1' target={"_blank"}>Github</a>
        </div>
        <div className='flex justify-center items-center mx-8 p-2'>
          <i class="fa-regular fa-envelope text-3xl"></i>
          <a href='mailto:chaitanyas2002@gmail.com' className='px-2 font-medium underline contact-link-1'>chaitanyas2002@gmail.com</a>
        </div>
        <div className='flex justify-center items-center mx-8 p-2'>
          <i class="fa-brands fa-linkedin text-3xl"></i>
          <a href='https://www.linkedin.com/in/chaitanya-sondur-821141222/' className='px-2 font-medium underline contact-link-1' target={"_blank"}>LinkedIn</a>
        </div>
      </div>

      <div className="other-projects mt-8 pb-8">
        <h3 className='text-xl font-medium mb-2'>My other projects you may like:</h3>
        <div className="project-card my-8  p-4 rounded-md">
          <h3 className='font-semibold mb-2'>Even-Tual: A system for online events
          <span className='ml-8 bg-green-700 text-xs font-normal p-1 rounded-xl text-white'>In progress</span>
          </h3>
          <p>This is the project I am currently working on for my college internship. The need is to develop a portal for hosting and managing virtual events. It currently can stream YouTube videos, showcase project images and a lot more. We are currently working on hosting live zoom meetings as well, which we hope to complete sooner.</p>
          <div className='my-2 flex items-center'>
            <i class="fa-brands fa-github text-2xl"></i>
            <a href='https://github.com/Chaitanya1402/online-events' className='px-2 font-medium underline' target={"_blank"}>https://github.com/Chaitanya1402/online-events</a>
          </div>
        </div>

        <div className="project-card my-8 p-2 rounded-md">
          <h3 className='font-semibold mb-2'>Genesis 16 Motorsports</h3>
          <p>I along with my colleague created this website as a part of our free-lancing journey for a college motorsports team. Through this project, we learned about the Javascript Library - React and the importance of CSS Modules. This was a breakthrough project as it was our first production-ready website.</p>
          <div className='my-2 flex items-center'>
            <i class="fa-brands fa-github text-2xl"></i>
            <a href='https://github.com/Chaitanya1402' className='px-2 font-medium underline' target={"_blank"}>Github Repo Link to be added here</a>
          </div>
          <div className='my-2 flex items-center'>
            <img width={25} src={website_icon} alt="Website"/>
            <a href="https://genesismotorsports.vercel.app/" className='px-2 font-medium underline' target={"_blank"}>https://genesismotorsports.vercel.app/</a>
          </div>
        </div>

        <div className="project-card mt-8 p-2 rounded-md">
          <h3 className='font-semibold mb-2'>To-do Application</h3>
          <p>A simple to-do app storing your data in localstorage. Create, read and update facility added. Website built using HTML, pure CSS and Javascript. The website is also responsive, so you can view it in the mobile browser hassle-free.</p>
          <div className='my-2 flex items-center'>
            <i class="fa-brands fa-github text-2xl"></i>
            <a href='https://github.com/Chaitanya1402/todo-app' className='px-2 font-medium underline' target={"_blank"}>https://github.com/Chaitanya1402/todo-app</a>
          </div>
          <div className='my-2 flex items-center'>
            <img width={25} src={website_icon} alt="Website"/>
            <a href="https://chaitanya1402-task-app.vercel.app/" className='px-2 font-medium underline' target={"_blank"}>https://chaitanya1402-task-app.vercel.app/</a>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Contact