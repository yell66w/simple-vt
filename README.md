## Running Locally

1. Install dependencies using yarn:

```shell
yarn
```

2. Start the development server:

```shell
yarn dev
```

3. Open [http://localhost:5173/](http://localhost:5173/) with your browser to see the results.

## Technology Stack

1. React hooks
2. Redux-toolkit (state management) - I used this for its simplicity. It provides a straightforward approach that is well-suited for small applications like this one. Additionally, Redux Toolkit has the capability to scale seamlessly as your application becomes more complex.

## Assumptions

1. Only the elements specified in the wireframe were included, without any additional animations or effects
2. If a user reloads the page, the voted nominees will persist, and the yellow vote button will still be displayed.

## Deployment

1. App is deployed in vercel and will automatically watch for changes in `main` branch:

```
git push origin main
```

2. After building, open [http://simple-vt.vercel.app/](http://simple-vt.vercel.app/) with your browser to see the results.
