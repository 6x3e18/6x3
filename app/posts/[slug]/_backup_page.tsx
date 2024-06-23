import fs from "fs";
import Markdown from 'markdown-to-jsx'
import React from 'react'





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
<article className="p-20 max-w-5xl mx-auto">

<h1> title {slug}</h1>
<Markdown>{content}</Markdown>

</article>

)

}




