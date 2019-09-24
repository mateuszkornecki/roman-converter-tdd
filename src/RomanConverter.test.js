import React from 'react';
import { render, cleanup } from '@testing-library/react'

class RomanConverter extends React.Component {

    render() {
        return (
            <>
                <label>arabic<input /></label>
            </>
        )
    }
}

describe('RomanConverter', () => {
    afterEach(cleanup);

    it('has an input field ', () => {
        const { getByLabelText } = render(<RomanConverter />);
        expect(() => {
            getByLabelText(/arabic/);
        }).not.toThrow();
    });

});