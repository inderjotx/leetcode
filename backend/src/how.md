
# EACH folder for specific language 
how i will do validation 

- i will have i main code file , which will receive user code ,and language information 
- then get the test cases and answers using another lambda fucation ( for security reason not doing in the same lambda funcation ) from dynamodb
- in my lambda env i will have folder for each programming lang  like  like javascript , python , c++
- the json data that i will get from the database i will either keep in the memoery or write on a file ( don't what to do exactly )


- for each problem i have a validation class , that will return response in this format
```js

interface response { 
    totalTestCases : number ,
    noOfTestCasesPassed :number, 
    success : boolean , 
    error ?:  { 
        // keep one test cases
        input : // test case input  ,
        output : // test case output , 
        errorMessage : // error message  
}
    } , 

```