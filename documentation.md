# Technical Choices
  For this challenged I decided to use Typescript and use no state management library whatsoever. 
  The reason for this is because I'm currently working with a legacy system that uses MobX and Javascript. 
  Having noticed some problems with these two I wanted to go with something different and Typescript seemed to solve a lot of the issues I encountered with JS.
  
  I definitely saw TS's potential but my lack of experience with it made my experience a bit harsh, there's definitely code that would not be ideal in production.
  
  Regarding the state I opted to created a Main component that would hold the entire's application State and pass it down as props to the necessary children,
  for a small project like this I think that using Redux or even the Context API would add unnecessary complexity, It is even recomended by React's documentation
  to use the Context API carefully.
  
  For the code editor I went with AceEditor, it wasn't my first choice, I first tried to use Code Mirror but integration with TS was tricky.
  Looking back now I would consider using a vanilla TextArea as I had to write the code editor's theme myself.
  
  For the chart I used React Highcharts, again not my first call, I had chosen Victory before but Highcharts seemed simpler to use.
  
  The entire layout of the App is Flex based, I used good ol' CSS for this, didn't think to be the case to add some CSS-IN-JS solution like styled-components.
  For the resizable part of the layout, I decided to code it myself. I had never done anything like it and it was really fun doing that.
  Basically, I use a `ref` to get the inital height of the component, after that there's a combination of mouse events that trigger the resize.
  
  - `onMouseDown` will set a flag called `shouldUpdateHeight` to true
  - `onMouseMove` will get the movementY property to be subtracted of the components original height. The reason for this is because of the screen's coordinates system
  (0,0) point is on the top left corner so if the mouse is going up the Y value is going to be smaller, thus, 
  subtracting it causes the end operation to be height -(-Y) so it ends up increasing the height (if movementY is negative).
  - `onMouseUp` sets the `shouldUpdateHeight` flag to false
  
  # Costs
  
  
  When inputing data I use JSON5 to parse it and also split each line on the `\n` character, then a function is called to generate the chart.
  I decided that getting the input and converting it to an array of objects, each object would follow a model like this:
  
  `{
      "Linux Chrome": {
                       min_response: [],
                       max_response: [],
                       }
  }` 
  
  This decision made me implement a lot of iterations and linear scanning, in a lot of cases the iterations were nested.
  
  This, indeed, is a really costly solution and will take considerable time given a big enough input. 
  
  If I were to do this again I would find an alternative solution
  
  # Tests
  
  I had no previously experience with testing, so it was difficult to come up with test cases. 
  There's only one test case for the function that generates the chart, given the input it expects an `options` object for Highcharts
  
  # Considerations
  
  Overall, it was a really nice challenge to implement. I never had done something like this and it was really enjoyable.
  I consider my solution to be a fair shot, although some problems.
  
  
  
  
  
  
  
  
