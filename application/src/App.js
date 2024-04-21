// // import React, { useState } from 'react';
// // import DatePicker from 'react-datepicker';
// // import "react-datepicker/dist/react-datepicker.css";
// // import moment from 'moment';
// // import home from './components/Home';

// // const AttendanceTracker = () => {
// //   const [selectedDay, setSelectedDay] = useState('');
// //   const [attendance, setAttendance] = useState('');
// //   const [startDate, setStartDate] = useState(new Date());
// //   const [loginTime, setLoginTime] = useState(null);
// //   const [logoutTime, setLogoutTime] = useState(null);
// //   const [totalHours, setTotalHours] = useState('');

// //   const handleLogin = () => {
// //     setLoginTime(new Date());
// //   };

// //   const handleLogout = () => {
// //     const logout = new Date();
// //     setLogoutTime(logout);
// //     const duration = moment.duration(moment(logout).diff(moment(loginTime)));
// //     setTotalHours(`${duration.hours()} hours and ${duration.minutes()} minutes`);
// //   };

// //   return (
// //     <div>
// //       <h2>Attendance Tracker</h2>
// //       <label>
// //         Select Day:
// //         <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
// //           <option value="Sunday">Sunday</option>
// //           <option value="Monday">Monday</option>
// //           <option value="Tuesday">Tuesday</option>
// //           <option value="Wednesday">Wednesday</option>
// //           <option value="Thursday">Thursday</option>
// //           <option value="Friday">Friday</option>
// //           <option value="Saturday">Saturday</option>
// //         </select>
// //       </label>
// //       <br />
// //       <label>
// //         Date:
// //         <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
// //       </label>
// //       <br />
// //       <button onClick={() => setAttendance('Present')}>Present</button>
// //       <button onClick={() => setAttendance('Absent')}>Absent</button>
// //       <br />
// //       <button onClick={handleLogin}>Login</button>
// //       {loginTime && <p>Login Time: {moment(loginTime).format('HH:mm')}</p>}
// //       <br />
// //       <button onClick={handleLogout}>Logout</button>
// //       {logoutTime && <p>Logout Time: {moment(logoutTime).format('HH:mm')}</p>}
// //       <br />
// //       {totalHours && <p>Total Hours Worked: {totalHours}</p>}
// //     </div>
// //   );
// // };

// // export default AttendanceTracker;




// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [startTime, setStartTime] = useState(null);
//   const [stopTime, setStopTime] = useState(null);
//   const [isTracking, setIsTracking] = useState(false);
//   const [totalHours, setTotalHours] = useState(0);
//   const [totalMinutes, setTotalMinutes] = useState(0);
//   const [totalSeconds, setTotalSeconds] = useState(0);
//   const [delay, setDelay] = useState(0);

//   useEffect(() => {
//     let interval;

//     if (isTracking) {
//       interval = setInterval(() => {
//         const now = new Date().getTime();
//         if (startTime) {
//           const elapsedTime = now - startTime;
//           const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//           const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
//           const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
//           setTotalHours(hours);
//           setTotalMinutes(minutes);
//           setTotalSeconds(seconds);
//         }
//       }, 1000);
//     } else {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval);
//   }, [isTracking, startTime]);

//   const handleStart = () => {
//     setStartTime(new Date().getTime());
//     setIsTracking(true);
//   };

//   const handleStop = () => {
//     setStopTime(new Date().getTime());
//     setIsTracking(false);

//     const now = new Date().getTime();
//     const elapsedTime = now - startTime;
//     const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
//     setTotalHours(hours);
//     setTotalMinutes(minutes);
//     setTotalSeconds(seconds);

//     const loginTime = new Date(startTime);
//     if (loginTime.getHours() < 9) {
//       setDelay(0);
//     } else {
//       const loginMinutes = loginTime.getMinutes();
//       const delayMinutes = loginMinutes > 0 ? 60 - loginMinutes : 0;
//       setDelay(delayMinutes);
//     }
//   };

//   const handleReset = () => {
//     setStartTime(null);
//     setStopTime(null);
//     setIsTracking(false);
//     setTotalHours(0);
//     setTotalMinutes(0);
//     setTotalSeconds(0);
//     setDelay(0);
//   };

