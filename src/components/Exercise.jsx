import React, { createContext, useEffect, useReducer, useState } from 'react';

// Theme Context (Declared Outside)
const ThemeContext = createContext('light');

function Exercise() {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'Increment':
                return { count: state.count + 1 };
            case 'Decrement':
                return { count: state.count - 1 };
            case 'Reset':
                return { count: 0 };
            default:
                return state;
        }
    };

    const Counter = () => {
        const [state, dispatch] = useReducer(reducer, { count: 0 });

        return (
            <div>
                <button onClick={() => dispatch({ type: 'Increment' })}>Increment</button>
                <span>{state.count}</span>
                <button onClick={() => dispatch({ type: 'Decrement' })}>Decrement</button>
                <div>
                    <button onClick={() => dispatch({ type: 'Reset' })}>Reset</button>
                </div>
            </div>
        );
    };

    function useDebounce(value, delay) {
        const [debounced, setDebounced] = useState(value);

        useEffect(() => {
            const handler = setTimeout(() => {
                setDebounced(value);
            }, delay);

            return () => {
                clearTimeout(handler);
            };
        }, [value, delay]);

        return debounced;
    }

    const Debouncing = () => {
        const [inputVal, setInputVal] = useState('');
        const debounceVal = useDebounce(inputVal, 500);

        useEffect(() => {
            console.log('Debounced value:', debounceVal);
        }, [debounceVal]);

        return (
            <div>
                <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
                <p>Debounced value: {debounceVal}</p>
            </div>
        );
    };

    const ThemeSwitching = () => {
        const [theme, setTheme] = useState('light');

        return (
            <ThemeContext.Provider value={theme}>
                <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                    Toggle Theme
                </button>
                <p>Current Theme: {theme}</p>
            </ThemeContext.Provider>
        );
    };

    const FilteringSearchBar = () => {
        
    }

    return (
        <div>
            <Counter />
            <Debouncing />
            <ThemeSwitching />
        </div>
    );
}

export default Exercise;
