function calculateCosts() {
    const numCows = document.getElementById('numCows').value;
    const breedType = document.getElementById('breedType').value;
    let feedCost, vetCost, shelterCost;

    // Cost estimation based on breed type
    switch (breedType) {
        case 'Red Sindhi':
            feedCost = 2500; // Cost per cow for dairy
            vetCost = 200;  // Cost per cow for veterinary care
            shelterCost = 10000; // Cost per cow for shelter
            break;
        case 'Gir':
            feedCost = 4000; // Cost per cow for beef
            vetCost = 225;  // Cost per cow for veterinary care
            shelterCost = 20000; // Cost per cow for shelter
            break;
        case 'Hariana':
            feedCost = 3600; // Cost per cow for mixed
            vetCost = 225;  // Cost per cow for veterinary care
            shelterCost = 17500; // Cost per cow for shelter
            break;
        case 'Sahiwal':
            feedCost = 5000; // Cost per cow for dairy
            vetCost = 200;  // Cost per cow for veterinary care
            shelterCost = 15000; // Cost per cow for shelter
            break;
        case 'Ongole':
            feedCost = 2500; // Cost per cow for beef
            vetCost = 220;  // Cost per cow for veterinary care
            shelterCost = 25000; // Cost per cow for shelter
            break;
        case 'Deoni':
            feedCost = 3050; // Cost per cow for mixed
            vetCost = 250;  // Cost per cow for veterinary care
            shelterCost = 25000; // Cost per cow for shelter
            break;
        case 'Tharparkar':
            feedCost = 4000; // Cost per cow for dairy
            vetCost = 270;  // Cost per cow for veterinary care
            shelterCost = 20000; // Cost per cow for shelter
            break;
        case 'Kankrej':
            feedCost = 2500; // Cost per cow for beef
            vetCost = 110;  // Cost per cow for veterinary care
            shelterCost = 20000; // Cost per cow for shelter
            break;
        case 'Krishnavalley':
            feedCost = 3500; // Cost per cow for mixed
            vetCost = 350;  // Cost per cow for veterinary care
            shelterCost = 2700; // Cost per cow for shelter
            break;
    
    }

    // Total costs calculation
    const totalFeedCost = numCows * feedCost;
    const totalVetCost = numCows * vetCost;
    const totalShelterCost = numCows * shelterCost;
    const totalCost = totalFeedCost + totalVetCost + totalShelterCost;

    // Display results
    document.getElementById('results').innerHTML = `
        <h2>Estimated Costs:</h2>
        <p>Total Feed Cost: Rs.${totalFeedCost}</p>
        <p>Total Veterinary Cost: Rs.${totalVetCost}</p>
        <p>Total Shelter Cost: Rs.${totalShelterCost}</p>
        <p><strong>Total Estimated Cost: Rs.${totalCost}</strong></p>
    `;
}