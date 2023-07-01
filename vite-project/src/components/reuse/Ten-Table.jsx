export default function TenTable({ table }) {
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
                        <tr>
                            <td className="bg-[#007ACC] text-center font-bold">4</td>
                            {table.map((item, index) => (
                                <td key={index}><input className="table" type="text" name={item} /></td>
                            ))}
                        </tr>
                        <tr>
                            <td className="bg-[#007ACC] text-center font-bold">5</td>
                            {table.map((item, index) => (
                                <td key={index}><input className="table" type="text" name={item} /></td>
                            ))}
                        </tr>
                        <tr>
                            <td className="bg-[#007ACC] text-center font-bold">6</td>
                            {table.map((item, index) => (
                                <td key={index}><input className="table" type="text" name={item} /></td>
                            ))}
                        </tr>
                        <tr>
                            <td className="bg-[#007ACC] text-center font-bold">7</td>
                            {table.map((item, index) => (
                                <td key={index}><input className="table" type="text" name={item} /></td>
                            ))}
                        </tr>
                        <tr>
                            <td className="bg-[#007ACC] text-center font-bold">8</td>
                            {table.map((item, index) => (
                                <td key={index}><input className="table" type="text" name={item} /></td>
                            ))}
                        </tr>
                        <tr>
                            <td className="bg-[#007ACC] text-center font-bold">9</td>
                            {table.map((item, index) => (
                                <td key={index}><input className="table" type="text" name={item} /></td>
                            ))}
                        </tr>
                        <tr>
                            <td className="bg-[#007ACC] text-center font-bold">10</td>
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