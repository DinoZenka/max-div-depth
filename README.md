# Recursive implementation of the div nesting depth search algorithm. Div with class 'app' is level 0.

e.g.
div class='app' \n
/div

The depth is 0.

div class='app'\n
\t div /div <!-- 1 -->
\t div  <!-- 1 -->
\t\t div /div <!-- 2 -->
\t /div 
/div

The max depth is 2.
