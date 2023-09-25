// import React from 'react';
// import { render } from '@testing-library/react';

// export function renderWithProviders(
    //     ui,
    //     {...renderOptions}={} //options null
    // ){
        //     function Wrapper({children}){
            //         return(<Provider store={store}>{children}</Provider>)
            //     }
            //     return {store, ...render(ui, {wrapper: Wrapper})};
            // }

import React from 'react'
import {render} from '@testing-library/react'
import { Provider } from 'react-redux';
import  store  from '../app/store';// donot destructure if exported as default

const AllTheProviders = ({children}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

const rtl = require('@testing-library/react')
const customRender = (ui, options) =>
  rtl.render(<Provider store={store}>
    {ui}
</Provider>,
 {
    myDefaultOption: 'something',
    ...options,
})

// re-export everything
export * from '@testing-library/react'




export default{
  ...rtl,
  render: customRender,
}