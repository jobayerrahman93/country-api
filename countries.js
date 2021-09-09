// search by country name
const searchCountryName = () => {

  const input = document.getElementById('input').value;
  
  if(input===''){
    return;
  }
  else{
    const url = `https://restcountries.eu/rest/v2/name/${input}`;
    fetch(url)
      .then(response => response.json())
      .then(data => searchCountryInUI(data[0]));
  }
 
}

const searchCountryInUI = (dName) => {
  // console.log(dName);

  if(dName==undefined){
    return;
  }
  else{
    const detail = document.getElementById('country-detail');

    detail.innerHTML = `
     
      <img width="200px" src="">
      <div class="row g-0">
            <div class="col-md-4">
              <img src="${dName.flag}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${dName.name}</h5>
                <p class="card-text bg-warning fw-bold">Capital: ${dName.capital}</p>
                <p class="card-text bg-warning fw-bold">Area: ${dName.area}</p>
                <p class="card-text bg-warning fw-bold">Currency: ${dName.currencies[0].code}</p>
                <p class="card-text bg-warning fw-bold">Language: ${dName.languages[0].name}</p>
                <p class="card-text bg-warning fw-bold">Population: ${dName.population}</p>
                <p class="card-text bg-warning fw-bold"><small class="text-muted d-none">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
      `;
  }
  
}


// all countries summary

const loadCountries = () => {
  fetch('https://restcountries.eu/rest/v2/all')
    .then(respons => respons.json())
    .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = (data) => {

  const countryBlock = document.getElementById('countries');
  data.forEach(element => {


    const div = document.createElement('div');
    div.classList.add('col');

    div.innerHTML = `
        
        <div class="card h-100">
        <img src="${element.flag}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <h6 class="card-text text-muted">Capital: ${element.capital}</h6>
        </div>
        <div class="card-footer">
        <button onclick="loadByCountryName('${element.name}')" class="btn btn-primary">Detail</button>
        </div>
        </div>

        `;
    countryBlock.appendChild(div);


  });
}


// load detail button event
const loadByCountryName = (searchName) => {


  const url = `https://restcountries.eu/rest/v2/name/${searchName}`;
  fetch(url)
    .then(response => response.json())
    .then(data => displayCountryName(data[0]))
}

const displayCountryName = (dName) => {
  console.log(dName);
  const detail = document.getElementById('country-detail');

  detail.innerHTML = `
   
    <img width="200px" src="">
    <div class="row g-0">
          <div class="col-md-4">
            <img src="${dName.flag}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${dName.name}</h5>
              <p class="card-text bg-warning fw-bold">Capital: ${dName.capital}</p>
              <p class="card-text bg-warning fw-bold">Area: ${dName.area}</p>
              <p class="card-text bg-warning fw-bold">Currency: ${dName.currencies[0].code}</p>
              <p class="card-text bg-warning fw-bold">Language: ${dName.languages[0].name}</p>
              <p class="card-text bg-warning fw-bold">Population: ${dName.population}</p>
              <p class="card-text bg-warning fw-bold"><small class="text-muted d-none">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
    `;
}


