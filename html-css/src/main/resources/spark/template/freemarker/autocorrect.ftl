<!-- the below chunk sets the html element b/t the < #assign > tags to the variable content -->
<#assign content>
  <!-- CODE FOR TEXT BOX GOES HERE -->
  ${message}
  <form method="POST" action="/results">
    <label for="text">Enter words here: </label><br>
    <textarea name="text" id="text"></textarea><br>
    <input type="submit">
  </form>
  ${suggestions}
</#assign>
<#include "main.ftl">

