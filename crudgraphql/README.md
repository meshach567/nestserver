# Recreating the README.md content and saving it to a file

readme_content = """
# Nest.js Places Management API

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [GraphQL Playground](#graphql-playground)
- [Authentication](#authentication)
- [Authorization](#authorization)
- [File Uploads](#file-uploads)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a Nest.js server application with GraphQL endpoints for managing places. It includes authentication and authorization functionalities, CRUD operations for places, and handles multiple file uploads for images. The data is persisted using a PostgreSQL database with TypeORM as the ORM.

## Features

- **Authentication**: Signup and login endpoints.
- **Authorization**: Two user types, ADMIN and USER. Only ADMIN users can add, edit, or delete a place.
- **CRUD Operations**: Create, Read, Update, and Delete endpoints for managing places.
- **GraphQL API**: For interacting with the backend.
- **File Uploads**: Handles multiple file uploads for images.
- **Data Persistence**: Uses PostgreSQL with TypeORM.

## Requirements

- Node.js
- PostgreSQL

## Installation

1. **Clone the repository**

\`\`\`bash
git clone https://github.com/your-username/places-management-api.git
cd places-management-api
\`\`\`

2. **Install dependencies**

\`\`\`bash
npm install
\`\`\`

3. **Set up environment variables**

Create a \`.env\` file in the root of the project and add the following environment variables:

\`\`\`
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=your_db_username
DATABASE_PASSWORD=your_db_password
DATABASE_NAME=your_db_name
JWT_SECRET=your_jwt_secret
\`\`\`

4. **Run the PostgreSQL database**

Ensure your PostgreSQL server is running and the database specified in the \`.env\` file is created.

5. **Run the migrations**

\`\`\`bash
npm run typeorm migration:run
\`\`\`

## Running the Application

1. **Start the application**

\`\`\`bash
npm run start
\`\`\`

2. **Start the application in development mode**

\`\`\`bash
npm run start:dev
\`\`\`

## GraphQL Playground

Access the GraphQL Playground at \`http://localhost:3000/graphql\` to interact with the API and test the endpoints.

## Authentication

### Signup

\`\`\`graphql
mutation {
  signup(username: "testuser", password: "testpassword") {
    id
    username
  }
}
\`\`\`

### Login

\`\`\`graphql
mutation {
  login(username: "testuser", password: "testpassword") {
    accessToken
  }
}
\`\`\`

## Authorization

There are two user roles: \`ADMIN\` and \`USER\`. Only \`ADMIN\` users can create, update, or delete places.

### Role Decorator

Use the \`@Roles\` decorator to restrict access to certain endpoints.

\`\`\`typescript
@Roles(UserRole.ADMIN)
@Mutation(() => PlaceModel)
createPlace(@Args('createPlaceInput') createPlaceInput: CreatePlaceInput) {
  return this.placeService.create(createPlaceInput);
}
\`\`\`

## File Uploads

This project supports multiple file uploads for images. You can upload images using GraphQL mutations.

### Example Mutation

\`\`\`graphql
mutation($file: Upload!) {
  uploadImage(file: $file) {
    url
  }
}
\`\`\`

## Folder Structure

\`\`\`
src/
|-- auth/
|   |-- auth.module.ts
|   |-- auth.service.ts
|   |-- auth.resolver.ts
|   |-- jwt.strategy.ts
|   |-- local.strategy.ts
|   |-- roles.guard.ts
|   |-- roles.decorator.ts
|-- common/
|   |-- entities/
|   |   |-- base.entity.ts
|   |-- dto/
|   |   |-- create-place.input.ts
|   |   |-- update-place.input.ts
|-- place/
|   |-- place.module.ts
|   |-- place.service.ts
|   |-- place.resolver.ts
|   |-- place.entity.ts
|   |-- place.model.ts
|-- user/
|   |-- user.module.ts
|   |-- user.service.ts
|   |-- user.resolver.ts
|   |-- user.entity.ts
|   |-- user.model.ts
|-- app.module.ts
|-- main.ts
\`\`\`

## Contributing

1. Fork the repository.
2. Create a new branch (\`git checkout -b feature-branch\`).
3. Commit your changes (\`git commit -am 'Add new feature'\`).
4. Push to the branch (\`git push origin feature-branch\`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
"""

# Saving the README.md content to a file
file_path = "/mnt/data/README.md"
with open(file_path, "w") as file
