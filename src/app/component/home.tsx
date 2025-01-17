import Image from "next/image";
import asserts from "../asserts/profile.png"
export default function Home1() {
    return (
     
     <div id="Home1">
     <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-pink-900 text-center hover:uppercase">
       Hello
        <br />
         I am Maryam Shakeel
      </h1>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
         <a href="https://www.linkedin.com/in/maryam-shakeel-5720a12b5/">Linkedin</a> 
        </button>
        <button className="ml-4 inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yello-600 rounded text-lg">
          <a href="https://github.com/maryamshakeel22">Github</a>
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <Image
        className="object-cover object-center rounded-e-6xl rounded-full"
        alt="hero"
        src={asserts}
        width={300}
        height={300}
      />
    </div>
  </div>
</section>

     </div>
    );
  }