"use server"

import Bold from "./components/Bold";
import { GithubLink } from "./components/links/Github";
import { LinkedInLink } from "./components/links/LinkedIn";

export default async function Home() {
  return (
    <main>
      <div className="pb-10">
        <p className="bg-slate-200 w-[250px] h-[250px] rounded-r-full">IMAGE</p>
      </div>
      <div className="pb-4">
        <h1 className="text-3xl font-semibold">개발이 재미있는</h1>
        <h1 className="text-3xl font-semibold">풀스택 개발자, <Bold input="김동학" />입니다</h1>
      </div>
      <div className="flex gap-x-3 font-medium">
        <GithubLink />
        <LinkedInLink />
      </div>    
      <hr className="my-10" />
    </main>
  );
}
