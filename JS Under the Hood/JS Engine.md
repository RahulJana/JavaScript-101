# JS-Engine

Engine/ programme that executes the JS code. For example: V8 Engine from Google, which powers Google chrome and node-JS.

JS Engine contains two types of memory: 1. Call stack and 2. Heap. In call `stack` all the code is executed using `Execution Context`. On the other hand Heap is an `unstructured memory pool` which stores all the necessary objects(data) needed for the execution of the programme.

![Compilation vs Interpretation vs JIT compilation](JS Under the Hood\media\Compilation vs Interpretation vs JIT compilation.PNG)

## Steps of JIT Compilation

Source code ----> JS Engine[
    --> 1. Step-1: Parsing: Code is being parsed into a data-structure using AST(Abstract Syntax Tree)

**JS source code:**

```JS
const x = 5;
```

**AST in JSON format:**

```JSON
{
    "type": "Program",
    "body": [
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "x"
                    },
                    "init": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5"
                    }
                }
            ],
            "kind": "const"
        }
    ],
    "sourceType": "script"
}
```

]