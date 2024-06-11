export default function Page(){
    const histories = [
        {   
            id: 1,
            name: "제5회 데크 데이 - 기술 커뮤니티를 통한 성장",
            date: "2023년 10월 20일"
        },
        {
            id: 2,
            name: "데브콘 대전 : 삼월엔 데이터!",
            date: "2024년 03월 23일"
        },
        {
            id: 3,
            name: "드로이드나이츠",
            date: "2024년 06월 11일"
        }
    ]

    return (
        <main>
            {histories.map(history => <div className="flex font-medium pb-3 text-lg gap-x-2" key={history.id}>
                <p className="text-stone-500">{history.date}</p>
                <p className="text-stone-800">{history.name}</p>
            </div>)}
        </main>
    )
}
