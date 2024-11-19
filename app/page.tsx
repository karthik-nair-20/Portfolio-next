import About from "./components/about";
import ImageComponent from "./components/image";
import Skills from "./components/skills";
import Socials from "./components/social";

export default function Home() {
  return (
    <>
      <section className="w-full p-4 mb-16">
        <div className="flex justify-center mt-8">
          <Socials />
        </div>
        <div className="flex justify-center mt-12">
          <ImageComponent
            source="/images/moon_land.jpg"
          />
        </div>
      </section>

      <section className="px-6">
        <h2 className="text-center text-4xl font-mono pb-6">Halo!</h2>
        <div className="flex justify-center mb-6 max-w-4xl mx-auto">
          <ImageComponent
            source="/images/work.jpg"
          />
        </div>
        <div className="text-center mb-8">
          <Skills />
        </div>
      </section>

      <section className="py-16" id="about">
        <h2 className="text-center text-4xl font-mono pb-6">About</h2>
        <div className="flex justify-center mb-8 max-w-4xl mx-auto">
          <ImageComponent
            source="/images/tori.jpg"
          />
        </div>
        <div className="">
          <About />
        </div>
      </section>

      <section className="footer mt-10">
        <div className="container mx-auto text-center">
          <h5 className="text-lg m-5 italic">All rights reserved &copy; Karthik Nair</h5>
        </div>
      </section>
    </>
  );
}
