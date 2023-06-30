export default function InputContainer({ handleChange }) {
    return (
        <>
            <NameContainer handleChange={handleChange} />
            <PhoneContainer handleChange={handleChange} />
            <EmailContainer handleChange={handleChange} />
        </>
    )
}

function NameContainer({ handleChange }) {
    return (
        <>
            <div id="name-container">
                <h1 className="font-bold text-xl">NAME <span id='asterik'>*</span></h1>
                <input className="input mt-2" type="text" name="firstName" onChange={handleChange} />
                <h4>First Name</h4>
                <input className="input" type="text" name="lastName" onChange={handleChange} />
                <h4>Last Name</h4>
            </div>
        </>
    )
}

function PhoneContainer({ handleChange }) {
    return (
        <>
            <div id="phone-container">
                <h1 className="font-bold text-xl py-2">PHONE NUMBER</h1>
                <div className="flex w-full">
                    {/* <div className="flex flex-col w-[30%] mr-2">
                        <input className="border-[1px] rounded-md border-[#808080]" type="text" />
                        <span className="pl-1">Area Code</span>
                    </div> */}
                    <div className="flex flex-col w-full">
                        <input className="border-[1px] rounded-md border-[#808080]" type="tel" name="phone" onChange={handleChange} />
                        <label>Phone Number (format: xxx-xxx-xxxx)</label>
                    </div>
                </div>
            </div>
        </>
    )
}

function EmailContainer({ handleChange }) {
    return (
        <>
            <div id="email-container">
                <h1 className="font-bold text-xl py-2">E-MAIL</h1>
                <div>
                    <input className="input mt-2" type="email" name="email" onChange={handleChange} />
                    <span>Ex: jake@example.com</span>
                </div>
            </div>
        </>
    )
}