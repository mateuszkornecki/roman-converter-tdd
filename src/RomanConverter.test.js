import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import RomanConverter from './RomanConverter';

describe('RomanConverter', () => {
    afterEach(cleanup);

    it('has an input field ', () => {
        const { getByLabelText } = render(<RomanConverter />);
        expect(() => {
            getByLabelText(/arabic/i);
        }).not.toThrow();
    });

    it('shows no roman numbers by default', () => {
        const { getByText } = render(<RomanConverter />);

        expect(() => {
            getByText("none")
        }).not.toThrow();
    });

    it('converts 1 to I', () => {
        const { getByText, getByLabelText } = render(<RomanConverter />);
        fireEvent.change(getByLabelText(/arabic/i), { target: { value: "1" } });
        expect(() => {
            getByText("I")
        }).not.toThrow();
    });

    it('converts 99 to XCIX', () => {
        const { getByText, getByLabelText } = render(<RomanConverter />);
        fireEvent.change(getByLabelText(/arabic/i), { target: { value: "99" } });
        expect(() => {
            getByText("XCIX")
        }).not.toThrow();
    });

    it('converts 999 to CMXCIX', () => {
        const { getByText, getByLabelText } = render(<RomanConverter />);
        fireEvent.change(getByLabelText(/arabic/i), { target: { value: "999" } });
        expect(() => {
            getByText("CMXCIX")
        }).not.toThrow();
    });

    it('converts 2019 to MMXIX', () => {
        const { getByText, getByLabelText } = render(<RomanConverter />);
        fireEvent.change(getByLabelText(/arabic/i), { target: { value: "2019" } });
        expect(() => {
            getByText("MMXIX")
        }).not.toThrow();
    });
    it('converts 4000 to "please enter number < 4000"', () => {
        const { getByText, getByLabelText } = render(<RomanConverter />);
        fireEvent.change(getByLabelText(/arabic/i), { target: { value: "4000" } });
        expect(() => {
            getByText("please enter number < 4000")
        }).not.toThrow();
    });

});