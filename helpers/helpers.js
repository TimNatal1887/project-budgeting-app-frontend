export function formatMonthDayDate(inputDate) {
    const [month, day, year] = inputDate.split("-").map(Number);
    const formattedDate = new Date(year + 2000, month - 1, day);
  
    const options = { month: "long", day: "numeric" };
    const formattedDateString = formattedDate.toLocaleDateString(undefined, options);
  
    return formattedDateString;
  }

export function getBankTotal(transactions){
    const total = transactions.reduce((accumulatedTotal,transaction)=>{
        const {amount, type} = transaction
        if(type === "Deposit"){
            accumulatedTotal += amount
        }else{
            accumulatedTotal -= amount
        }
        return accumulatedTotal
    },0)

    return total
}