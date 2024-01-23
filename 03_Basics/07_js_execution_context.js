//JavaScript Execution Context--- How JS run/execute its code/file
/*
//Sample Code
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)


JS execute it's code in 2 Phases

1.++++ Memory Phase/Memory Creation Phase/Creation Phase ++++
2.++++ Execution Phase ++++

--"Global Execution Context/Env." is created first-- attach/allocated to variable "this"
the value of this for browser is "window object"

---Memory Phase: First Cycle(Always happen)
val1 = undefined
val2 = undefined
addNum = definition
result1 = undefined
result2 = undefined

---Execution Phase: 
val1 = 10
val2 = 5
result1 = 15--addNum(from line 10 (function call))---When a function execute a "New Executional Context" or can say sandbox is created.
Context have 2 things: New Variable Environment & Execution Thread
Now two steps repeat Memory Phase and Execution Phase for that particular function
-Memory Phase for addNum
val1 = undefined
val2 = undefined
total = undefined
-Execution Phase for addNum
num1 = 10
num2 = 5
total = 15 ----total return back to parent context(global execution context) and then newly created context is deleted

--"Functional Execution Context"
(--Eval Execution Context-- this is basically the property of Global Object)
*/

//++++++++++Call Stack++++++++++++++
//LIFO 
/*
-global execution context 
-func
..
...
*/
