import Title from "./reuse/Title"
import ThreeTable from "./reuse/Three-Table"
import incomeArray from "../data/income-data"
import TextBox from "./reuse/TextBox"

export default function Income() {
    return (
        <>
            <Title title='AVERAGE HOUSEHOLD NET INCOME' subtext='(Required) Please fill out all your income information completely.' asterik='*' />
            <ThreeTable table={incomeArray} />
            <TextBox title='ADD EXTRA INCOME' />
        </>
    )
}