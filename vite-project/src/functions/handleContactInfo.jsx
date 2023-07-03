export const handleContactInfo = (event) => {
    const { name, value } = event.target;
    setContactInfo((prevData) => ({
        ...prevData,
        [name]: value,
    }));
};