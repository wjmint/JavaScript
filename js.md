# JavaScript

## What's JavaScript?

- JavaScript was created for making a better website programming.

## How to declare variables

- To decline something in JavaScript, you should start with ``var``, and finish with ``;``.

```js
// undefined
var undefined1 = 'assigned but not used';
// number
// - int
// - float

// string
var a = "it\'s working'"
// console.log(a) -> it's working
// object
var a = {
    key : 'value',
    name = 'wj',
    lastName = function(){
        return this.key + this.name
    }
};
// accesssing key value
a.key = 'value'
a[name] = 'wj'
```



## Functions / keywords

- ``typeof``

  - Same as python's type(a)

  ```js
  typeof a
  ```

- ``console.log()``

  - It prints out ``a`` in console.

  ```js
  var a = 5
  console.log(a);
  // result = 5
  ```

- ``function function_name()``

  - ``a`` in function is called 'Function Scope'.

  ``` js
  function Add(a, b){
      return a + b;
  }
  var x = 1, y = 2;
  Add(x, y) // -> 3
  ```

- ``this``

  ``` js
  var a = {
      b : 5,
      name : 'wj'
      lastName : function(){
          return this.b + this.name
          // it is same as 'return a.b + a.name'
          
      }
  };
  ```

- ``prompt``

  - ``prompt`` prints out the word inside the breakage, and gets the user input in console.

  ``` js
  var a = prompt('What is your name?')
  ```

  ``` bash
  result
  >what is your name?>(user input)
  >now a is (user input).
  ```

  

## Operations

1. Arithmetic operators

   ``` js
   (+, -, *, '/', %)
   ```

2. Assign

   ``` js
   =, ==, ===
   ```

   - ``===`` is comparing the both output and type.

3. Logical operators

   ``` js
   && = and
   || = or
   ! = not
   ```

4. Comparing operators

   ``` js
   >, <, >=, <=, !=, !==
   ```

5. Ternary operators

   - It is same as ``if``, but in one line.
   - You can do some simple ``if`` statement with this operator.

   ``` js
   var a = 5, b = 6, c = 7;
   var d;
   d = a == 5? 'yes' : 'no'
   	console.log(d);
   // result = 'yes'
   ```

## Conditions

   1. ``if``

      - You use breakage after ``if``, and you use ``{}`` to use the ``if`` statement.

      ``` js
      var a = 5;
      if (a > 5){
          console.log('yes');
      }else if(a < 5){
          console.log('no');
      }else{
          console.log(a);
      }
      // result = 'yes'
      ```

2. ``switch``

   - You need a variable to use ``switch``.
   - You can make as much ``case`` as you want, but you need ``default`` case.
   - You need to use ``break`` at the end of every ``case``, but ``default`` doesn't requires it.
   - ``switch``will run one ``case`` that has the correct statement.

   ``` js
   var a = 'A';
   switch(a){
       case "A":
           console.log('yes')
           break;
       default:
           
   }
   // result = 'yes'
   ```

   ### Loop

   - ``for``

     - You need 3 statements to run the ``for`` loop.
       1. statement 1 sets a variable before the loop starts.(``var i = 0``)
       2. statement 2 defines the condition for the loop to run.(``if i < 5, run the loop``)
       3. statement 3 increases a value each time the code block in the loop has been executed.(``i++``)

     ``` js
     for(i = 0; i < 5; i++){
         console.log('i =', i)
     }
     ```

     ```bash
     result
     >i = 0
     >i = 1
     >i = 2
     >i = 3
     >i = 4
     ```

     