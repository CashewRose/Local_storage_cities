const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}
const CityData = loadDatabase("City Database");

const pageref = document.querySelector("#city")

const CityCardBuilder = (year) => {

    // Create a block element that will hold three student components
    let row = document.createElement("div")
    row.className = "CityRow"

    /*
        Iterate over the array of students in the database that was
        retrieved from localStorage in database.js
    */
    CityData.details.forEach(
        (CityData, index) => {

            /*
                When three student components have been added to the
                parent div, append the current div to the top-level
                article and create a new div
            */
            if (index !== 0 && row.childNodes.length % 3 === 0) {
                pageref.appendChild(row)
                row = document.createElement("div")
                row.className = "CityRow"
            }

            /*
                Only display the students that are the same gender
                as the argument value. If no value was provided,
                display all students.
            */
            if (!year || year === CityData.year) {

                // Section first
                const citySection = document.createElement("div")
                citySection.classList = "bordered student"

                // Apply different class based on student gender
                if (CityData.continent === "North America") {
                    citySection.classList += " NA"
                } else if (CityData.continent === "Europe") {
                    citySection.classList += " EU"
                }

                // h2 child component of section
                const cityName = document.createElement("h2")
                cityName.classList = "city__title"
                cityName.textContent = CityData.name
                citySection.appendChild(cityName)

                // img child component of section
                const cityPic = document.createElement("img")
                cityPic.setAttribute("src", CityData.image)
                cityPic.innerHTML = CityData.image
                citySection.appendChild(cityPic)

                // p child component of section
                const cityAttractions = document.createElement("p")
                cityAttractions.classList = "top_5"
                cityAttractions.textContent = CityData.top5
                citySection.appendChild(cityAttractions)

                // p child component of section
                const yearVisited = document.createElement("p")
                yearVisited.classList = "year "
                yearVisited.textContent = CityData.year
                citySection.appendChild(yearVisited)

                // Append HTML representation of student to the DOM
                row.appendChild(citySection)
            }
        }
    )

    // Just in case there are an exact multiple of 3 students, add the last row
    if (row.childNodes.length) {
        pageref.appendChild(row)
        for (let i = 0; i < row.childNodes.length; i++) {
            row.childNodes[i].classList += " alone";
        }
    }

}

CityCardBuilder()