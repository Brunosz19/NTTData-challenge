# NTT DATA CHALLENGE

NTT DATA CHALLENGE is a technical test that evaluates the knowledge of the person. Following the instructions; the job applicant has to create an application as shown in the pictures below. The problem is structured so that the applicant solves it in the programming language of his choice.

![aaaaa](https://user-images.githubusercontent.com/103700965/218245127-fe086da2-a6b0-4b82-b149-4617fc1beec0.png)


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

![authcontext](https://user-images.githubusercontent.com/103700965/218244882-4959b66c-6a48-4a3b-8b76-61d914784d70.png)

"React-table" library was used to create the table with the information. This had to have the data for the header, so they were created by making an useMemo that contain array.

![header](https://user-images.githubusercontent.com/103700965/218244912-6f6455b5-e8ff-42c8-8a01-809a4d986fd5.png)

Then, having already saved the data in a useState thanks to the request that I made to the API through Axios, I create other useMemo that contain array containing objects with the information of each of 15 people.

![column](https://user-images.githubusercontent.com/103700965/218244914-521f9ed8-5b4c-4131-8003-f8836fad042d.png)

Finally, we use those useMemos so that, when invoking those hooks, it returns the data and we go through it in a map, returning the table we want. I even deployed the app so I can see it on google. Here is the [link](https://nttdata-challenge.netlify.app)


## Author
[Bruno Saenz](https://github.com/Brunosz19)
