# CoreComponent - React Native Example

## Overview

`CoreComponent` is a simple React Native component designed to demonstrate the use of basic elements such as `Text`, `Button`, and dynamic state management using `useState`. The component displays a welcome message and two buttons with different functionalities:

1. A button that shows an alert with "Hello World!".
2. A button that dynamically displays "Hello World!" at the bottom center of the screen.

## Features

- **State Management with `useState`:**
  - Dynamically controls the visibility of the "Hello World!" message.
- **React Native Elements:**
  - Utilizes `View`, `Text`, and `Button` components for layout and functionality.
- **Event Handling:**
  - Demonstrates handling button press events using `onPress`.

## How It Works

- **Welcome Message:**
  - The text "Hello from Core Component" is displayed at the top of the screen in a bold and `seagreen` color.
- **Alert Button:**
  - The "Click Me for Alert!" button triggers an alert box and logs "Hello World!" to the console.
- **Dynamic Bottom Message:**
  - The "Click Me!" button updates the state to display "Hello World!" dynamically at the bottom of the screen.

Layout Structure
The layout consists of three main sections:

How to Run

1.Clone this repository or copy the component code into your REact Native project.
2.Ensure you have dependencies installed (react-native and related libraries).
3.Import the component and use it within your app.

import CoreComponent from './CoreComponent';

4.Run the app using :

npm start

Sample Output

"Hello from Core Component" at the top.
Two buttons, one triggering an alert and another showing "Hello World!" dynamically.

```

```
