import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <main>
         <Navbar/>

  <div className="h-[50rem] w-full dark:bg-[#1A1C1B] bg-[#1A1C1B] dark:bg-grid-[#1A1C1B]/[0.2] 
  bg-grid-white/[0.2]   relative flex items-center justify-center">
    {/* Radial gradient for the container to give a faded look */}
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#1A1C1B] 
    bg-[#1A1C1B] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent py-8">
      </p>
   </div>

    </main>
  );
}
