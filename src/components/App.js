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
      <header>
        <h1>Map App</h1>
      </header>
      <main>
        <div id="instructions">
          <span><em>Instructions:</em> Click on a region on the map to show its phone number. Click the same region again to hide the phone number.</span>
        </div>
        <div id="phoneNumberDisplay">
          <SVGMap updatePhoneNumbers = {updatePhoneNumbers}/>
          <PhoneNumbers phoneNumberQueue={phoneNumberQueue}/>
        </div>
      </main>
      <footer>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
      </footer>
    </div>
  );
}

export default App;
