import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Pagination,
    PaginationItem,
    PaginationLink,
    Spinner
} from 'reactstrap';
import allActions from '../../../actions/index'
import axios from 'axios'
import ReactDOM from 'react-dom';

interface State {
    state: object,
    apiSearchEngineReducer: any,
    currentState: object | null,
    data: object,
    products: object,
    loading: boolean
}

const SearchEnginePagination = () => {
    const products = useSelector((state: State) => state.apiSearchEngineReducer.currentState)
    const stringFromRequest = useSelector((state: any) => state.apiSearchEngineReducer.payload)
    const isLoading = useSelector((state: State) => state.apiSearchEngineReducer.loading)
    const dispatch = useDispatch()
    const [selectedState, setSelectedState] = useState(1)


    const pagesNumber = products !== null ? (Math.ceil(Number(products.data.count)) / 24) : 0
    const pagesArray = []

    if (products !== null) {
    for (let i=0; i<=pagesNumber; i++) {
    pagesArray.push(i)
    }

  }
  console.log(pagesArray)
  console.log(pagesNumber)

  const request = (e: string) => {
    dispatch(allActions.searchEngineBegin())
    axios.get(`${e}`)
        .then((response: object) => dispatch(allActions.searchEngineSuccess(response)))
        .catch((error: string) => dispatch(allActions.searchEngineError(error)))
    }

    // How to scroll to an element?
    https://stackoverflow.com/questions/43441856/how-to-scroll-to-an-element
    // const myRef = useRef(null)
    // const executeScroll = () => myRef.current.scrollIntoView()


    useEffect(() => {
      window.scrollTo(0, 0);
    }, [selectedState]);

    return (
      <Pagination size='lg' aria-label='Page navigation'>
      <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        {pagesArray.map((e: any, index, array) => {
          // DO SPRAWDZENIA SENS LOGIKI, DZISIAJ NIE MAM JUZ SILY
          if (array.indexOf(e) < selectedState + 3 && array.indexOf(e) > selectedState - 5) {
            return (
                <PaginationItem active={e+1 === selectedState} key={index}>
                  <PaginationLink onClick={() => {
                    request(`${process.env.REACT_APP_API}/cgi/search.pl?action=process&json=true&page=${e+1}&${stringFromRequest}`);
                    setSelectedState(e+1)
                    }}>
                    {e+1 === selectedState && isLoading ? <Spinner style={{width: '1.5rem', height: '1.5rem'}} animation="border" /> : e+1}
                  </PaginationLink>
                </PaginationItem>
            )
        }
        // else {
        //     return {

        //     };
          // return (
          //   <PaginationItem key={index}>
          //     <PaginationLink onClick={() => {
          //       request(`${process.env.REACT_APP_API}/cgi/search.pl?action=process&json=true&page=${e+1}&${stringFromRequest}`)
          //       }}>
          //       {isLoading ? <Spinner animation="border" /> : e+1}
          //     </PaginationLink>
          //   </PaginationItem>
          // )
        })}
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem>
      </Pagination>
    );
  }

  export default SearchEnginePagination;
