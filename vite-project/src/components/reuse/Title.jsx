export default function Header({ title, subtext, asterik }) {
    return (
        <>
            <div className="my-8">
                <h1 className="text-red-500 font-bold text-2xl">{title}</h1>
            </div>
            <p className="font-bold mb-2">{subtext} <span className="text-red-500">{asterik}</span></p>
        </>
    )
}