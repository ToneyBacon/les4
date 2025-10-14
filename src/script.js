document.addEventListener("DOMContentLoaded", async function () {
    const response = await fetch("config.json");
    const config = await response.json();
    window.apiKey = config.API_KEY;
});

async function fetchData() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;
    console.log(url);

    // solution
    //let info = document.getElementById('data-container');
    //while (info.hasChildNodes()){
    //    info.removeChild(info.firstChild);
    //}

    try {
        const response = await fetch(url);
        const data = await response.json();
        // bad code
        document.getElementById('data-container').innerHTML = `<h3>${data.articles[0].title}</h3><p>${data.articles[0].content}</p><img src="${data.articles[0].urlToImage}" width="500" height="600">`;
        // solution
        //let header = document.createElement("h3");
        //let headertext = document.createTextNode(data.articles[0].title);
        //header.append(headertext);
        //info.appendChild(header);
        //let para = document.createElement("p");
        //let paratext = document.createTextNode(data.articles[0].content);
        //para.append(paratext);
        //info.appendChild(para);
        //let pict = document.createElement("img");
        //pict.src = data.articles[0].urlToImage;
        //pict.width = 500;
        //pict.height = 620;
        //info.append(pict);



    } catch (error) {
        // bad code
        document.getElementById('data-container').innerHTML = '<p>Error fetching data</p>';
        // solution
        //let para = document.createElement("p");
        //let paratext = document.createTextNode("Error fetching data");
        //para.append(headertext);
        //info.appendChild(para);
    }
}
