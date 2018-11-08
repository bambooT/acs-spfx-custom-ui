import * as React from 'react';
import { configure, mount } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

import Dialog from '../lib/components/Dialog/Dialog';

describe('<Dialog />', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    it('renders dialog', () => {
        const tree = mount(<Dialog />);
        expect(toJson(tree)).toMatchSnapshot();
    });

    it('renders dialog with the right default props', () => {
        const tree = mount(<Dialog title="test" />);
        expect(toJson(tree)).toMatchSnapshot();
    });

    it('renders dialog with all props defined', () => {
        const tree = mount(
            <Dialog
                title="test"
                />
        );
        expect(toJson(tree)).toMatchSnapshot();
    });

    it('onChange event triggers calls onChange prop', () => {
        const onChange = jest.fn();
        const wrapper = mount(<Dialog />);

        // find checkbox
        const result = wrapper.find('input');
        expect(result).toHaveLength(1);
        const checkbox = result.at(0);

        // simulate checkbox change
        expect(onChange).not.toHaveBeenCalled();
        checkbox.simulate('change');
        expect(onChange).toHaveBeenCalled();
    });
});