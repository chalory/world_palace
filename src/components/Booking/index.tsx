import React, { useState, useRef, } from 'react';
import './styles.css';
import Slideshow from "./index2";



const Booking: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showNextPage, setShowNextPage] = useState<boolean>(false);

  const handleNextClick = () => {
    setShowNextPage(true);
  };

  // const handleButtonClick = (room: string) => {
  //   setSelectedRoom(room);
  //   setShowForm(true); // Add this line
  //   setShowNextPage(false);

  // };
  const handleCloseForm = () => {
    setShowForm(false);
    setShowNextPage(false);

  };

  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // ...existing submit logic...
    setShowForm(false);
  };
const [isChecked, setIsChecked] = useState(false);

const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setIsChecked(event.target.checked);
};

const images = ["https://ateressi.sirv.com/IMG_20230421_173711.jpg", "https://ateressi.sirv.com/IMG_20230421_174539.jpg", "https://ateressi.sirv.com/DSC_0775.jpg"];

const roomImages: { [key: string]: string[] } = {

  'room1': ["https://ateressi.sirv.com/IMG_20230421_173711.jpg", "https://via.placeholder.com/250"],
  
  'room2': ["https://ateressi.sirv.com/IMG_20230421_174539.jpg", "https://ateressi.sirv.com/DSC_0775.jpg"],
  // Add more rooms as needed
};

const [currentImages, setCurrentImages] = useState<string[]>([]);

const handleButtonClick = (room: string) => {
  setCurrentImages(roomImages[room]);
  setSelectedRoom(room);
  setShowForm(true); // Add this line
  setShowNextPage(false);
};


  

  return (
    <div>
      <div className="ktvrooms">
        <button className="room1" onClick={() => handleButtonClick('room1')}><img width="100%" src="https://via.placeholder.com/150" alt="1room" /> Country room1 </button>
        <button className="room2" onClick={() => handleButtonClick('room2')}><img width="100%" src="https://via.placeholder.com/150" alt="2room" /> Country room2 </button>
        <button className="room3" onClick={() => handleButtonClick('room3')}><img width="100%" src="https://via.placeholder.com/150" alt="3room" /> Country room3 </button>
        <button className="room4" onClick={() => handleButtonClick('room4')}><img width="100%" src="https://via.placeholder.com/150" alt="4room" /> Country room4 </button>
        <button className="room5" onClick={() => handleButtonClick('room5')}><img width="100%" src="https://via.placeholder.com/150" alt="5room" /> Country room5 </button>
        <button className="room6" onClick={() => handleButtonClick('room6')}><img width="100%" src="https://via.placeholder.com/150" alt="6room" /> Country room6 </button>
        <button className="room7" onClick={() => handleButtonClick('room7')}><img width="100%" src="https://via.placeholder.com/150" alt="7room" /> Country room7 </button>
        <button className="room8" onClick={() => handleButtonClick('room8')}><img width="100%" src="https://via.placeholder.com/150" alt="8room" /> Country room8 </button>
        
      </div>
      
<div className={showForm ? 'Overlay' : ''}>
        {selectedRoom && showForm && (
          <div className="floating-form" style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1, display: 'flex',}}>        
            <div style={{backgroundColor: 'beige', padding: '10px'}}>
              {!showNextPage ? (<div className='showit'>
              <Slideshow images={currentImages} />
                <button className='nxtbtn' onClick={handleNextClick}>Next</button>
                <p>hello this is room etcetccetc</p> </div> ) : (
                <form onSubmit={handleSubmit}>
                  <button onClick={handleCloseForm} style={{position: 'absolute', right: 0}}>X</button>
                  <div className='input-block'></div>
            <label>Date:
              <input type="date" name="date" />
              </label>
              <label>
                Time:
                <input type="time" name="time" />
                </label>
                 <label>
                  Name:
                  <input type="text" name="reservationName" />
                  </label>
                  <label>
                  Contact number:
                  <input type="text" name='phone' />
                  </label>
                   <label>
                   Number of pax:
                  <input type="number" name='pax' min="1" />
                  </label>
                  <label>
                  Order In Advance
                  <input type="checkbox" onChange={handleCheckboxChange} />
                </label>
                {isChecked && (
                  <label>
                    Additional text box:
                    <input type="text" />
                  </label>
                )}
                  <input className='submeet' type="submit" value="Submit"/>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;