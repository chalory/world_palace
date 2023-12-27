import React, { useState, useRef, } from 'react';
import './styles.css';


const Booking: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showNextPage, setShowNextPage] = useState<boolean>(false);

  const handleNextClick = () => {
    setShowNextPage(true);
  };

  const handleButtonClick = (room: string) => {
    setSelectedRoom(room);
    setShowForm(true); // Add this line
    setShowNextPage(false);

  };
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

const picroom1 = ['/svg/graphs.jpg', '/svg/github.svg', 
'/svg/developer2.png', '/svg/developer3.png' 
]
var i = 0;
function imageslide() {
      document.getElementById("slyde").src = picroom1[i]
    
    if(i < picroom1.length -1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(imageslide, 2500);
   };
window.onload = imageslide;


  

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
                <script src='/slideshow.js'></script>
                <img id='slyde' src="/img/svg/developer.png" alt="" />
                <button className='nxtbtn' onClick={handleNextClick}>Next</button>
                </div> ) : (
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