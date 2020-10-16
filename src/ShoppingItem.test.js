import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingItem from './ShoppingItem';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

describe('ShoppingItem Component', () => {

    test('Renders component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ShoppingItem/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    test('renders empty given no item', () => {
        const wrapper = shallow(<ShoppingItem/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    test('renders the item when supplied', () => {
        const testItem = {name: 'test-item', checked: false}
        const wrapper = shallow(<ShoppingItem item={testItem}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    test('renders checked item when checked property is true', () => {
        const testItem = {name: 'test-item', checked: true}
        const wrapper = shallow(<ShoppingItem item={testItem}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})