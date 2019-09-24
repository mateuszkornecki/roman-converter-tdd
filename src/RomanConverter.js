import React from 'react';

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

export default RomanConverter;