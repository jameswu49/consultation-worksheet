export default function TenTable({ table, onChange }) {
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
                                <td key={index}><input className="table text-black" type="text" name={item} onChange={(event) => onChange(0, event)} /></td>
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
                        <tr>
                            <td className="bg-[#007ACC] text-center font-bold">4</td>
                            {table.map((item, index) => (
                                <td key={index}><input className="table text-black" type="text" name={item} onChange={(event) => onChange(3, event)} /></td>
                            ))}
                        </tr>
                        <tr>
                            <td className="bg-[#007ACC] text-center font-bold">5</td>
                            {table.map((item, index) => (
                                <td key={index}><input className="table text-black" type="text" name={item} onChange={(event) => onChange(4, event)} /></td>
                            ))}
                        </tr>
                        <tr>
                            <td className="bg-[#007ACC] text-center font-bold">6</td>
                            {table.map((item, index) => (
                                <td key={index}><input className="table text-black" type="text" name={item} onChange={(event) => onChange(5, event)} /></td>
                            ))}
                        </tr>
                        <tr>
                            <td className="bg-[#007ACC] text-center font-bold">7</td>
                            {table.map((item, index) => (
                                <td key={index}><input className="table text-black" type="text" name={item} onChange={(event) => onChange(6, event)} /></td>
                            ))}
                        </tr>
                        <tr>
                            <td className="bg-[#007ACC] text-center font-bold">8</td>
                            {table.map((item, index) => (
                                <td key={index}><input className="table text-black" type="text" name={item} onChange={(event) => onChange(7, event)} /></td>
                            ))}
                        </tr>
                        <tr>
                            <td className="bg-[#007ACC] text-center font-bold">9</td>
                            {table.map((item, index) => (
                                <td key={index}><input className="table text-black" type="text" name={item} onChange={(event) => onChange(8, event)} /></td>
                            ))}
                        </tr>
                        <tr>
                            <td className="bg-[#007ACC] text-center font-bold">10</td>
                            {table.map((item, index) => (
                                <td key={index}><input className="table text-black" type="text" name={item} onChange={(event) => onChange(9, event)} /></td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}