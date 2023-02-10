# NTT DATA CHALLENGE

NTT DATA CHALLENGE is a technical test that evaluates the knowledge of the person. Following the instructions; As shown in the images below, the problem is structured for the applicant to solve and create an application in the programming language that he likes. 

## Installation

Use the package manager [npm](https://docs.npmjs.com/cli/v8/commands/npm-install) to install NTT DATA CHALLENGE application.

```bash
npm install
```

## Usage

After the previous step of the installation, to access the React application and be able to see what has been achieved so far, we would have to type the following code in the console.

```bash
npm start
```

## Explanation with visuals

To mention more about this app, I will use some pictures to mention some code an explain what is the use in the React App that I made to solve the challenge.

In this React app, Auth Context was used to save the data so I can manage it wherever I need it.

"React-table" library was used to create the table with the information. This had to have the data for the header, so they were created by making an useMemo that contain array.

Then, having already saved the data in a useState thanks to the request that I made to the API through Axios, I create other useMemo that contain array containing objects with the information of each of 15 people.

Finally, we use those useMemos so that, when invoking those hooks, it returns the data and we go through it in a map, returning the table we want.
## Author
[Bruno Saenz](https://github.com/Brunosz19)