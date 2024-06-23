import React from 'react';
import Image from 'next/image';
import fs from 'fs';
import Markdown from 'markdown-to-jsx';

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    return content; 
}

const Page = (props: any) => {
    const slug = props.params.slug;
    const content = getPostContent(slug);

  return (

    
    <main className="flex min-h-screen flex-col items-center justify-between py-24">

      
<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex ">
<a href="/" className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 from-zinc-200 pb-6 pt-8 backdrop-blur-2xl hover:bg-slate-300 hover:dark:bg-slate-700 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
  Back to home
</a>

       {/* header img  */}
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
            // target="_blank"
            rel="noopener noreferrer"
          >
          {" "}
            <Image
              src="/6x3.svg"
              alt="Vercel Logo"
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
      <div style={{ height: '20px' }}></div>  
   <div className="z-9 max-w-4xl"><Markdown>{content}</Markdown></div> 
           
   <div style={{ height: '40px' }}></div>

<button className="z-10 bg-transparent font-mono hover:text-white transition-colors hover:border-gray-300 hover:bg-purple-500 hover:dark:bg-purple-500 hover:dark:bg-neutral-800/30 py-2 px-4 border border-slate-500 hover:border-transparent rounded">
  <a href="mailto:yoscima6h@mozmail.com">Write me an Email</a>
</button>

<div style={{ height: '80px' }}></div>
           
        </main>

        
    );
}

export default Page;
// export default function mvp() {
//     const content = 'aaacontent'; // Assuming you have the slug available

    
