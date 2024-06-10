import { useState, useEffect } from 'react'
import styled from 'styled-components';
import Screen from './screens';

const Counter = ({ end, duration }) => {
    const [count, setCount] = useState(0)
    {/** Counter animation */}
    useEffect(() => {
        let start = 0;
        const endCount = parseInt(end, 10)
        if(start === end) return;
    
        let totalDuration = parseInt(duration, 10)
        let incrementTime = (totalDuration / endCount) * 1000;
    
        let timer = setInterval(() => {
          start += 5;
          setCount(start)
          if(start === endCount) clearInterval(timer);
        }, incrementTime)
    
        return () => clearInterval(timer)
      }, [end, duration])
    return (
    <div>
      <Text>{count}+</Text>
    </div>
  )
}

export default Counter

/** STYLES */
const Text = styled.h3`
font-size: 40px;
font-weight: 700;
text-align: center!important;

${Screen.iPhone14ProMax`
  font-size: 24px;
`}
`