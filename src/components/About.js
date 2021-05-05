import React from 'react';
import Header from "../components/Header";
import Trees from '../images/trees.jpg'

const About = () => {



  return (
    <div className="w-full flex flex-col h-screen bg-gradient-to-tl from-blue-600 via-blue-400 to-blue-600"
      style={{ backgroundImage: `url(${Trees})` }}>


      <Header title="Pothole App" />
     
      <div className=" max-w-0 transform rotate-90 origin-left my-60 mx-4">
           
           <button type="button" className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-5 transform transition duration-500 hover:scale-110 "
            onClick={(e) => {
               e.preventDefault();
               window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSdCFxujcEriHOjydfosFrdyqjRxGD04QMplipF1Zr9CW19k2g/viewform?usp=sf_link';
               }}>Feedback</button>
           </div> 
      <div className="flex items-center justify-center h-screen ">
    

        <div className="bg-white rounded-lg border shadow-lg p-10 w-6/12 absolute inset-x-auto bottom-0 h-5/6 ">
          <div>
            <h1 className="text-4xl font-bold text-center">About</h1>
            <hr className="mt-6 border-b-1 border-gray-200" />
            <h1 className="font-bold">Background</h1>
            <p className="pt-2">Roadside Reporting focuses on problems that impact individuals on their commute.
            Issues may include roadside accidents, burst pipes and potholes to name a few. These issues can be seen via the map
            by all individuals.
            </p>
            <h1 className="font-bold pt-5">Motivation</h1>
            <p className="pt-2">Users who have an account and have encountered issues, will have the opportunity to take a picture and at the 
              current location add it to the list of issues represented on the map for others to see. However, some issues 
              may not directly affect an individual's commute, but adding the issue to the map can bring awareness for
               friends or other individuals whose commute is along the path of the highlighted issue.  As a result, individuals 
               will be able to plan their paths accordingly. </p>
          </div>
          <h1 className="font-bold pt-5 pt-5">Plans moving foward</h1>
          <>
            <li>Users will have the ability to vote on these issues.</li>
            <li>Issues that become highly concerning to the public will then bring awareness and grasp the <span className="ml-5">attention of Government authorities.</span></li>
            <li>Building a mobile application to allow flexibility of users to upload issues on the spot.</li>
          </>
        </div>

      </div>
    </div>
  )
}


export default About

