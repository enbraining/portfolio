import Link from "next/link"

export default function Page(){
    const projects = [
        {   
            id: 1,
            name: "SMS",
            subtitle: "학생 정보 통합관리 서비스",
            tags: ["QueryDSL", "Spring Boot", "Multi Module", "Hexagonal Architecture", "Kotlin", "Spring Security"],
            content: "",
            source: "https://github.com/GSM-MSG/SMS-BackEnd"
        },
        {
            id: 2,
            name: "weeing",
            subtitle: "위클래스 상담 지원 서비스",
            tags: ["Spring Boot", "Java", "Spring Security", "PostgreSQL", "AWS", "Vultr"],
            content: "교내에서 진행하는 아이디어 페스티벌에서 백엔드 엔지니어로 참여해 API 개발과 EC2 인스턴스 관리를 맡았다.",
            source: "https://github.com/GApple-T/weeing-backend"
        },
        {
            id: 3,
            name: "UnderLive (개발 중)",
            subtitle: "랜덤채팅 서비스",
            tags: ["WebSocket", "Spring Boot", "PostgreSQL"],
            content: "웹소켓을 이용한 1대1 랜덤채팅입니다.",
            source: "https://github.com/team-underlive"
        },
        {
            id: 4,
            name: "GOGO",
            subtitle: "체육대회 배팅 서비스",
            tags: ["QueryDSL", "Spring Boot", "Multi Module", "Java", "Spring Batch", "MySQL", "Docker"],
            content: "GSM 체육대회에서 사용되었으며 해당 기간동안 계속해서 사용되는 만큼 빠른 유지보수를 위한 멀티모듈을 사용하여 프로젝트를 구성하게 되었습니다. Dockerfile과 Github Workflows를 이용한 CI/CD로 간편한 배포가 가능하며, Spring Batch를 이용해서 경기 10분 전 알림, 전화번호 인증 횟수 초기화 등의 로직을 개발하였습니다.",
            source: "https://github.com/GSM-GOGO/GSM-GOGO-Server"
        },
        {
            id: 5,
            name: "소금이",
            subtitle: "동아리 팀원 응원 및 스케줄 관리 봇",
            tags: ["Typescript", "Firebase", "Day.js", "AWS"],
            content: "MSG 동아리에서 팀원을 응원하기 위한 목적으로 만들어졌으며 스케줄 관리, 소금 주고받기 등의 기능이 있습니다. 또한 Docusaurus를 이용한 봇 가이드를 제작해서 처음 사용하는 사람들도 익숙하게 사용할 수 있습니다.",
            source: "https://github.com/GSM-MSG/Salt-Bot"
        }
    ]

    return (
        <main>
            {projects.map(project => <div className="font-medium pb-3 mb-10" key={project.id}>
                <div className="gap-x-2 align-bottom justify-end mb-4">
                    <p className="text-stone-500 text-xl">{project.name}</p>
                    <p className="text-stone-800 text-lg">{project.subtitle}</p>
                    <Link className="text-blue-600" href={project.source}>Github</Link>
                </div>
                <div className="flex mb-4">{project.tags.map(tag => <div className="border px-2 py-1 mr-2 rounded-2xl" key={tag}>{tag}</div>)}</div>
                <div className="font-light">{project.content}</div>
            </div>)}
        </main>
    )
}
