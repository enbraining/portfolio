import Link from "next/link";

export default function Header(){
    return (
        <header className="flex gap-x-[6.5rem] py-12 font-semibold text-xl text-stone-500 fixed opacity-75 bg-white">
            <Link href={'/'}>소개</Link>
            <Link href={'/blog'}>블로그</Link>
            <Link href={'/project'}>프로젝트</Link>
            <Link href={'/certificate'}>자격증</Link>
            <Link href={'/history'}>히스토리</Link>
        </header>
    )
}