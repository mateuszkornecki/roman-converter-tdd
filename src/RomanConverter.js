import React from 'react';
import toRoman from './toRoman';

class RomanConverter extends React.Component {
    state = {
        roman: null
    }

    toRoman = (arabic) => {
        let roman = "none";
        if (arabic === "5") {
            roman = "V"
        } else if (arabic === "1") {
            roman = "I"
        }
        return roman;
    }

    handleChange = (event) => {
        const arabic = event.target.value;

        this.toRoman(event.target.value);
        if (event.target.value) {
            this.setState({
                roman: toRoman(arabic)
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

export default RomanConverter;