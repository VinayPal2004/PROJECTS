const insert = document.getElementById("element");
window.addEventListener('keydown',(e)=>{
    insert.innerHTML=`
    <div class="container">
    <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===''?'space': e.key}</td>
    <td>${e.keycode}</td>
    <td>${e.code}</td>
  </tr>
  </table>
  </div>
  `;
});