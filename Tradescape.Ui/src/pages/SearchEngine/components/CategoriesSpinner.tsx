import React, { ReactElement, useState, useEffect } from 'react'
import { Spinner } from 'reactstrap'
import styled from 'styled-components'

const DivCenterHV = styled.div`{
  display: flex;
  justify-content: center;
  align-items: center;
}`


const categoriesLoading = [
            'collecting all categories...',
            'swapping time and space...',
            'it\'s still faster than you could draw it...',
            'counting backwards from Infinity...',
            'locating whipped cream...',
            'optimism is just a lack of information...'
            ]



const CategoriesSpinner = (): ReactElement => {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(second => (second === categoriesLoading.length ? 0 : second + 1));
      }, 3300);

      return () => clearInterval(interval);
    }, []);

    return (
      <div>

        <DivCenterHV><Spinner color="warning" style={{ width: '4rem', height: '4rem' }}/></DivCenterHV>
        <br/>
        <DivCenterHV><h3 style={{display: 'inline'}}>{categoriesLoading[seconds]}</h3></DivCenterHV>
      </div>
    );
  };

  export default CategoriesSpinner
