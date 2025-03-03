import React, { createContext, useEffect, useReducer, useState } from 'react'

function Exercise() {
    const reducer = (state, action) => {
       if(action.type === 'Increment') {
        return {
            count: state.count + 1
        }
       } if(action.type === 'Decrement') {
        return {
            count: state.count - 1
        }
       } if(action.type === 'Reset') {
        return {
            count: 0
        }
       }
    }
    const Counter = () => {
        const [state, dispatch] = useReducer(reducer, {count: 0})
        return (
            <div>
                <button onClick={() => dispatch({type: 'Increment'})}>Increment</button>
                <span>{state.count}</span>
                <button onClick={() => dispatch({type: 'Decrement'})}>Decrement</button>
                <div>
                <button onClick={() => dispatch({type: 'Reset'})}>Reset</button>
                </div>
            </div>
        )
    }

    function useDebounce(value, delay) {
        const [debounce,setDebounce] = useState(value);

        useEffect(() => {

            const handler = setTimeout(() => {
                setDebounce(value)
            }, delay)

            return () => {
                clearTimeout(handler)
            }

        }, [value, delay])
        return debounce
    }
    const Debouncing = () => {
        const [inputVal, setInputVal] = useState('')

        const debounceVal = useDebounce(inputVal, 500)

        const handleInputChange = (e) => {
            setInputVal(e.target.value)
        }

        useEffect(() => {
            console.log("value: ", debounceVal)
        }, [debounceVal])
        return (
            <div>
               <input type='text' value={inputVal} onChange={handleInputChange} />
               <p>Debounced value: {debounceVal}</p>
            </div>
        )
    }

    const ThemeSwitching = () => {
        const themeContext = createContext('light')

        const [theme, setTheme] = useState('light')
        return (
            <themeContext.Provider value={theme}>
                  <button>
                    Click me
                  </button>
                  <p>
                    Hello all
                  </p>
            </themeContext.Provider>
        )
    }

    const Pagination = () => {
        const noOfPages = 30
        const [productsList, setProductsList] = useState([])
        const fetchProducts = async () => {
            try {
                fetch('')
                .then(res => res.json)
                .then(() => {
                  
                }).catch((err) => alert('Error in fetching data'))
            } catch (error) {
                
            }
        }

        const [productsPerPage, setProductsPerPage] = useState(10)

        const [currentPage, setCurrentPage] = useState(1)

       
        const paginations = []

        for(let i = 0; i < productsList.length; i++) {
            paginations.push(i);
        }
        
        return (
            <>
              <div>
                {productsList.map((product, id) => (
                    <div key={id}>
                        {product.description}
                    </div>
                ))}

               {paginations.map((ele) => (
                <div style={{width: '20px', height: '20px', boxShadow: 'rgba(0, 0.2, 0.1 1)'}}>
                    {ele} 
                </div>
               ))}



              </div>
            </>
        )
    }
    
  return (
    <div>
          <Counter />
          <Debouncing />
          <ThemeSwitching />
    </div>
  )
}

export default Exercise