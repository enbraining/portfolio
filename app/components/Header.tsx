import Link from "next/link";

export default function Header(){
    return (
        <header className="flex gap-x-10 pb-24 font-semibold text-xl text-stone-500">
            <Link href={'/'}>소개</Link>
            <Link href={'/'}>블로그</Link>
            <Link href={'/'}>프로젝트</Link>
            <Link href={'/'}>자격증</Link>
            <Link href={'/'}>히스토리</Link>
        </header>
    )
}