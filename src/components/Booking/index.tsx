import React, { useState } from 'react';
import './styles.css';

const Booking: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const handleButtonClick = (room: string) => {
    setSelectedRoom(room);
  };

  return (
    <div>
      <div className="ktvrooms">
        <button className="room1" onClick={() => handleButtonClick('room1')}><img width="100%" src="https://via.placeholder.com/150" alt="1room" /></button>
        <button className="room2" onClick={() => handleButtonClick('room2')}><img width="100%" src="https://via.placeholder.com/150" alt="2room" /></button>
        <button className="room3" onClick={() => handleButtonClick('room3')}><img width="100%" src="https://via.placeholder.com/150" alt="3room" /></button>
        <button className="room4" onClick={() => handleButtonClick('room4')}><img width="100%" src="https://via.placeholder.com/150" alt="4room" /></button>
        <button className="room5" onClick={() => handleButtonClick('room5')}><img width="100%" src="https://via.placeholder.com/150" alt="5room" /></button>
        <button className="room6" onClick={() => handleButtonClick('room6')}><img width="100%" src="https://via.placeholder.com/150" alt="6room" /></button>
        <button className="room7" onClick={() => handleButtonClick('room7')}><img width="100%" src="https://via.placeholder.com/150" alt="7room" /></button>
        <button className="room8" onClick={() => handleButtonClick('room8')}><img width="100%" src="https://via.placeholder.com/150" alt="8room" /></button>
        <button className="room9" onClick={() => handleButtonClick('room9')}></button>
        <button className="room10" onClick={() => handleButtonClick('room10')}></button>
        <button className="room11" onClick={() => handleButtonClick('room11')}></button>
        <button className="room12" onClick={() => handleButtonClick('room12')}></button>
        <button className="room13" onClick={() => handleButtonClick('room13')}></button>
        <button className="room14" onClick={() => handleButtonClick('room14')}></button>
        <button className="room15" onClick={() => handleButtonClick('room15')}></button>
        <button className="room16" onClick={() => handleButtonClick('room16')}></button>
      </div>
      {selectedRoom && (
        <div className="floating-form" style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>          <div style={{backgroundColor: 'beige', padding: '10px'}}>
            <form>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <label>
                Email:
                <input type="email" name="email" />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;