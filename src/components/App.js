import { useState } from "react";
import { regionPhoneNumbers } from "../data.js"
import SVGMap from "./SVGMap";

function App() {
  const [phoneNumberQueue, setPhoneNumberQueue] = useState([]);

  
  /* Map a region to a phone number and update the phone number queue. Does NOT check if the
     phone number is already in the queue. Does nothing if provided region is not mapped to
     phone number */
  function updatePhoneNumbers(region) {
    if (region in regionPhoneNumbers) {
      setPhoneNumberQueue(phoneNumberQueue.concat([regionPhoneNumbers[region]]));
    }
  }

  return (
    <div className="App">
      <main>
        <SVGMap updatePhoneNumbers = {updatePhoneNumbers}/>
        <p id="placeholder">{phoneNumberQueue}</p>
      </main>
      
    </div>
  );
}

export default App;