//   return (
//     <div className="App">
//       <h1>Employee Time Tracker</h1>
//       <div className="stopwatch">
//         <div className="display">
//           <span>
//             {totalHours.toString().padStart(2, '0')}:
//             {totalMinutes.toString().padStart(2, '0')}:
//             {totalSeconds.toString().padStart(2, '0')}
//           </span>
//         </div>
//         <div className="buttons">
//           {!isTracking ? (
//             <button onClick={handleStart}>Login</button>
//           ) : (
//             <button onClick={handleStop}>Logout</button>
//           )}
//           <button onClick={handleReset}>Reset</button>
//         </div>
//       </div>
//       {startTime && stopTime && (
//         <div className="info">
//           <p>Total working time: {totalHours} hours {totalMinutes} minutes</p>
//           <p>Delay in login: {delay} minutes</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [startTime, setStartTime] = useState(null);
  const [stopTime, setStopTime] = useState(null);
  const [isTracking, setIsTracking] = useState(false);
  const [totalHours, setTotalHours] = useState(0);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [delay, setDelay] = useState(0);
  const [loginSlot, setLoginSlot] = useState('');
  const [loginDay, setLoginDay] = useState('');
  const [loginDate, setLoginDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');

  useEffect(() => {
    let interval;

    if (isTracking) {
      interval = setInterval(() => {
        const now = new Date().getTime();
        if (startTime) {
          const elapsedTime = now - startTime;
          const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
          setTotalHours(hours);
          setTotalMinutes(minutes);
          setTotalSeconds(seconds);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isTracking, startTime]);

  const handleStart = () => {
    setStartTime(new Date().getTime());
    setIsTracking(true);

    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    if ((hour === 9 && minute > 0) || (hour === 10 && minute < 60)) {
      setLoginSlot('first');
    } else {
      setLoginSlot('second');
    }
    setLoginDay(now.toLocaleDateString('en-US', { weekday: 'long' }));
    setLoginDate(now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
    setLoginSlot(selectedSlot);
  };

  const handleStop = () => {
    setStopTime(new Date().getTime());
    setIsTracking(false);

    const now = new Date().getTime();
    const elapsedTime = now - startTime;
    const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    setTotalHours(hours);
    setTotalMinutes(minutes);
    setTotalSeconds(seconds);

    const loginTime = new Date(startTime);
    const loginHour = loginTime.getHours();
    const loginMinute = loginTime.getMinutes();
    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();

    if (loginHour === 9 && loginMinute <= 10) {
      setDelay(currentHour === 9 ? currentMinute - loginMinute : 10 + currentMinute - loginMinute);
    } else {
      setDelay(currentHour === 10 ? currentMinute - loginMinute : 60 + currentMinute - loginMinute);
    }
  };

  const handleLogout = () => {
    handleStop();
    setSelectedSlot('');
  };

  const handleSelectSlot = (e) => {
    setSelectedSlot(e.target.value);
  };

  return (
    <div className="App">
      <h1>Employee Time Tracker</h1>
      <div className="stopwatch">
        <div className="display">
          <span>
            {totalHours.toString().padStart(2, '0')}:
            {totalMinutes.toString().padStart(2, '0')}:
            {totalSeconds.toString().padStart(2, '0')}
          </span>
        </div>
        <div className="buttons">
          {!isTracking ? (
            <div>
              <select onChange={handleSelectSlot} value={selectedSlot}>
                <option value="">Select Time Slot</option>
                <option value="first">9:00 AM - 6:00 PM</option>
                <option value="second">10:00 AM - 7:00 PM</option>
              </select>
              <button onClick={handleStart} disabled={!selectedSlot}>Login</button>
            </div>
          ) : (
            <button onClick={handleLogout}>Logout</button>
          )}
        </div>
      </div>
      {startTime && stopTime && (
        <div className="info">
          <p>Login Time Slot: {loginSlot === 'first' ? '9:00 AM - 6:00 PM' : '10:00 AM - 7:00 PM'}</p>
          <p>Login Date: {loginDate}</p>
          <p>Login Day: {loginDay}</p>
          <p>Total working time: {totalHours} hours {totalMinutes} minutes</p>
          {delay > 0 && <p>Delayed by: {delay} minutes</p>}
        </div>
      )}
    </div>
  );
}

export default App;










// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [startTime, setStartTime] = useState(null);
//   const [stopTime, setStopTime] = useState(null);
//   const [isTracking, setIsTracking] = useState(false);
//   const [totalHours, setTotalHours] = useState(0);
//   const [totalMinutes, setTotalMinutes] = useState(0);
//   const [totalSeconds, setTotalSeconds] = useState(0);
//   const [delay, setDelay] = useState(0);
//   const [loginSlot, setLoginSlot] = useState('');
//   const [loginDay, setLoginDay] = useState('');
//   const [loginDate, setLoginDate] = useState('');
//   const [selectedSlot, setSelectedSlot] = useState('');

//   useEffect(() => {
//     let interval;

//     if (isTracking) {
//       interval = setInterval(() => {
//         const now = new Date().getTime();
//         if (startTime) {
//           const elapsedTime = now - startTime;
//           const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//           const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
//           const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
//           setTotalHours(hours);
//           setTotalMinutes(minutes);
//           setTotalSeconds(seconds);
//         }
//       }, 1000);
//     } else {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval);
//   }, [isTracking, startTime]);

//   const handleStart = () => {
//     setStartTime(new Date().getTime());
//     setIsTracking(true);

//     const now = new Date();
//     const hour = now.getHours();
//     const minute = now.getMinutes();
//     if ((hour === 9 && minute > 0) || (hour === 10 && minute < 60)) {
//       setLoginSlot('first');
//     } else {
//       setLoginSlot('second');
//     }
//     setLoginDay(now.toLocaleDateString('en-US', { weekday: 'long' }));
//     setLoginDate(now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
//     setLoginSlot(selectedSlot);
//   };

//   const handleStop = () => {
//     setStopTime(new Date().getTime());
//     setIsTracking(false);

//     const now = new Date().getTime();
//     const elapsedTime = now - startTime;
//     const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
//     setTotalHours(hours);
//     setTotalMinutes(minutes);
//     setTotalSeconds(seconds);

//     const loginTime = new Date(startTime);
//     if (loginTime.getHours() === 9 && loginTime.getMinutes() <= 10) {
//       setDelay(0);
//     } else {
//       const loginMinutes = loginTime.getMinutes();
//       const delayMinutes = loginMinutes > 0 ? 10 - loginMinutes : 0;
//       setDelay(delayMinutes);
//     }
//   };

//   const handleLogout = () => {
//     handleStop();
//     setSelectedSlot('');
//   };

//   const handleSelectSlot = (e) => {
//     setSelectedSlot(e.target.value);
//   };

//   return (
//     <div className="App">
//       <h1>Employee Time Tracker</h1>
//       <div className="stopwatch">
//         <div className="display">
//           <span>
//             {totalHours.toString().padStart(2, '0')}:
//             {totalMinutes.toString().padStart(2, '0')}:
//             {totalSeconds.toString().padStart(2, '0')}
//           </span>
//         </div>
//         <div className="buttons">
//           {!isTracking ? (
//             <div>
//               <select onChange={handleSelectSlot} value={selectedSlot}>
//                 <option value="">Select Time Slot</option>
//                 <option value="first">9:00 AM - 6:00 PM</option>
//                 <option value="second">10:00 AM - 7:00 PM</option>
//               </select>
//               <button onClick={handleStart} disabled={!selectedSlot}>Login</button>
//             </div>
//           ) : (
//             <button onClick={handleLogout}>Logout</button>
//           )}
//         </div>
//       </div>
//       {startTime && stopTime && (
//         <div className="info">
//           <p>Login Time Slot: {loginSlot === 'first' ? '9:00 AM - 6:00 PM' : '10:00 AM - 7:00 PM'}</p>
//           <p>Login Date: {loginDate}</p>
//           <p>Login Day: {loginDay}</p>
//           <p>Total working time: {totalHours} hours {totalMinutes} minutes</p>
//           {delay > 0 && <p>Delayed by: {delay} minutes</p>}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
  






