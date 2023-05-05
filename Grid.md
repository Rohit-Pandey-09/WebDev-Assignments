Q1. What is the grid?
Ans1. The grid in CSS is a layout system that allows you to create rows and columns for your web pages. You can use the grid properties to define the size, position, and alignment of the grid items. The grid in CSS makes it easier to design responsive and flexible layouts without using floats or positioning.


Q2. What is the difference between Flex and Grid?
Ans2. What is the difference between Flex and Grid?

Flex and Grid are two CSS layout modules that allow us to create complex layouts without using hacks or JavaScript. However, they have some key differences:

- Flex is one-dimensional, while Grid is two-dimensional. This means Flex can only align items along a row or a column, but Grid can align items along both rows and columns.
- Flex treats each row or column as a separate entity, while Grid treats the entire layout as a single entity. This means Flex can wrap items in multiple lines, but Grid can place items in overlapping cells.
- Flex gives more flexibility to align items along the main or cross axis, while Grid gives more control to place items in specific cells.

In summary, Flex is better for simple layouts that need to adapt to different screen sizes, while Grid is better for complex layouts that need precise alignment and positioning.


Q3. How can you define rows and columns for your grid?
Ans3. To define rows and columns for your grid, you can use the grid-template-rows and grid-template-columns properties. These properties take a list of values that specify the size of each row or column. For example, grid-template-rows: 100px 200px; means that the grid has two rows, the first one is 100 pixels high and the second one is 200 pixels high. You can also use fractions, percentages, or keywords like auto or minmax to define flexible sizes.


Q4. List any two properties of Grid item and Grid container.
Ans4. Grid item and Grid container are two concepts in CSS Grid Layout. A Grid item is any element that is a direct child of a Grid container. A Grid container is any element that has display: grid or display: inline-grid applied to it. Some properties of Grid item are grid-column, grid-row, and grid-area. Some properties of Grid container are grid-template-columns, grid-template-rows, and grid-gap.
