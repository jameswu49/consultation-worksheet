export default function Mortgages({ mortgage, setMortgage }) {

    function handleChange(e) {
        let updatedValue = {};
        updatedValue = { name: e.target.value }
        setMortgage(mortgage => ({ ...mortgage, ...updatedValue }))
    }

    return (
        <>
            <input type="text" name="mortgage" className="input" onChange={handleChange} />
        </>
    )
}