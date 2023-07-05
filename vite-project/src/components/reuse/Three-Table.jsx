export default function ThreeTable({ table, onChange, handleRequired }) {

    return (
        <>
            <div className="overflow-auto">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            {table.map((item, index) => (
                                <th className="text-center font-black" key={index}>{item}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="bg-[#007ACC] text-center font-bold">1</td>
                            {table.map((item, index) => (
                                <td key={index}><input className="table text-black" type="text" name={item} onChange={(event) => onChange(0, event)} required={handleRequired ? true : undefined} /></td>
                            ))}
                        </tr>
                        <tr>
                            <td className="bg-[#007ACC] text-center font-bold">2</td>
                            {table.map((item, index) => (
                                <td key={index}><input className="table text-black" type="text" name={item} onChange={(event) => onChange(1, event)} /></td>
                            ))}
                        </tr>
                        <tr>
                            <td className="bg-[#007ACC] text-center font-bold">3</td>
                            {table.map((item, index) => (
                                <td key={index}><input className="table text-black" type="text" name={item} onChange={(event) => onChange(2, event)} /></td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}