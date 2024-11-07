
# Blog-2

### How to handle asynchronous operations using async/await over callback/promise TypeScript.

Asynchronous programming is the backbone of modern web development. It's allows to run non-blocking operations—such as making API calls, querying databases, or handling I/O tasks—without blocking the main thread of execution. In TypeScript, we have different ways to deal with asynchronous operations, most notably callbacks/promises, and the more recent async/await. In this post, we’ll discuss why async/await is better than callback/promise, and how to use it effectively in TypeScript. 

### Callbacks:
Before async/await the usual approach to handling asynchronous operations was through callbacks. A callback is simply a function passed as an argument to another function, executed once the operation completes.

```
// fetch data using callback

function fetchUserData(callback: (data: string) => void) {
  setTimeout(() => {
    const userData = "User: John Doe";
    callback(userData);
  }, 1000);
}

fetchUserData((data: string) => {
  console.log(data);
});
```


### Promises:
Promises—a more elegant way to handle asynchronous operations. Promises represent a value that will eventually be resolved or rejected. However, while promises clean up the nesting a bit, chaining them still isn’t the most intuitive way to write asynchronous code.

```
// fetch data using promises

function fetchUserData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = "User: John Doe";
      resolve(userData); 
    }, 1000);
  });
}

fetchUserData()
  .then((data) => {
    console.log(data); 
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

### Async/Await:
async/await is like the magic wand of asynchronous programming. It is built on top of promises, allowing to write asynchronous code that looks and behaves like synchronous code, without blocking the main thread. The beauty lies in its simplicity and readability.

```
// fetch data using async/await

async function fetchUserData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = "User: John Doe";
      resolve(userData);
    }, 1000);
  });
}

async function displayUserData() {
  try {
    const data = await fetchUserData();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

displayUserData();

```

### Why async/await Is better?
- **Simplicity:** The biggest advantage of async/await is how it simplifies the asynchronous flow. No more chaining .then() or nesting callbacks. 
- **Error Handling:** async/await uses try/catch blocks for error handling, just like synchronous code. 
- **Avoiding Callback:** It eliminates the need for nested callbacks, making the code flatter and more readable.
- **Readability & Maintainability:** async/await transforms the asynchronous code into something that resembles synchronous code, improving readability and maintainability.


async/await makes asynchronous programming in TypeScript much more intuitive, and it’s the way forward for anyone serious about writing clean, maintainable code.  It simplifies the code structure and eliminates many of the complexities that come with handling asynchronous operations.


