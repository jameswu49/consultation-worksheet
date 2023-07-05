export default function Button() {
    return (
        <>
            <div className="lg:flex lg:flex-col lg:items-center">
                <div className="flex justify-center border-red-700 border-4 rounded-md bg-red-700 lg:w-[20%]">
                    <button className="border-black border-2 w-full py-2 text-white rounded-md gradient cursor-pointer" type="submit">SUBMIT FORM</button>
                </div>
                <p className="text-center font-bold mt-10 mb-20 text-sm">All information submitted on this form will  be kept strictly confidential.</p>
            </div>
        </>
    )
}