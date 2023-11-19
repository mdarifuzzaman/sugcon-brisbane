# This project is meant to present at SUGCON Brisbane
## sugcon-brisbane

1. In the root directory run the following to start and run the storybook:

    ```ps1
      run `npm i` from the root directory
    ```

2. Running storybook

    ```ps1
    npm run storybook -w packages/storybook-app
    ```

*** 

## About this Solution
This is a multi-head enabled solution. The head is maintained via the npm workspace. 
The idea is, you don't need to run the JSS application in disconnected or connected mode. What you can do is to start
implementing the component and preview it inside the storybook. That way, FE won't be blocked for any additional project setup time.
This project also encourages to use of proper <b>automaic design</b> so that you can re-use the design system to other projects going forward


