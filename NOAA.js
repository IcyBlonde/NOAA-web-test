// document.addEventListener('DOMContentLoaded', () => {
//     async function fetchData() {
//         var url = "";
//         let home = "";
//         try {
//             if (document.getElementById('boone').checked) {
//                 url = "https://api.weather.gov/gridpoints/RNK/17,16/forecast";
//                 home = "Boone";
//             } else if (document.getElementById('raleigh').checked) {
//                 url = "https://api.weather.gov/gridpoints/RAH/75,57/forecast";
//                 home = "Raleigh";
//             } else if (document.getElementById('wilmington').checked) {
//                 url = "https://api.weather.gov/gridpoints/ILM/91,67/forecast";
//                 home = "Wilmington";
//             } else {
//                 throw new Error("No location selected");
//             }

//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             const data = await response.json();
//             let forecast = data.properties.periods[0].detailedForecast;
//             document.getElementById('forecast').textContent = `The forecast is ${forecast}`;
//             document.getElementById('place').textContent = `The forecast for ${home}`;
//         } catch (error) {
//             console.error(error);
//         }
//     }

 
const fetchAlert = () => {
    fetch("https://api.weather.gov/alerts/active/zone/NCZ041")
    .then(response => {
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        console.log(data.features); // Log headlines
    })
    .catch(error => console.error("Error fetching data:", error));
}

fetchAlert();
