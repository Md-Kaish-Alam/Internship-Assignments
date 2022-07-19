const ratingData = [
    { restaurant: 'KFC', rating: 5 },
    { restaurant: 'Burger King', rating: 4 },
    { restaurant: 'KFC', rating: 3 },
    { restaurant: 'Domino', rating: 2 },
    { restaurant: 'Subway', rating: 3 },
    { restaurant: 'Domino', rating: 1 },
    { restaurant: 'Subway', rating: 4 },
    { restaurant: 'Pizza Hut', rating: 5 }
];
const headers = Array.from(new Set(ratingData.map(({ restaurant }) => restaurant)));
let arr = [];
headers.map((head) => {
    let total = 0; 
    let count = 0; 
    const filteredratingData = ratingData.filter(obj => obj.restaurant == head); 
    filteredratingData.map((item) => {
        total = filteredratingData.reduce((prev, next) => prev + next.rating, 0);
        count++;
    })
    arr.push({ 'restaurant': head, 'averageRating': (total / count).toFixed(2) }); 
})
return arr;
arr.filter(item => item.averageRating >= 4); 
