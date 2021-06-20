# Recursive implementation of the div nesting depth search algorithm. Div with class 'app' is level 0.

e.g.
"<div class='app'>
</div>"

The depth is 0.

"<div class='app'>
  <div></div> <!-- 1 -->
  <div>  <!-- 1 -->
    <div></div> <!-- 2 -->
  </div> 
</div>"

The max depth is 2.
