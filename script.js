const companies = [
    { name: "Apple", income: [10000, 12000, 500], expenditure: 23000 },
    { name: "Microsoft", income: [10000, 12000, 1500], expenditure: 17000 },
    { name: "Google", income: [15000, 20000, 4000], expenditure: 7000 },
    { name: "SpaceX", income: [150000, 62000, 2000], expenditure: 99000 },
    { name: "GM motors", income: [15000, 20000, 4000], expenditure: 100 },
  ];
  
  function totalKey(arr) {
    arr.forEach(company => {
        const total = company.income.reduce((acc, value) => acc + value, 0);
        company.total = total;
    });
}

totalKey(companies);
console.log(companies); 
    
    
function max(arr) {
    return arr.reduce((acc, value) => acc.total > value.total ? acc : value)

}

let maxcomp = max(companies)

console.log('Max доход:', maxcomp);
    
    
function min(arr) {
    return arr.reduce((acc, value) => acc.total < value.total ? acc : value)

}

let mincomp = min(companies)

console.log('Min доход:', mincomp);



  
    // Функция сохраняет общий доход в новом ключе total у объектов
  // Функция находит компанию которая больше всех зарабатывает
  // Функция находит компанию которая меньше всех зарабатывает
  
