import React from 'react'
import {mount, shallow} from 'enzyme';
import ReviewHeader from '../client/src/components/ReviewHeader';

describe('<ReviewHeader />', () => {
    it('Assert checked', () => {
        const wrapper = mount(<ReviewHeader />);
        expect(wrapper.find('#reviewHeader')).not.toBeChecked();
    });
});

describe('<ReviewHeader />', () => {
    it('Not to be empty render', () => {
        const wrapper = mount(<ReviewHeader />);
        expect(wrapper.find('#reviewHeader')).not.toBeEmptyRender();
    });
});

describe('<ReviewHeader />', () => {
    it('It is exist', () => {
        const wrapper = mount(<ReviewHeader />);
        expect(wrapper.find('#reviewHeader')).toExist();
    });
});

describe('<ReviewHeader />', () => {
    it('To have text', () => {
        const wrapper = mount(<ReviewHeader />);
        expect(wrapper.find('#reviewHeader')).toHaveText();
    });
});