import React from 'react';
import { render, cleanup } from '@testing-library/react'

class RomanConverter extends React.Component {

    render() {
        return (
            <>
                <label>Arabic:<input type="number" /></label>
                <h1>Roman: none</h1>
            </>
        )
    }
}

describe('RomanConverter', () => {
    afterEach(cleanup);

    it('has an input field ', () => {
        const { getByText, getByLabelText } = render(<RomanConverter />);
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

});