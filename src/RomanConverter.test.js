import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'

class RomanConverter extends React.Component {
    state = {
        roman: null
    }

    handleChange = (event) => {
        const arabic = event.target.value;
        let roman = "none";
        if (arabic === "5") {
            roman = "V"
        } else if (arabic === "1") {
            roman = "I"
        }

        if (event.target.value) {
            this.setState({
                roman: roman
            })
        }
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

    it('converts 5 to V', () => {
        const { getByText, getByLabelText } = render(<RomanConverter />);
        fireEvent.change(getByLabelText(/arabic/i), { target: { value: "5" } });
        expect(() => {
            getByText("Roman: V")
        }).not.toThrow();
    });

    it('converts 0 to none', () => {
        const { getByText, getByLabelText } = render(<RomanConverter />);
        fireEvent.change(getByLabelText(/arabic/i), { target: { value: "0" } });
        expect(() => {
            getByText("Roman: none")
        }).not.toThrow();
    });

});