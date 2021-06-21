const finalData = document.querySelector("body");
let totalData = ""

let consoleData;

function handleSuccess () { 
    const data = JSON.parse( this.responseText ); 
    consoleData = data;
    // console.log( data.results[0].title );
    // console.log( data.results[0].multimedia[0].url );
    // console.log( data.results[0].abstract );
    // console.log( data.results[0].url );
    for (let i = 0; i < data.results.length; i++) {
        let singleData = `
            <div class="news-items">

            <div class="result-img">
            <img src="${data.results[i].multimedia[0].url}" alt="${data.results[i].title}"
            </div>

            <div class="result-content">
            <h2>${data.results[i].title}</h2>
            <p>${data.results[i].abstract}</p>
            <a href="${data.results[i].url}" target="_blank">Read more</a>  
            </div>

            </div>
        `
        totalData = totalData + singleData;
        
    }

    

    finalData.innerHTML = totalData;
}
  
function handleError () { 
    console.log( 'An error occurred \uD83D\uDE1E' );
}
  
const asyncRequestObject = new XMLHttpRequest();
asyncRequestObject.open('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=ENTER-YOUR-API-KEY-HERE');
asyncRequestObject.onload = handleSuccess;
asyncRequestObject.onerror = handleError;
asyncRequestObject.send();
  


  