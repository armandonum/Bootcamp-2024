function smallest(array)
{
    return array.reduce((min, current) => current < min ? current : min, Infinity);
}


let array1=[12,6,10,2,45,100];
console.log(smallest(array1));









function leastFrequent(array)
{
let frequency={};
array.forEach(item => 
{
frequency[item]=(frequency[item] || 0)+1
});
 let min= Infinity;
 let leastFrequentItem=null;

 for (let item in frequency)
 {
    if( frequency[item]<min)
    {
        min=frequency[item];
        leastFrequentItem=item
    }
 }
return leastFrequentItem;
}
let array =[3,'c','c','a',2,3,'c',3,'c',2,4,'p',9,9];

console.log(leastFrequent(array));
