// @tailwind base;
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">


      
      <div className=" max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

        
      <a href="mailto:yoscima6h@mozmail.com" className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 from-zinc-200 pb-6 pt-8 backdrop-blur-2xl hover:bg-slate-300 hover:dark:bg-slate-700 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      Write me an Email
</a>


       {/* header img  */}
       <div className="z-10 fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className=" flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/about"
            // target="_blank"
            rel="noopener noreferrer"
          >
          {" "}
            <Image
              src="/6x3.svg"
              alt="6x3 Logo"
              // className="dark:invert"
              width="0"
              height="0"
              sizes="10vw"
              className="w-24 h-auto"
              priority
            />
          </a>
        </div>
      </div>

  {/* background start */}

  <div className="flex items-center justify-center px-16 dark:z-10 max-sm:hidden">
  <div className="relative w-full max-w-lg">
    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    <div className="m-8 relative space-y-4 opacity-0">
      <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
        <div className="flex-1">
          <div className="h-4 w-48 bg-gray-300 rounded"></div>
        </div>
        <div>
          <div className="w-24 h-6 rounded-lg bg-purple-300"></div>
        </div>
      </div>
      <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
        <div className="flex-1">
          <div className="h-4 w-56 bg-gray-300 rounded"></div>
        </div>
        <div>
          <div className="w-20 h-6 rounded-lg bg-yellow-300"></div>
        </div>
      </div>
      <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
        <div className="flex-1">
          <div className="h-4 w-44 bg-gray-300 rounded"></div>
        </div>
        <div>
          <div className="w-28 h-6 rounded-lg bg-pink-300"></div>
        </div>
      </div>
    </div>
  </div>
</div>


  {/* background end */}


      
      

      <div className="mb-64 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="/posts/MVP"
          className="group rounded-lg border border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
   
          rel="noopener noreferrer"
        >
          <h4 className={`mb-3 text-2xl font-semibold`}>
            MVP{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
            
          </h4>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Wnat is a MVP and how can it help me?
          </p>
        </a>

      
        <a
          href="/gallery"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className={`mb-3 text-2xl font-semibold`}>
            Gallery{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h4>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore some of my digital artworks
          </p>
        </a>

        <a
          href="/about"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className={`mb-3 text-2xl font-semibold`}>
            About{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h4>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Some words about me
          </p>
        </a>
      </div>
      
    </main>
  );
}
