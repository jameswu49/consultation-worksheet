export default function TextBox({ title, placeholder, name, onChange, index }) {
    return (
        <>
            <div className="mt-12">
                <p className="font-bold mb-2">{title}</p>
                <textarea className="w-full border-gray-500 border rounded-md pl-1" placeholder='Add your extra accounts here...' rows='4' name='Text' onChange={(event) => onChange(index, event)} ></textarea>
            </div>
        </>
    )
}