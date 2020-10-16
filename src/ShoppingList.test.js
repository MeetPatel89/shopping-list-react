import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingList from './ShoppingList';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'; 

describe('ShoppingList Componenet', () => {

    test('Renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<ShoppingList/>, div);

        ReactDOM.unmountComponentAtNode(div);
    })

    test('renders empty given no items', () => {
        const wrapper = shallow(<ShoppingList/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    test('renders ShoppingItems when supplied with an items prop', () => {
        const testItems = [
            {name: 'test-item1', checked: false},
            {name: 'test-item2', checked: true},
            {name: 'test-items3', checked: true}
        ]
        const wrapper = shallow(<ShoppingList items={testItems}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

})