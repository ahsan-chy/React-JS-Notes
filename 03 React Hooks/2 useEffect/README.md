# useEffect

In React, components go through three main stages:
### 1️⃣ Mounting: 
This is when a component is first rendered.
### 2️⃣ Update: 
This happens whenever a component is re-rendered.
### 3️⃣  Unmount: 
This occurs when a component is removed.

</br>

To control these stages, we can use the useEffect hook. It takes two parameters: a **function(Callback Function)** that represents the desired effect, and an optional **dependency array**.


The dependency array determines when the effect should run. Here are three scenarios:

- 1️⃣ Empty dependency array: The effect runs only once, during the mounting phase.

- 2️⃣ Dependency array with specific variables: The effect runs during mounting and whenever the listed dependencies change.

- 3️⃣  No dependency array: The effect runs on every re-render, which is usually not desired.

Additionally, useEffect can also include a cleanup function. By returning a function inside the effect, we can perform **cleanup** tasks when the component is unmounted.


![useEffect](https://github.com/ahsan-chy/React-JS-Notes/assets/85479513/d65a8040-f6a4-48cc-9e8a-a8e9ccf5262a)


What will Response useEffect on different dependencies

![useEffect](https://github.com/ahsan-chy/React-JS-Notes/assets/85479513/27439632-6b42-4517-b898-76e672208577)
