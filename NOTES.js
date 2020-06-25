/* 
Differences between functional and class components

- Syntax
    - the most obvious difference is the syntax
    - a class component requires you to extend from React. Component and create a render function which returns the React element. This requires more code but also unlocks the use of other features - like state.

- State
    - because functional components are just plain JS functions, you can't use setState() in them. Functional components are also known as stateLess components.
    - if you need a state in your component, you will either need to create a class component, or make sure your parents component is a class components so you can pass down the state via props.

- Lifecycle Methods
    - lifecycle methods are another feature you cannot use with functional components, and you can only use with class components. just like state. both state and lifecycle methods come from the React.component you extend from in class components.

- Why use functional components at all?
    - functional components are easier to read and test since they are just plain JS functions without state or lifecycle methods.
    - less code
    - help you implement best practices. it will get easier to separate stateful and stateless components since you need to think and plan your components out more, without both class and functional components having access to all the react logic we need.

- Lifecycle methods
    - react components have what's known as a lifecycle. the different points during the lifecycle of a react component are accessible via lifecycle methods
        - the basic lifecycle of a react component:
            - creation
            - mounted
            - unmounted
            - destroyed
        - each of these phases of a components lifecycle have methods that are called automatically at each point during the lifecycle, that give you control over what happens are the time those methods are invoked.

        Note: lifecycle methods are a intended to be a last resort. they are to be used in special cases, when other fallback like rearranging your components ore move your state around won't work.
            - there are edge cases here, like fetching from an API. you can't guarentee that your fetch will resolve before the component finishes mounting. if it did, you'd be trying to setState on an unmounted component, which will throw you an error.
*/
