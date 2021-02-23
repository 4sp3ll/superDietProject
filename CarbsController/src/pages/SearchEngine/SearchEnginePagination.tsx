import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Pagination, Spinner } from 'react-bootstrap';
import axios from 'axios'
import allActions from '../../redux/actions/index'

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
    const stringFromRequest = useSelector((state: any) => state.apiSearchEngineReducer.stringRequest)
    const isLoading = useSelector((state: State) => state.apiSearchEngineReducer.loading)
    const dispatch = useDispatch()
    const [selectedState, setSelectedState] = useState(1)


    const pagesNumber = products !== null ? Math.ceil((Number(products.data.count)) / 24) : 0

    const pagesArray = []

    if (products !== null) {
      for (let i=0; i<pagesNumber; i++) {
        pagesArray.push(i)
      }
    }

  const request = (e: string) => {
    dispatch(allActions.searchEngineBegin())
    axios.get(`${e}`)
        .then((response: object) => dispatch(allActions.searchEngineSuccess(response)))
        .catch((error: string) => dispatch(allActions.searchEngineError(error)))
    }

    useEffect(() => {
      const loadingHandler = () => {
        if (isLoading !== true) {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
        }
      }
      loadingHandler()
    }, [isLoading])

    return (
      <Pagination size='lg' aria-label='Page navigation' style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
        <Pagination.First
        disabled={selectedState === 1 || isLoading}
        onClick={() => {
          request(`${process.env.REACT_APP_API}/cgi/search.pl?action=process&json=true&page_size=24&
          page=${1}&${stringFromRequest}`);
          setSelectedState(1)
        }}
        />
        <Pagination.Prev
        disabled={selectedState === 1 || isLoading}
        onClick={() => {
          request(`${process.env.REACT_APP_API}/cgi/search.pl?action=process&json=true&page_size=24&
          page=${selectedState - 1}&${stringFromRequest}`);
          setSelectedState(selectedState - 1)
        }}
        />
        {pagesArray.map((e: any, index, array) => {
          if (array.indexOf(e) < selectedState + 3 && array.indexOf(e) > selectedState - 5) {
            return (
              <Pagination.Item
              active={e+1 === selectedState}
              disabled={isLoading}
              key={index}
              onClick={() => {
              request(`${process.env.REACT_APP_API}/cgi/search.pl?action=process&json=true&page_size=24&page=${e+1}&${stringFromRequest}`);
              setSelectedState(e+1)
              }}
              >
                {e+1 === selectedState && isLoading ? <Spinner style={{width: '1.5rem', height: '1.5rem'}} animation="border" /> : e+1}
              </Pagination.Item>
            )
        }
        })}
        <Pagination.Next
        disabled={selectedState == pagesNumber || isLoading}
        onClick={() => {
          request(`${process.env.REACT_APP_API}/cgi/search.pl?action=process&json=true&page_size=24&page=${selectedState + 1}&${stringFromRequest}`);
          setSelectedState(selectedState + 1)
        }}
        />
        <Pagination.Last
        disabled={selectedState == pagesNumber || isLoading}
        onClick={() => {
          request(`${process.env.REACT_APP_API}/cgi/search.pl?action=process&json=true&page_size=24&page=${pagesNumber}&${stringFromRequest}`);
          setSelectedState(pagesNumber);
          console.log(`${process.env.REACT_APP_API}/cgi/search.pl?action=process&json=true&page_size=24&page=${pagesNumber}&${stringFromRequest}`)
        }}
        />
      </Pagination>
    );
  }

  export default SearchEnginePagination;
