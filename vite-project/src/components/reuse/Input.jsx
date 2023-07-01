export default function Input({ title, subtext }) {
    return (
        <>
            <h1 className="font-bold">{title}</h1>
            <input className="border w-full rounded-md mt-2" type="text" />
            <p className="text-[10px] pt-1 pl-1">{subtext}</p>
        </>
    )
}