// Import React library
import React from 'react';

// Define an interface for the component props
interface GreetingProps {
    name: string; // name prop should be a string
}

// Functional component with typed props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <div>Hello, {name}!</div>; // Render greeting message
};

// Export the Greeting component
export default Greeting;