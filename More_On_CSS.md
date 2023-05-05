Q1. Why is it called pseudo-class?
Ans1. A pseudo-class is a keyword that is added to a selector in CSS to specify a special state of an element. For example, :hover is a pseudo-class that matches an element when the user's pointer is over it. The term pseudo-class comes from the fact that it is not a real class attribute defined in the HTML, but a fictional one that only exists in the style sheet.


Q2. What are Gradients in CSS?
Ans2. Gradients in CSS are a way of creating smooth transitions between two or more colors. They can be used as backgrounds, borders, or other elements on a web page. Gradients can be linear, radial, conic, or repeating, depending on the shape and direction of the color change.


Q3. What are different types of transitions in CSS?
Ans3. Transitions in CSS are a way of animating changes in an element's style, such as color, width, or position. There are different types of transitions in CSS, depending on how they are specified and triggered. Some of the common types are:

- Property transitions: These transitions are applied to a specific CSS property, such as background-color or transform. They are defined using the transition-property, transition-duration, transition-timing-function, and transition-delay properties.
- Shorthand transitions: These transitions are a concise way of defining property transitions using the transition property. For example, transition: width 2s ease-in-out 1s; is equivalent to defining four separate properties for width.
- All transitions: These transitions are applied to all animatable properties of an element. They are defined using the transition property with a value of all. For example, transition: all 0.5s; means that any change in an animatable property will be animated with a duration of 0.5 seconds.
- Custom transitions: These transitions are created using custom properties and the var() function. They allow for more flexibility and creativity in defining transitions. For example, --color-transition: color 3s linear; transition: var(--color-transition); means that the color transition will be defined by the custom property --color-transition.
