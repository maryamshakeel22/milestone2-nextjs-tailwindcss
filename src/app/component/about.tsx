import asserts from "../asserts/profile.png"
import Image from "next/image";
export default function About() {
    return (
     <div id="About">
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-12 text-green-900 justify-center flex flex-col text-center w-full">
        About Me
      </h1>
  <Image
        className="object-cover object-center rounded rounded-e-6xl hover:text-green-400"
        alt="hero"
        src={asserts}
        width={300}
        height={300}
      />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-pink-900">
        Hello, <br />
        I am Maryam
      </h1>
      <p className="mb-8 leading-relaxed">
      I am a passionate web developer with experience in building dynamic and responsive websites using HTML, CSS, TypeScript, and Next.js. I enjoy crafting clean, user-friendly interfaces and bringing ideas to life through code. With a strong focus on modern web technologies, I strive to create seamless and efficient digital experiences. Whether it's developing reusable components or optimizing performance, I'm always eager to tackle new challenges and learn along the way.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
          <a href="https://www.linkedin.com/in/maryam-shakeel-5720a12b5/">Linkedin</a>
        </button>
        <button className="ml-4 inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
          <a href="https://github.com/maryamshakeel22">Github</a>
        </button>
      </div>
    </div>
  </div>
</section>
  </div>
    );
  }