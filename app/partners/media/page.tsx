"use client";

import Image from "next/image";
// Ensure the logo image is placed at the correct path.
import automatedBuildingsLogo from "@/public/image/partners/Asset-22-1024x264.png";

export default function MediaPartnersPage() {
  return (
    <div className="bg-white text-black font-serif">
      <main className="container mx-auto py-16 px-4">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="mt-8 text-5xl font-bold mb-4">
            Media Partner
          </h1>
        </section>

        {/* Single Card for Partner Details */}
        <section className="flex justify-center">
          <div className="max-w-4xl bg-gray-100 p-8 rounded-lg shadow-2xl flex flex-col md:flex-row items-center">
            {/* Logo Section */}
            <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
              <Image
                src={automatedBuildingsLogo}
                alt="AutomatedBuildings.com Logo"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
            {/* Details Section */}
            <div className="md:w-2/3 md:pl-10">
              <h2 className="text-4xl font-bold mb-4">
                AutomatedBuildings.com
              </h2>
              <p className="text-xl mb-4">
                Website:{" "}
                <a
                  href="https://www.automatedbuildings.com/index.htm"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.automatedbuildings.com/index.htm
                </a>
              </p>
              <p className="text-lg leading-relaxed">
                Since 1999, AutomatedBuildings.com has been an online magazine and web resource.
                We provide the news and connection to the community of change agents that are creating our
                present definition of smart, intelligent, integrated, connected, green, and converged large buildings.
                Our virtual magazine and web resource offers a searchable platform for discussion and exchange,
                creating opportunities for B2B for all new and existing stakeholders.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
