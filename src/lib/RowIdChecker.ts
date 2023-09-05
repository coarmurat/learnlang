export function isRowId(value: string): number | boolean {
    // Convert the string to a number
    const numberValue = parseInt(value, 10)
  
    // Check if the conversion resulted in NaN (not a number)
    if (isNaN(numberValue)) {
      return false
    }
  
    // Check if the number is within the range [1, 999999] and does not start with '0'
    return numberValue >= 1 && numberValue <= 999999 && value[0] !== '0' ? numberValue : false
}