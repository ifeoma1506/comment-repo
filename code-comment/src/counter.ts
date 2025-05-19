// Import React and Component from React
import React, { Component } from 'react';

// Define an interface for the component state
interface CounterState {
    count: number; // count should be a number
}

// Class component with typed state
class Counter extends Component<{}, CounterState> {
    // Initialize state
    state: CounterState = {
        count: 0, // Initial count value
    };

    // Method to increment the count
    increment = () => {
        this.setState({ count: this.state.count + 1 }); // Update state
    };

    // Render method
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p> {/* Display count */}
                <button onClick={this.increment}>Increment</button> {/* Increment button */}
            </div>
        );
    }
}

// Export the Counter component
export default Counter;