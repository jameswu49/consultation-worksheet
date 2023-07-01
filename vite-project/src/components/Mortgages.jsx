import Title from "../components/reuse/Title"
import Table from "./reuse/Three-Table";
import mortagesArray from "../data/mortgages-data";
import TextBox from "./reuse/TextBox";


export default function Mortgages({ mortgage, setMortgage }) {

    function handleChange(e) {
        let updatedValue = {};
        updatedValue = { name: e.target.value }
        setMortgage(mortgage => ({ ...mortgage, ...updatedValue }))
    }

    function SubText() {
        return (
            <>
                <div className="mt-20 mb-10">
                    <p>*Including Principal, Interest, Escrow, etc. </p>
                </div>
            </>
        )
    }

    return (
        <>
            <section>
                <Title title='MORTGAGES' subtext='Please fill out all your mortgage information completely.' />
                <Table table={mortagesArray} />
                <SubText />
                <TextBox title='ADD EXTRA MORTGAGE INFO' />
            </section>
        </>
    )
}