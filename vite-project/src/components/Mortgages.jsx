export default function Mortgages({ mortgage, setMortgage }) {

    function handleChange(e) {
        let updatedValue = {};
        updatedValue = { name: e.target.value }
        setMortgage(mortgage => ({ ...mortgage, ...updatedValue }))
    }

    function Header() {
        return (
            <>
                <div className="my-5">
                    <h1 className="text-red-500 font-extrabold text-2xl">MORTGAGES</h1>
                </div>
                <p className="font-bold">Please fill out all your mortgage information completely.</p>
            </>
        )
    }

    function Table() {
        return (
            <>
                <div className="overflow-auto">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Lender Name</th>
                                <th>Mortgage Start Date</th>
                                <th>Mortage Term</th>
                                <th>Monthly Payment* Including Escrows</th>
                                <th>Extra Principal Payment</th>
                                <th>Interest Rate</th>
                                <th>Escrow Payment</th>
                                <th>Mortgage Insurance Payment</th>
                                <th>Current Mortgage Balance</th>
                                <th>Original Mortgage Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="bg-[#007ACC]">1</td>
                                <td><input className="table" type="text" name="lender-name" /></td>
                                <td><input className="table" type="text" name="mortgage-start-date" /></td>
                                <td><input className="table" type="text" name="mortgage-start-date" /></td>
                                <td><input className="table" type="text" name="mortgage-start-date" /></td>
                                <td><input className="table" type="text" name="mortgage-start-date" /></td>
                                <td><input className="table" type="text" name="mortgage-start-date" /></td>
                                <td><input className="table" type="text" name="mortgage-start-date" /></td>
                                <td><input className="table" type="text" name="mortgage-start-date" /></td>
                                <td><input className="table" type="text" name="mortgage-start-date" /></td>
                                <td><input className="table" type="text" name="mortgage-start-date" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
    }

    return (
        <>
            <section>
                <Header />
                <Table />
            </section>
        </>
    )
}