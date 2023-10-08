function PhoneNumbers({phoneNumberQueue}){
    const phoneNumbers = Array.from(phoneNumberQueue)
        .map((phoneNumber, index) => 
            <span class="phoneNumber" key={index}>{phoneNumber}</span>
        );

    return (
        <div id="phoneNumberTable">
            {phoneNumbers}
        </div>
    );
}

export default PhoneNumbers;