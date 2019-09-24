import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'

class RomanConverter extends React.Component {
    state = {
        roman: null
    }

    handleChange = (event) => {
        this.setState({
            roman: "I"
        })
    }

    render() {
        return (
            <>
                <label>Arabic:<input onChange={this.handleChange} type="number" /></label>
                <h1>Roman: {this.state.roman ? this.state.roman : "none"}</h1>
            </>
        )
    }
}

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

});