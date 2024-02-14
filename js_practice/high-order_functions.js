a=5
console.log(a)

//converting rupees to dollars

const tans=[100,2000,5793,3000,6500]
const dollar_value=80

let convert=tans.map((amount)=>{
    return (amount/dollar_value).toFixed(0)
})

console.log(convert)