import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';


export const Timer = () => {

  const initialTime = new Date(0, 0, 0, 0, 0, 0)
  const [currentTime, setCurrentTime] = useState(initialTime);
  const [isPlaying, setIsPlaying] = useState(false);
  const rendersCount = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying) {
        setCurrentTime((prevTime) => new Date(prevTime.getTime() + 1000));
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying]);

  useEffect(() => {
    rendersCount.current += 1;
  });

  const togglePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const resetTimer = () => {
    setCurrentTime(initialTime);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-slate-100'>
      <div className="flex flex-col items-center text-black">
        <h1 className="text-7xl pb-8">{currentTime.toLocaleTimeString([], { minute: '2-digit', second: '2-digit' })}</h1>
        <h3 className="text-xl pb-8">Number of component renders: {rendersCount.current}</h3>
      </div>
      <hr className='border-t-1 border-slate-400 my-4 mx-4 w-10/12 pb-4' />
      <div className="flex flex-col items-center">
        {isPlaying ? (
          <>
            <button className="w-40 bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 my-2 rounded"
              onClick={togglePlayPause}>
              <FontAwesomeIcon icon={faPause} />  Pause
            </button>
            <button className="w-40 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 my-2 rounded"
              onClick={resetTimer}>
              Reset
            </button>
          </>
        ) : (
          <button className="w-40 bg-green-600 hover:bg-green-700 text-white font-bold py-2 my-2 rounded"
            onClick={togglePlayPause}>
            <FontAwesomeIcon icon={faPlay} /> Play
          </button>
        )}


      </div>
    </div>
  )
}
