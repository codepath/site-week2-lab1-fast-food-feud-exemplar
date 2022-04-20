# Fast Food Feud

Week 2 - React Lab #1

## Goals

By the end of this lab, SITE interns should understand...

- How React's component-based design is centered around writing functions that return `JSX`.
- The way that React enforces a one-way flow of data from parent to child - known as passing `props`.
- Iteration in `JSX` and how it's used to render lists of items.
- Strategies used to customize component styles using its `props`.
- Default `props` and how they can be overridden.
- The `useState` hook in React and how it's used to manage data that changes - simply called `state`.
- What event handlers like `onClick` are used for and how they can trigger state changes.
- Conditionally rendering JSX based on `props` or `state` values.

## Intro

A local startup has asked SITE interns to help them construct their new product - `Fast Food Feud`! They love the name and even have a tagline they workshopped: `Folks' Favorite Friendly Fuel Finder For Food Facts`. The one thing they don't have is a working application.

Here's what they have to say about their vision for the mini-app:

> Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! **Fast Food Feud** is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.

They've sourced their nutrition data, bootstrapped a React application, and even hired a designer to create some styles. However, they quickly realized that they didn't know enough React to make this happen, so they've called on SITE to fill in the gaps.

## Application Features

### Core Features

- **Stage 0**: The `App` component (`Explore a React app`)
  - Exploring a React App
    - Go ahead and open up the `App.js` file in the `components` directory.
      - This component is where all the magic happens. Take a look at what's been scaffolded out already.
      - There's a lot going on here! Don't worry, we'll cover the app piece by piece.
      - This file contains a section of code that looks _very much_ like HTML with some _Javascript_ code sprinkled in. This syntax is called JSX. It lets us write code that looks nearly identical to HTML, but allows us to mix in vanilla JavaScript and other neat things.
    - Check out the `index.js` file at the root of the `src` directory as well. This is where our React app is actually mounted to the DOM in the browser.
      - Where does that actually happen? Open up the `index.html` file in the `public` directory and notice the `div` element with an `id` of `root`?. That's where our app actually gets rendered to!
      - Take a second and dig through some of the files. Don't worry about understanding all of it right away. We'll get to it in due time.
- **Stage 1**: The `Header` component (`JSX and passing props`)
  - JSX and passing props
    - Open up the `Header.js` and take a look at this component. It's simply a function that returns something that looks something like `HTML`.
    - The `Header` function takes in a single argument called `props` (like all React components).
    - It then uses attributes of the `props` object to customize what is rendered inside of the `JSX` the `Header` component returns.
    - Start off by heading into the `App.js` component and passing values from the `appInfo` object into the `Header` component as `props`.
    - Once it's displaying all of the values it's supposed to, do the same for the `Instructions` component.
- **Stage 2**: The `Categories` column and `Restaurants` row (`Iteration in JSX`)
  - The `Categories Column`
    - If we open up our `App.js` file again, we can see that at the very beginning of the return statement, there is a block `JSX` with the `className` property of `CategoriesColumn`.
    - Find the comment that says `YOUR_CODE_HERE` and remove it.
    - Use your knowledge of iteration in `JSX` to map over the `categories` array and create a `p` tag for every item.
      - Don't forget to give each tag a unique `key` prop!
    - These are each of the topics the `Fast Food Feud` will allow users to explore. Notice how they form a nice column thanks to our `flex` styles found in `App.css`?
    - This probably doesn't look amazing yet, but that's ok. We'll get to it.
  - The `Restaurants Row`
    - Let's try this one more time, with different data.
- **Stage 3**: The `Chip` component (`Default Props and Using Props to Customize Styles`)
  - Component reuse via `props`
    - Now that we have both the categories and restaurants listed in our application, let's start thinking about making them look nice.
    - We saw in our `Header` and `Instructions` components how we could use `props` to customize what our components render. But they can do a lot more than that.
    - Props are most useful when we want to reuse and customize a component without copy-pasting our code over and over. That's where `props` shine, since they essentially allow us to use our components as templates that can be customized with specified `PROP`erties. Let's see that in action.
    - Import the `Chip` component into our `App.js` file and replace all of the `p` tags we used to render categories with our `Chip` component. Make sure to see what props it needs to render the proper value
  - Customizing component styles with props
    - Interpolating a value into the `className` string
    - Go ahead and set the `isActive` prop to `true` by default in the `Chip` component. Because React components are just Javascript functions, we can supply them with default arguments the same way that we do with normal functions. But we can also override them.
    - Overriding the `isActive` prop
    - Conditionally setting the `isActive` prop to true based on the type of category ("Burgers") or type of restaurant ("In-N-Out Burger")
    - This doesn't seem like a great approach though. Wouldn't it be nice if there were a better way to determine if the user had selected a category or restaurant?
