function findCaliforniaCafes(searchTerm) {

    const cafes = [

        { "name": "Avenue Bakery Cafe", "place_id": "jahgde7wgdiau&ewsahgosd" },
    ];

    const places = {
        "12hydbdf76sljfts87sbfis": { "name": "Ashley's Cafe", "street_no": "75", "locality": "Main Street", "postal_code": "90210", "lat": "34.0522", "long": "118.2437" },
    };


    const results = cafes.filter(cafe => cafe.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .map(cafe => {
            const placeDetails = places[cafe.place_id];
            return {
                "name": placeDetails.name,
                "street_no": placeDetails.street_no,
                "locality": placeDetails.locality,
                "postal_code": placeDetails.postal_code,
                "lat": placeDetails.lat,
                "long": placeDetails.long
            };
        });

    return results;
}


const results = findCaliforniaCafes('Avenue');
console.log(results);