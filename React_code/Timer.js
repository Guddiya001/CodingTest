import { useRef, useState } from 'react';

export default function Counter() {
  const [start, setStart] = useState(0);
  const [now, setNow] =useState(0);
  const ref = useRef();

const startTimer = () =>{

setStart(Date.now())
setNow(Date.now())

clearInterval(ref.current)
ref.current = setInterval( () =>{
  setNow(Date.now())
}, 10)

}

const stopTimer =() =>{
  clearInterval(ref.current)
}


  return (
    <div>
     <h2> Time : {(now - start  )/1000} </h2>

     <button onClick={() => {startTimer()}}>Start</button>
      <button onClick={() => {stopTimer()}}>Stop</button>
    </div>
  );

}
