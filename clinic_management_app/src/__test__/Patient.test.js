import store from '../Store/MyStore';
import { Provider } from 'react-redux';
import { mount,configure, render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import AddPatientContainer from '../components/AddPatientContainer';
import SearchPatientContainer from '../components/SearchPatientContainer';

import {MemoryRouter} from 'react-router-dom'

// import EditPatientContainer from '../components/EditPatuentContainer'

// import { Route, Routes } from "react-router";
// import { shallow,configure,mount} from 'enzyme';
// import { render, screen } from '@testing-library/react';
// import App from '../App';

configure({ adapter: new Adapter() });

describe('test for search doctor by speciality',()=>{
    test("checking search doesnt have errors",()=>{
        render(<Provider store={store}><SearchPatientContainer/></Provider>,{wrapper: MemoryRouter});
    })
    test("check the label tag",()=>{
        const wrapper=mount(<Provider store={store}><SearchPatientContainer/></Provider>)
        const content= <label >Speciality : </label>
        expect(wrapper.contains(content)).toBe(true);
    })
})
describe('test for add doctor',()=>{
    test("checking add doesnt have errors",()=>{
        render(<Provider store={store}><AddPatientContainer/></Provider>)
    })
    test("check the h3 tag",()=>{
        const wrapper=mount(<Provider store={store}><AddPatientContainer/></Provider>)
        const content=<h3>Fill the details to add Doctor</h3>
        expect(wrapper.contains(content)).toBe(true);
    })
})