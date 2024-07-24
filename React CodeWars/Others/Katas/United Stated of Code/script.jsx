// United State of React
// Some say The United States has never been so divided. This Kata is a chance for you to unite a once great nation and MAKE AMERICA CODE AGAIN!

// What's Involved
// State
// Changing State
// Conditional Rendering based on state
// The challenge
// You will be given a component called States. You will need to establish an initial state for the component called united and for it to be set to false.

// Then write a unite function that changes this state to true.

// Then conditionally render a bespoke message in the component.

// If the States are united then display "Code for everyone"

// If the States aren't united then display "Make America code again"

import React, {useState} from 'react';

import { Component } from 'react';

// Class component version
export class States extends Component {
    constructor(props) {
        super(props);
        this.state = {
            united: false
        };
        this.unite = this.unite.bind(this);
    }

    unite() {
        this.setState({ united: true });
    }

    render() {
        return (
            <p>{this.state.united ? "Code for everyone" : "Make America code again"}</p>
        );
    }
}


// Function component version
export function States() {
    const [united, setUnited] = useState(false)
    function unite() {
        setUnited(true)
    }
    return (
        <p>{united ? "Code for everyone" : "Make America code again"}</p>
    )
}