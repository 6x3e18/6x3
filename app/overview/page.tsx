import fs from "fs"; 
import Link from "next/link";
// import MarkdownComponent from './markdown.js';


const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"))
  const slugs = markdownPosts.map ((file) => file.replace (".md", ""));
  return slugs;
}

const HomePage = () => {
  const postMetadata = getPostMetadata ();
  const postPreview = postMetadata.map((slug) => (
<div className="flex max-h-screen flex-col items-center justify-between">
   <Link href={`/posts/${slug} `}>
  <h2> {slug}</h2> 
  </Link>
</div>


  ))

return <div>{postPreview}</div>;

}

export default HomePage;




// <main> className="flex min-h-screen flex-col items-center justify-between py-24"
// tctt 

// </main>


// const md = () => {
//   return (
//     <div>
//       <h1>My Markdown Page</h1>
//       <MarkdownComponent path="./content.md" />
//     </div>
//   );
// };

// export default md;


