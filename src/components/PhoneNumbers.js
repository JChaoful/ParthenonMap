function PhoneNumbers({phoneNumberQueue}){

    const phoneNumbers = Array.from(phoneNumberQueue).map((phoneNumber, index) => 
        <p key={index}>{phoneNumber}</p>
    );
    console.log(phoneNumbers);

    return (
        <div id="phoneNumbers">
            {phoneNumbers}
        </div>
    );
}

export default PhoneNumbers;