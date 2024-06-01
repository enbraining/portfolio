import Link from "next/link";
import LinkImage from "../images/Link";

export function GithubLink(){
    return (
        <Link href={"https://github.com/enbraining"} className="flex gap-x-1 text-blue-600">
            <LinkImage />
            <p>Github</p>
        </Link>
    )
}