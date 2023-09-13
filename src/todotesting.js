import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import  store  from './app/store';// donot destructure if exported as default

export function renderWithProviders(
    ui,
    {...renderOptions}={} //options null
){
    function Wrapper({children}){
        return(<Provider store={store}>{children}</Provider>)
    }
    return {store, ...render(ui, {wrapper: Wrapper})};
}