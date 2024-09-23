This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

21. 设集合 \( M = \{(i,j,s,t) | i \in \{1,2\}, j \in \{3,4\}, s \in \{5,6\}, t \in \{7,8\}, 2|(i + j + s + t) \} \)。对于给定有穷数列 \( A: \{a_n\} (1 \leq n \leq 8) \)，及序列 \( \Omega: \omega_1, \omega_2, \dots, \omega_k = (i_k, j_k, s_k, t_k) \in M \)，定义变换 \( T \) ：将数列 \( A \) 的第 \( i_1, j_1, s_1, t_1 \) 项加1，得到数列 \( T_1(A) \)；将数列 \( T_1(A) \) 的第 \( i_2, j_2, s_2, t_2 \) 列加1，得到数列 \( T_2 T_1(A) \)……重复上述操作，得到数列 \( T_k...T_2 T_1(A) \)，记为 \( \mathcal{Q}(A) \)。

(1) 给定数列 \( A: 1, 3, 2, 4, 6, 3, 1, 9 \) 和序列 \( \Omega: (1, 3, 5, 7), (2, 4, 6, 8), (1, 3, 5, 7) \)，写出 \( \mathcal{Q}(A) \)；

(2) 是否存在序列 \( \Omega \)，使得 \( \mathcal{Q}(A) \) 使 \( a_1 + 2, a_2 + 6, a_3 + 4, a_4 + 2, a_7 + 4, a_8 + 4 \) ，若存在，写出一个符合条件的 \( \Omega \)；若不存在，请说明理由；

(3) 若数列 \( A \) 的各项均为正整数，且 \( a_1 + a_2 = a_3 + a_4 = a_5 + a_6 = a_7 + a_8 \)，为偶数，证明：存在序列 \( \Omega \)，使得 \( \mathcal{Q}(A) \) 为常数列。
