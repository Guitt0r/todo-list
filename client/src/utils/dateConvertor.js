export const dateConvertor=(stringDate)=>{
    const date = new Date(stringDate)
    return date.toDateString()
}