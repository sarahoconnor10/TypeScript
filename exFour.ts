function printToConsole(message: string)
{
    console.log(message);
}

let numExample: number = 7;         //number example
let boolExample: boolean = true;    //boolean example
let arrExample: number[] = [1,2,3]; //array example
let anyExample: any = 5;            //'any' example
let strExample: string = "This is an example of a string!\nNumber is " + numExample 
                         + " and Boolean is " + boolExample
                         +". \nThe array is " + arrExample[0] + ", " + arrExample[1] + ", " + arrExample[2]
                         +"\nThe Any is " + anyExample;

printToConsole(strExample);