# How Generics Build Reusable and Strictly Typed TypeScript Code

## Introduction

Generics are one of the most powerful features in TypeScript. They allow us to write reusable functions, classes, and interfaces without losing type safety. Instead of writing separate code for strings, numbers, objects, or arrays, we can write one flexible structure that adapts to the type passed into it.

Generics help developers avoid repetition while keeping the code predictable and strongly typed.

## The Problem Without Generics

Suppose we want a function that returns the first item from an array. Without generics, we may write separate functions for different data types.

```ts
function getFirstNumber(items: number[]): number {
  return items[0];
}

function getFirstString(items: string[]): string {
  return items[0];
}
```

This works, but it creates duplication. If we need the same behavior for users, products, or books, we would have to write more functions.

## Solving the Problem with Generics

Generics let us create one function that works with many types.

```ts
function getFirstItem<T>(items: T[]): T {
  return items[0];
}

const firstNumber = getFirstItem([10, 20, 30]);
const firstName = getFirstItem(["Alice", "Bob", "Charlie"]);
```

Here, `T` is a type variable. When we pass an array of numbers, `T` becomes `number`. When we pass an array of strings, `T` becomes `string`. TypeScript keeps the correct return type automatically.

## Generics with Objects

Generics are especially useful when working with objects. We can create reusable functions while still protecting object structure.

```ts
function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

const user = {
  id: 1,
  name: "John Doe",
  age: 21,
};

const userName = getProperty(user, "name");
```

In this example, `K extends keyof T` ensures that the key must exist on the object. If we try to access a property that does not exist, TypeScript will show an error.

```ts
getProperty(user, "email");
```

The `email` key does not exist on the `user` object, so TypeScript prevents the mistake before runtime.

## Generics in Interfaces

Generics can also be used in interfaces to make data structures flexible.

```ts
interface ApiResponse<T> {
  success: boolean;
  data: T;
}

const userResponse: ApiResponse<{ id: number; name: string }> = {
  success: true,
  data: {
    id: 1,
    name: "John Doe",
  },
};
```

The same `ApiResponse` interface can be used for users, products, orders, or any other data type.

## Conclusion

Generics make TypeScript code reusable without sacrificing strict typing. They reduce duplication, improve maintainability, and help developers build flexible components and functions. In large projects, generics are essential because they allow one piece of logic to work safely across many different data structures.
