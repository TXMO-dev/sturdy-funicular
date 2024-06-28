import { Statistics } from "../../Misc/StatsSettings"

const StatisticsComponent = () => {
    return (
        <>
        {
            Statistics.map((response) => {
                return (
                    <div key={response.id} className="flex flex-col justify-items-center items-center place-content-center mb-[4rem]">
                        <h4 className="text-[3rem] font-[700] leading-[1rem] text-center text-[#3B3A5D] mb-[2rem]">{response.value}</h4>
                        <p className="text-center font-[600] text-[1rem] leading-[0.413rem] text-[#DFA857]">{response.subText}</p>
                    </div>
                )
            })
        }
        </>
    )
}
export default StatisticsComponent