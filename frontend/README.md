## Bear minimim requirements


- we select question to do , from a colletcion of questions 
For this we can keep a database table of questions , each question will 
    - question id -> primary key  
    - description 
    - testcase[] -> many to one relashipship

    tastcase different table 
        - question id -> foreign key 
        - test data 
        - expected result 
        - id -> primary key 


    solutions : 
        - question id 
        - user id 
        - dattime 
        - isAccepted :
        - testcases pass

    


- then user write code and click on button to check it 
- in the backend we will check the code and returns the response 

    we basically have a http server , which will accept code from the client and return the response 
    then it will spin up a container / pod , and it will inject the code in it , along with all the testcase 
    have to implement some login for this inject , in both kuberentes and docker we can mount file to the container , 
    we can do the same in this case , 

    all the code that we get from the user we , will we write it one a file or some how send it to the container 
    since solution is in the formaat of a class ,they must me instatnicating a object then calling the function on it 
    passing diffentent question and checking answer againts the solution , we will keep on doing this and 
    store the result in the db , as well send it to the user 


    thinks i don't know 
    how to programmatically create a container in a kubenters server which is running remotely , like 
    on aws 
     -  may be we can somehow use .kubeconfig file and make sone api request from the backend 
     conatiner usually takes around 1-2 seconds to start ( acceptable  )
     - i will have soem kind of script that will run when the container start and run the code and chedck and return the result 


future things : 
- expant this to multiple language 
- make ui good 
- enalbe colloboration on the code 
- add a white board 
- add vidoe of the user and colloborated ( some thing like a interview setup )



task  : 
22-02-2024
- build a simple frontend to just accept code /text / string 
- send code to backend , how to create a pod in kuberentes using the code and runtime , and execuute the code and return the code somewhere 
- 

