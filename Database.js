const CityDatabase = {
    // Define the database object
};

 CityDatabase.details = [];
    
 // make data item and put in CityDatabase.details
 CityDatabase.details.push(
    {
        name: "Bristol, Rhode Island",
        image: "http://www.winwallpapers.net/w1/2010/10/Mount-Hope-Bridge.jpg",
        year: "2011",
        top5: ["Mount Hope Bridge", "Colt State Park", "Hope Street", "Independence Park", "DeWolf Tavern"],
        continent: "North America"
    },
    {
        name: "Hartford, Connecticut",
        image:"https://upload.wikimedia.org/wikipedia/commons/b/bc/TheaterWorks_City_Arts_on_Pearl%2C_Hartford_CT.jpg",
        year: "2009",
        top5: ["TheaterWorks", "Bushnell Park", "Cedar Hill", "Lenny & Joe's", "Friendlies"],
        continent: "North America"
    },
    {
        name: "Nashville, Tennessee",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Broadway_%28Nashville%29_lights.jpg/1920px-Broadway_%28Nashville%29_lights.jpg",
        year: "1998",
        top5: ["Home", "Sole Mio", "Sushi Train", "Broadway", "MTAC"],
        continent: "North America"
    },
    {
        name: "Dauphin Island, Alabama",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Dauphin_Island_06May2010_01.JPG",
        year: "2007",
        top5: ["Sea Lab", "Fort Morgan", "Fort Gaines", "Fins Bar", "Mobile Bay Ferry"],
        continent: "North America"
    },
    {
        name: "Bologna, Rimini",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Bologna_seen_from_Asinelli_tower.jpg",
        year: "1992",
        top5: ["Piazza Maggiore", "Farrari Museum", "Basilica", "Leaning Towers", "La Piazzola"],
        continent: "Europe"
    },
    {
        name: "Cattolica, Rimini",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/47841_Cattolica%2C_Province_of_Rimini%2C_Italy_-_panoramio_%282%29.jpg",
        year: "1993",
        top5: ["Altamarea", "Markato", "AquaFan", "Beffana", "Hotel Aurora"],
        continent: "Europe"
    },
    {
        name: "Fort Lauderdale, Florida",
        image: "https://c1.staticflickr.com/9/8016/7752667612_6c93159a3a_b.jpg",
        year: "2000",
        top5: ["Stranahan House", "RiverWalk", "Creperie", "Coral Ridge Mall", "Intercoastal Waterway"],
        continent: "North America"
    },
    {
        name: "Los Angeles, California",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Kh3k-5vF68iamZV-IIEDdf5cdH0T4olcuLttcbMIHekA3jMLiA",
        year: "2006",
        top5: ["Rodea Drive", "Disney Land", "Santa Monica Pier", "Universal Studios", "Venice Beach"],
        continent: "North America"
    },
    {
        name: "Montreal, Quebec",
        image: "https://i.pinimg.com/originals/37/09/96/370996469759416db7db253f3a07d623.jpg",
        year: "2008",
        top5: ["Bon Homme Festival", "Notre-Dame Basilica", "Ice Slides", "Rue St-Paul", "Place Jacques-Cartier"],
        continent: "North America"
    },
    {
        name: "Mount Kisco, New York",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Greenwich_Village_2005.jpg/800px-Greenwich_Village_2005.jpg",
        year: "2017",
        top5: ["Hershey's Museum", "broadway Musicals", "Pearl's Oyster Bar", "Le Bain", "Dine In The Dark"],
        continent: "North America"
    }
);
    
    // Turn information into a JSON string to save it

    const saveDatabase = function (databaseObject, localStorageKey) {
        /*
            Convert the Object into a string.
        */
        const stringifiedDatabase = JSON.stringify(databaseObject)
    
        /*
            Create a key in local storage, and store the string
            version of your inventory database as the value
        */
        localStorage.setItem(localStorageKey, stringifiedDatabase)
    }

    saveDatabase(CityDatabase, "City Database")