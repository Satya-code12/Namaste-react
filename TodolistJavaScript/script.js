// const form = document.querySelector('#todo-form');
// const data = document.querySelector('#task-input'); 
// const dataShow = document.querySelector('.added-datas'); 
//  const dataArr = [];
// // data.addEventListener('input', (e)=>{
// //  console.log(e.target.value)
// // })

// form.addEventListener('submit', (e)=>{
//  e.preventDefault();
//  // const x = dataArr.push(data.value);
//  // console.log(x) //this returns the length of the array
//  dataArr.push(data.value);
//  console.log(dataArr);

//  dataShow.innerHTML = '';

//  const ol = document.createElement('ol');
//  ol.className = 'data-list';

//  dataArr.forEach((dt, index) => {
//    const li = document.createElement('li');
//    const btn = document.createElement('button')
//    btn.className = 'deleteBtn';
//    li.textContent = dt;
//    btn.textContent = "❌";
//    ol.appendChild(li);
//    li.appendChild(btn);

//    btn.addEventListener('click', (e)=>{
//     console.log("Clicked");
//     dataArr.splice(index,1);
//     console.log(dataArr);
//    })
//  });

//  dataShow.appendChild(ol);
//  data.value = '';

//  // dataArr.forEach(dt => {
//  //  dataShow.innerHTML = 
//  // `<ul class="data-list">
//  //      <li>${dt}</li>
//  //  </ul>`
//  // });
 
 
//  // dataShow.innerHTML = `<p>Hello ${data.value}<p>`;
// })

const form = document.querySelector('#todo-form');
const data = document.querySelector('#task-input'); 
const dataShow = document.querySelector('.added-datas'); 
const dataArr = [];

// Render function
function renderList() {
  dataShow.innerHTML = ''; // Clear the existing list

  const ol = document.createElement('ol');
  ol.className = 'data-list';

  dataArr.forEach((dt, index) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');

    li.textContent = dt;
    btn.textContent = "❌";
    btn.className = 'deleteBtn';

    // Delete button logic
    btn.addEventListener('click', () => {
      dataArr.splice(index, 1); // Remove from array
      renderList(); // Re-render the list
    });

    li.appendChild(btn);
    ol.appendChild(li);
  });

  dataShow.appendChild(ol);
}

// Form submit logic
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const task = data.value.trim();

  if (task === "") return; // Prevent empty input
  if (dataArr.includes(task)) return; // Prevent duplicates

  dataArr.push(task);
  renderList();
  data.value = ''; // Clear input
});
