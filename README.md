# MiniCommerce

with Dhe Next.js 8 Boilerplate

# Note

- For manual login, there is no validation yet, so you can use any email and password
- Cart data is stored in cookies, so the first time you log in is empty
- Delete cart data manually from local storage

# Prerequisites
Node.js (v10 or higher)
npm (v6.5 or higher)

What's Inside?
Next.js (React.js with superpower)

Custom server (Express)
Custom routing (next-routes)
Custom http request wrapper (apisauce)

Redux (saga)
CSS

Getting Started
# Clone the repo and then run

- rename .env.example to .env
- npm install
- npm run dev
- run on http://localhost:8080

Project Directory

.
+-- src/
| +-- **tests**/
| | +-- setup.js
| +-- actions/
| +-- components/
| +-- containers/
| +-- pages/
| +-- reducers/
| +-- sagas/
| +-- services/
| +-- static/
| | +-- css/
| +-- constants.js
| +-- next.config.js
| +-- routes.js
| +-- store.js
+-- server.js
