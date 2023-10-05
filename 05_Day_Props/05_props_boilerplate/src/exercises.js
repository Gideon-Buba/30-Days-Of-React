// Exercise Level 1

/*

1. What is props in a React component?

Props (short for properties) in a React component are a mechanism for passing data from a parent component to a child component. They allow you to configure and customize child components based on data provided by their parent component.

2. How do you access props in a React component?

Props in a React component are accessed as an object named props. You can access specific prop values using dot notation, like props.name to access a prop named name.

3, What data types can we pass as props to components?

You can pass various data types as props to React components, including:

Strings
Numbers
Booleans
Objects
Arrays
Functions
React elements
Custom data types (e.g., defined structures)

4. What is propTypes?

PropTypes is a way to specify the expected data types of props in a React component. It's used for type checking and documentation purposes. By defining PropTypes, you can catch potential errors early and make your code more maintainable. PropTypes is typically imported from the "prop-types" library.

5. What is a default propTypes?

There is no concept of "default propTypes" in React. PropTypes are used to define the expected data types and whether a prop is required or not. You can set default values for props directly when you define a component. If a prop is not provided when using the component, it will use the default value.

*/