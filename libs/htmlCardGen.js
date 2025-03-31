export const cardGen =(name,age,gender,stuclass,city,subjects=[]) =>{
  let sub = '';
  subjects?.forEach(ele=>{
    sub += `<p>${ele}</p>`;
  })
  
  return`<div class="card">
      <h1 class="name">${name}</h1>
      <div class="infor">
        <div>
          <p>Age: ${age}</p>
          <p>Gender: ${gender}</p>
        </div>
        <div>
          <p>City: ${city}</p>
          <p>Class: ${stuclass}</p>
        </div>
      </div>
      <h3>Subjects</h3>
      <div class="subjects">
        ${sub}
      </div>
    </div>

`}
