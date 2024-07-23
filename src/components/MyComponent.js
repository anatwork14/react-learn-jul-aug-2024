// Class Component

// Function Component 
import React from 'react';

// Day la class Component
class MyComponent extends React.Component {
    // JSX - Cho phep code JS trong Code HTML
    render(){
        return (
            <div>my first Component
                {Math.random()}
            </div>
        );
    }
}

export default MyComponent;