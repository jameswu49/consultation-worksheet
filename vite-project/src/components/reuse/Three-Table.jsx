export default function ThreeTable({ table }) {
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
                                <td key={index}><input className="table" type="text" name={item} /></td>
                            ))}
                        </tr>
                        <tr>
                            <td className="bg-[#007ACC] text-center font-bold">2</td>
                            {table.map((item, index) => (
                                <td key={index}><input className="table" type="text" name={item} /></td>
                            ))}
                        </tr>
                        <tr>
                            <td className="bg-[#007ACC] text-center font-bold">3</td>
                            {table.map((item, index) => (
                                <td key={index}><input className="table" type="text" name={item} /></td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}