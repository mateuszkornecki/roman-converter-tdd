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
            getByText("Roman: none")
        }).not.toThrow();
    });

    it('converts 1 to I', () => {
        const { getByText, getByLabelText } = render(<RomanConverter />);
        fireEvent.change(getByLabelText(/arabic/i), { target: { value: "1" } });
        expect(() => {
            getByText("Roman: I")
        }).not.toThrow();
    });

    it('converts 5 to V', () => {
        const { getByText, getByLabelText } = render(<RomanConverter />);
        fireEvent.change(getByLabelText(/arabic/i), { target: { value: "5" } });
        expect(() => {
            getByText("Roman: V")
        }).not.toThrow();
    });

    it('does not convert 0 to any roman number ', () => {
        const { getByText, getByLabelText } = render(<RomanConverter />);
        fireEvent.change(getByLabelText(/arabic/i), { target: { value: "0" } });
        expect(() => {
            getByText("Roman: none")
        }).not.toThrow();
    });

});