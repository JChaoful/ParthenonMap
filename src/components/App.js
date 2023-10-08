import { useState } from "react";
import { regionPhoneJSON } from "../data.js"
import PhoneNumbers from "./PhoneNumbers.js";
import SVGMap from "./SVGMap";

function App() {
  const [phoneNumberQueue, setPhoneNumberQueue] = useState(new Set([]));
  
  /* Update the phone number queue with a region's phone number. If the phone number is
     already in the queue, remove it. Otherwise, add the phone number to the queue. 
     Does nothing if provided region is not mapped to phone number */
  function updatePhoneNumbers(region) {
    if (region in regionPhoneJSON) {
      const regionPhoneNumber = `${region}: ${regionPhoneJSON[region]}`
    
      let newQueue = new Set(Array.from(phoneNumberQueue));

      if (phoneNumberQueue.has(regionPhoneNumber)) {
        newQueue.delete(regionPhoneNumber);
      } else {
        newQueue.add(regionPhoneNumber);
      }

      setPhoneNumberQueue(newQueue);      
    } 
  }

  return (
    <div className="App">
      <main>
        <SVGMap updatePhoneNumbers = {updatePhoneNumbers}/>
        <PhoneNumbers phoneNumberQueue={phoneNumberQueue}/>
      </main>
      
    </div>
  );
}

export default App;
