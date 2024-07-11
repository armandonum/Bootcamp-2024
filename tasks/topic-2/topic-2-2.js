function RemoveDuplicates(array)
{
    return array.filter((item,index) => array.indexOf(item) === index);
}

let array2 =[7,9,1,'a','a','f',9,5,2,'d','d'];
console.log(RemoveDuplicates(array2));



function ConcatArray(array)
{
    return array.reduce((acc,current) => acc.concat(current),[]);
}
let array=[
    ['the', 'little', 'hourse'],
    ['plane', 'over' ,'the', 'ocena'],
    ["chocolate", "ice", 'cream', 'is', 'awesome'],
    ['this', 'is','a','lomg','sentences']
];

console.log(ConcatArray(array));