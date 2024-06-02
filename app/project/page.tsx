export default function Page(){
    const projects = [
        {   
            id: 1,
            name: "SMS",
            subtitle: "학생 정보 통합관리 서비스",
            tags: ["QueryDSL", "Spring Boot", "Multi Module", "Hexagonal Architecture", "Kotlin", "Spring Security"],
            content: ""
        },
        {
            id: 2,
            name: "weeing",
            subtitle: "위클래스 상담 지원 서비스",
            tags: ["Spring Boot", "Java", "Spring Security", "PostgreSQL", "AWS", "Vultr"],
            content: "교내에서 진행하는 아이디어 페스티벌에서 백엔드 엔지니어로 참여해 API 개발과 EC2 인스턴스 관리를 맡았다."
        },
        {
            id: 3,
            name: "UnderLive",
            subtitle: "랜덤채팅 서비스",
            tags: ["WebSocket", "Spring Boot", "PostgreSQL"],
            content: "웹소켓을 이용한 랜덤채팅으로..."
        },
        {
            id: 4,
            name: "GOGO",
            subtitle: "체육대회 배팅 서비스",
            tags: ["QueryDSL", "Spring Boot", "Multi Module", "Java", "Spring Batch", "MySQL", "Docker"],
            content: "asdf"
        },
        {
            id: 5,
            name: "소금이",
            subtitle: "동아리 팀원 응원 및 스케줄 관리 봇",
            tags: ["Typescript", "Firebase", "Day.js", "AWS"],
            content: "asdf"
        }
    ]

    return (
        <main>
            {projects.map(project => <div className="font-medium pb-3 mb-10" key={project.id}>
                <div className="gap-x-2 align-bottom justify-end mb-4">
                    <p className="text-stone-500 text-xl">{project.name}</p>
                    <p className="text-stone-800 text-lg">{project.subtitle}</p>
                </div>
                <div className="flex mb-4">{project.tags.map(tag => <div className="border px-2 py-1 mr-2 rounded-2xl" key={tag}>{tag}</div>)}</div>
                <div className=" font-light">{project.content}</div>
            </div>)}
        </main>
    )
}
