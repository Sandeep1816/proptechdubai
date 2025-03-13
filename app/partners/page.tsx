"use client";

import React from "react";
// import Navbar from "@/app/components/ui/Navbar";
// import Footer from "@/app/components/ui/Footer";
import PartnersHeroSection from "../components/PartnersHeroSection";

export default function AboutPage() {
  return (
    <div className="bg-white text-black font-serif">
      {/* <Navbar /> */}

      <main>
        {/* Hero Section */}
        <PartnersHeroSection />

        {/* Our Story Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold mb-6 border-b border-gray-300 pb-4">
              Our Story
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              MAXPO Events began with a passion for connecting people and has grown into a
              globally recognized platform. Our journey is defined by innovation, creativity, and
              a relentless pursuit of excellence. We create memorable experiences that bring
              businesses, innovators, and leaders together.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-4">
                Our Mission
              </h3>
              <p className="text-xl text-gray-700">
                To connect industries through world-class events that foster innovation, collaboration,
                and growth.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-4">
                Our Vision
              </h3>
              <p className="text-xl text-gray-700">
                To be the global leader in event management and innovation, continuously setting new
                standards for excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                <h4 className="text-3xl font-bold mb-4 text-blue-600">
                  Innovation
                </h4>
                <p className="text-xl text-gray-700">
                  We drive change by embracing new ideas and fostering creativity in every project.
                </p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                <h4 className="text-3xl font-bold mb-4 text-blue-600">
                  Excellence
                </h4>
                <p className="text-xl text-gray-700">
                  We set high standards and continuously strive to exceed expectations in everything we do.
                </p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                <h4 className="text-3xl font-bold mb-4 text-blue-600">
                  Collaboration
                </h4>
                <p className="text-xl text-gray-700">
                  We believe in the power of teamwork and open communication to achieve remarkable results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-blue-600 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold text-white mb-4">
              Join the MAXPO Experience
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Become part of a legacy of innovation and excellence. Discover how you can contribute to shaping the future of events.
            </p>
            <a
              href="/apply"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-2xl font-bold hover:bg-gray-200 transition"
            >
              Apply Now
            </a>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
