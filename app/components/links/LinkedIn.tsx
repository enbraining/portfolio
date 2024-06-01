import Link from "next/link";
import LinkImage from "../images/Link";

export function LinkedInLink(){
    return (
        <Link href={"https://linkedin.com/in/enbraining"} className="flex gap-x-2 text-blue-600">
            <LinkImage />
            <p>LinkedIn</p>
        </Link>
    )
}