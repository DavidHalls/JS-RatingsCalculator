function collect_ratings(){
    let ratings = {
        count: 0,
        sum: 0,
        average: 0
    };
    let rating = 0;

    return ratings;
}


const elements = document.querySelectorAll('.rating');
console.log(elements);

document.addEventListener('change', ()=>{
    const ratings = collect_ratings();
    alert(ratings.count);

    document.querySelector('#average').value = ratings.average.toFixed(2);

});

elements.forEach((element)=>{
    rating = parseInt(element.id.replace('star',''));    
    ratings.count += parseInt(element.value);
    ratings.sum = parseInt(element.value * rating);
});

if(ratings.count !== 0){
    ratings.average = (ratings.sum / ratings.count);
}
