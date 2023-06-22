export default function InputContainer({ setFirstName, setLastName, setEmail, setPhone }) {
    return (
        <>
            <NameContainer setFirstName={setFirstName} setLastName={setLastName} />
            <PhoneContainer setPhone={setPhone} />
            <EmailContainer setEmail={setEmail} />
        </>
    )
}

function NameContainer({ setFirstName, setLastName }) {
    return (
        <>
            <div id="name-container">
                <h1 className="font-bold text-xl">NAME <span id='asterik'>*</span></h1>
                <input className="input mt-2" type="text" onChange={(e) => setFirstName(e.target.value)} />
                <h4>First Name</h4>
                <input className="input" type="text" onChange={(e) => setLastName(e.target.value)} />
                <h4>Last Name</h4>
            </div>
        </>
    )
}

function PhoneContainer({ setPhone }) {
    return (
        <>
            <div id="phone-container">
                <h1 className="font-bold text-xl py-2">PHONE NUMBER</h1>
                <div className="flex w-full">
                    <div className="flex flex-col w-[30%] mr-2">
                        <input className="border-[1px] rounded-md border-[#808080]" type="text" />
                        <span className="pl-1">Area Code</span>
                    </div>
                    <div className="flex flex-col w-[65%]">
                        <input className="border-[1px] rounded-md border-[#808080]" type="text" />
                        <span className="pl-1">Phone Number</span>
                    </div>
                </div>
            </div>
        </>
    )
}

function EmailContainer({ setEmail }) {
    return (
        <>
            <div id="email-container">
                <h1 className="font-bold text-xl py-2">E-MAIL</h1>
                <div>
                    <input className="input mt-2" type="email" onChange={(e) => setEmail(e.target.value)} />
                    <span>Ex: jake@example.com</span>
                </div>
            </div>
        </>
    )
}