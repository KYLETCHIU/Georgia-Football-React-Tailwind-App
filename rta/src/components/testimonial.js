import React from "react";
import KirbySmart from "../images/ksmd.webp";
import StetsonBennett from "../images/sbmd.webp";
import NolanSmith from "../images/nsmd.jpeg";


const Testimonials = () => {
    return (

<section className="mb-20 text-gray-700">
  <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
    <h3 className="text-3xl font-bold mb-6 text-gray-800">SEC Media Days</h3>
    <p className="mb-6 pb-2 md:mb-12 md:pb-0">
      Recently, head coach Kirby Smart stopped by SEC Media days with star players Stetson Bennett and Nolan Smith to update the media on the latest Georgia Football news.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-6 lg:gap-12 text-center">
    <div className="mb-12 md:mb-0">
      <div className="flex justify-center mb-6">
        <img
          src={KirbySmart} alt="Kirby Smart SEC Media Days"
          className="rounded-full shadow-lg w-32 h-32"
        />
      </div>
      <h5 className="text-xl font-semibold mb-4">Kirby Smart</h5>
      <h6 className="font-semibold text-red-600 mb-4">Head Coach</h6>
      <p className="mb-4">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="quote-left"
          className="w-6 pr-2 inline-block"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
          ></path>
        </svg>
        We will not be hunted at the University of Georgia. We will be the ones doing the hunting.
      </p>
    </div>
    <div className="mb-12 md:mb-0">
      <div className="flex justify-center mb-6">
        <img
          src={NolanSmith} alt="Nolan Smith SEC Media Days"
          className="rounded-full shadow-lg w-32 h-32"
        />
      </div>
      <h5 className="text-xl font-semibold mb-4">Nolan Smith</h5>
      <h6 className="font-semibold text-red-600 mb-4">Linebacker</h6>
      <p className="mb-4">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="quote-left"
          className="w-6 pr-2 inline-block"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
          ></path></svg>Humility. That is one of the big things that we took last year to move a step forward. Connect with your brother and be humble. Don’t have an ego. 
      </p>
    </div>
    <div className="mb-0">
      <div className="flex justify-center mb-6">
        <img
          src={StetsonBennett} alt="Stetson Bennett SEC Media Days"
          className="rounded-full shadow-lg w-32 h-32"
        />
      </div>
      <h5 className="text-xl font-semibold mb-4">Stetson Bennett</h5>
      <h6 className="font-semibold text-red-600 mb-4">Quarterback</h6>
      <p className="mb-4">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="quote-left"
          className="w-6 pr-2 inline-block"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
          ></path></svg>You play the game to play the game, and you play the game to win and compete against the best players. I am able. I am secure enough.
      </p>
    </div>
  </div>
</section>

)
}
export default Testimonials;