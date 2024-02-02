function countChars(str: string): number{
    let count: number;
    count = str.length;
    return count;
}//countChars

console.log("Function 1: ");
console.log("Number of characters in \"test 1\" : " + countChars("test 1"));

function countChars_noSpaces(str: string): number{
    let count: number;
    let stringTrimmed: string = str.trim();
    count = stringTrimmed.length;
    return count;
}//countChars2 - trims whitespace from string

console.log("\nFunction 2: ");
console.log("Number of characters in \" test 1 \", without the white spaces: " + countChars_noSpaces(" test 1 "));

function countChars_withOrWithoutSpaces(str: string, withSpace?: boolean): number{
    let count: number;
    if(withSpace)
        count = str.length;
    else
        count = str.trim().length;
    
    return count;
}//countChars3 - optional boolean to use or remove white spaces

console.log("\nFunction 3: ");

console.log("Number of characters in \" test 1 \", not using optional Boolean to not trim white space : " + countChars_withOrWithoutSpaces(" test 1 "));
console.log("Number of characters in \" test 1 \", using optional Boolean to NOT trim white space : " + countChars_withOrWithoutSpaces(" test 1 ", true));
console.log("Number of characters in \" test 1 \", using optional Boolean to trim white space : " + countChars_withOrWithoutSpaces(" test 1 ", false));


