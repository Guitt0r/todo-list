export const dateConvertor = (stringDate: string) => {
    const date = new Date(stringDate)
    return date.toDateString()
}