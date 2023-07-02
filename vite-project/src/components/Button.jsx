export default function Button() {
    return (
        <>
            <div>
                <div className="flex justify-center border-red-700 border-4 rounded-md bg-red-700">
                    <button className="border-black border-2 w-full py-2 text-white rounded-md gradient" type="submit">SUBMIT FORM</button>
                </div>
                <p className="text-center font-bold mt-10 mb-20 text-sm">All information submitted on this form will  be kept strictly confidential.</p>
            </div>
        </>
    )
}