- **Stage 4**: Using the `Chip`'s `onClick` handler to modify state (`State in React`)
  - Using the `React.useState()` hook to store values that will change over time in our application.
    - The `useState` returns an array containing two things - a state **value** and a state **setter** function. Check out the React [docs](https://reactjs.org/docs/hooks-state.html#whats-a-hook) for more info.
    - State is an immutable (unchangeable) value, which means when we are interacting with it, we never modify state directly. Remember to always use the setter function to update state values.
    - Let's begin by storing state for a category the user can select. Go ahead and implement that with the `React.useState` hook.
  - Handling events in React
    - Because state is closely associated with interactivity (and things changing), we need a way to listen for events - like when a user interacts with elements in the app.
    - This is where event handlers come in. React event handlers are similar to HTML event handlers, except for a few key differences:
      - When using React, you generally don’t need to call `addEventListener` to add listeners to a DOM element after it is created.
      - Instead, just provide a listener when the element is initially rendered.
      - React events are named using camelCase, rather than lowercase.
      - With JSX you pass a function as the event handler, rather than a string.
      - The React [docs](https://reactjs.org/docs/handling-events.html) on event handlers cover more detail on this subject.
    - Let's add an `onClick` event handler to our `Chip` components that will allow our users to select a category.
      - Pass an anonymous function to the `Chip`'s `onClick` handler so that each `Chip` can be used to select a different category when clicked.
      - Remember that calling a function directly in the `onClick` handler will execute immediately upon being rendered to the screen and won't trigger the `onClick` event!
      - Refer to the example shown in the `Recap` section of the React [docs](https://reactjs.org/docs/hooks-state.html#recap) for a good example of how to pass arguments to event handler functions.
      - To check that it is working as expected, update the `isActive` prop for each `Chip` to be `true` whenever that `Chip`'s category is equal to the one in state. Refer to the sample gif for an example of what it should look like.
    - Now go ahead and do the same thing for our restaurant row.
    - If you get lost, refer to the React [docs](https://reactjs.org/docs/hooks-state.html#tip-using-multiple-state-variables) on using multiple state variables.
- **Stage 5**: Displaying Nutritional Facts (`Conditional Rendering in JSX`)
  - Render menu items
    - Once the user has selected both a category and a restaurant, we can use those to filter the data to just a few menu items.
      - Right before the `return` statement of the `App.js` file, create a variable called `currentMenuItems`.
      - In that variable, store the result of calling `data.filter` and filtering each item depending on if its `.food_category` attribute is equal to the selected category and the `.restaurant` attribute is equal to the selected restaurant.
      - Finally, iterate over the `currentMenuItems` and render a `Chip` for each one.
      - Create one more state variable for the selected menu item, and give each chip an `onClick` handler that sets that menu item in state.
  - Display Nutritional Facts
    - Conditionally render the `NutritionalLabel` component with the selected item passed in as a prop, only when the selected item exists.
    - At this point, the app should work! Congratulations!

### Stretch Goals
- Break sections of the `App.js` file into their own components.
  - Create components for `CategoryColumn.js`, `RestaurantsRow.js`, `MenuDisplay.js`, and `DataSource.js`.
  - When you're finished, the JSX for the `App.js` file should have a return statement that looks something like the following code segment (with all of the props taken out):
    ```jsx
    return (
      <main className="App">
        <CategoriesColumn />

        <div className="container">
          <Header />
          <RestaurantsRows />
          <Instructions />
          <MenuDisplay />
          <DataSource />
        </div>
      </main>
    )
    ```

- The components in the `App.js` file will then render a component tree that looks like the following:
  ```text

  └── App
      │
      ├── CategoriesColumn
      │   ├── Chip
      │   ├── Chip
      │   ├── Chip
      │   ├── Chip
      │   ├── Chip
      │   └── Chip
      │
      ├── Header
      │   └── Text
      │
      ├── RestaurantsRows
      │   ├── Chip
      │   ├── Chip
      │   ├── Chip
      │   ├── Chip
      │   ├── Chip
      │   └── Chip
      │
      └── Instructions
      │   ├── Text
      │   └── Text
      │
      ├── MenuDisplay
      │   └── NutritionalLabel
      │
      └── DataSource
          └── Text

  ```
