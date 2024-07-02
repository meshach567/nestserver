
# Places Management PWA

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
  - [Running the Backend](#running-the-backend)
  - [Running the Frontend](#running-the-frontend)
- [Connecting Frontend and Backend](#connecting-frontend-and-backend)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a Progressive Web Application (PWA) for managing places, built with a Nuxt.js 3 frontend and a Nest.js backend. It provides functionalities for user signup, login, and managing places. Admin users can create, edit, and delete places, while normal users can view and bookmark places.

## Features

- User Signup and Login
- Admin Dashboard for Managing Places
- View All Places
- View Place Details
- Bookmark Places
- Responsive Design with TailwindCSS
- PWA Features for Offline Support and Installability

## Requirements

- Node.js
- PostgreSQL
- A GitHub account for repository management

## Installation

### Backend Setup

1. **Clone the backend repository**

   ```bash
   git clone https://github.com/your-username/nest-places-api.git
   cd nest-places-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root of the backend project and add the following variables:

   ```env
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USER=yourusername
   DATABASE_PASSWORD=yourpassword
   DATABASE_NAME=places
   JWT_SECRET=yourjwtsecret
   ```

4. **Run the database migrations**

   ```bash
   npm run typeorm migration:run
   ```

### Frontend Setup

1. **Clone the frontend repository**

   ```bash
   git clone https://github.com/your-username/nuxt-places-pwa.git
   cd nuxt-places-pwa
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root of the frontend project and add the following variables:

   ```env
   API_URL=http://localhost:3000/graphql
   ```

## Running the Application

### Running the Backend

1. **Start the backend server**

   ```bash
   npm run start:dev
   ```

   The backend API will be running at `http://localhost:3000`.

### Running the Frontend

1. **Start the frontend development server**

   ```bash
   npm run dev
   ```

   The frontend application will be running at `http://localhost:3001`.

## Connecting Frontend and Backend

The frontend and backend communicate via GraphQL. The frontend application uses Apollo Client to make GraphQL queries and mutations to the backend API.

### GraphQL Configuration in Frontend

The Apollo Client is configured to use the backend API endpoint specified in the `.env` file.

```javascript
// apollo.config.js
export default {
  clientConfigs: {
    default: {
      httpEndpoint: process.env.API_URL,
    },
  },
};
```

### Authentication Flow

1. **Signup and Login**

   Users can sign up and log in through the frontend, which sends the relevant GraphQL mutations to the backend.

   ```graphql
   mutation Signup($username: String!, $password: String!) {
     signup(username: $username, password: $password) {
       id
       username
     }
   }

   mutation Login($username: String!, $password: String!) {
     login(username: $username, password: $password) {
       accessToken
     }
   }
   ```

2. **Protected Routes**

   The frontend uses Vue Router to protect admin routes, ensuring only authenticated users with admin privileges can access them.

### CRUD Operations for Places

Admin users can create, update, and delete places through the frontend, which sends the corresponding GraphQL mutations to the backend.

```graphql
mutation CreatePlace($input: CreatePlaceInput!) {
  createPlace(createPlaceInput: $input) {
    id
    name
    description
    location
    latitude
    longitude
    openHours
    images
  }
}

mutation UpdatePlace($id: Int!, $input: UpdatePlaceInput!) {
  updatePlace(id: $id, updatePlaceInput: $input) {
    id
    name
    description
    location
    latitude
    longitude
    openHours
    images
  }
}

mutation DeletePlace($id: Int!) {
  deletePlace(id: $id) {
    id
  }
}
```

## Project Structure

### Backend (Nest.js)

```
src/
|-- auth/
|-- places/
|-- users/
|-- main.ts
|-- app.module.ts
```

### Frontend (Nuxt.js)

```
src/
|-- apollo/
|   |-- mutations.js
|   |-- queries.js
|-- components/
|   |-- PlaceForm.vue
|   |-- PlaceList.vue
|   |-- PlaceDetails.vue
|-- pages/
|   |-- index.vue
|   |-- login.vue
|   |-- signup.vue
|   |-- places/
|       |-- index.vue
|       |-- _id.vue
|-- store/
|   |-- index.js
|-- nuxt.config.js
|-- package.json
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
