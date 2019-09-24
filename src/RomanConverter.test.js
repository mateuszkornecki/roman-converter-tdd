import React from 'react';
import { render, cleanup } from '@testing-library/react'

class RomanConverter extends React.Component {

    render() {
        return null
    }
}

describe('RomanConverter', () => {
    afterEach(cleanup);

    it('has an input field ', () => {
        render(<RomanConverter />)
    });


});