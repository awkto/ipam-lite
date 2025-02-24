# MongoDB Setup for IPAM Lite

This guide will help you install and set up MongoDB for use with the IPAM Lite application.

## Prerequisites

- MongoDB

## Installation

### Install MongoDB

Follow the instructions for your operating system to install MongoDB:

- [MongoDB Installation Documentation](https://docs.mongodb.com/manual/installation/)

### Start MongoDB

1. Create a directory for MongoDB data:
    ```bash
    mkdir -p /path/to/your/mongodb/data
    ```

2. Start the MongoDB server:
    ```bash
    mongod --dbpath /path/to/your/mongodb/data
    ```

### Verify MongoDB Installation

1. Open a new terminal and start the MongoDB shell:
    ```bash
    mongo
    ```

2. Verify that MongoDB is running by checking the server status:
    ```bash
    use admin
    db.serverStatus()
    ```

You should see a JSON output with the server status information.

## Configuration

### Create a Database

1. Open the MongoDB shell:
    ```bash
    mongo
    ```

2. Create a new database for IPAM Lite:
    ```bash
    use ipam
    ```

### Set Up User Authentication (Optional)

If you want to set up user authentication for MongoDB, follow these steps:

1. Create an admin user:
    ```bash
    use admin
    db.createUser({
      user: "admin",
      pwd: "password",
      roles: [{ role: "userAdminAnyDatabase", db: "admin" }]
    })
    ```

2. Create a user for the IPAM Lite database:
    ```bash
    use ipam
    db.createUser({
      user: "ipamUser",
      pwd: "password",
      roles: [{ role: "readWrite", db: "ipam" }]
    })
    ```

3. Restart MongoDB with authentication enabled:
    ```bash
    mongod --auth --dbpath /path/to/your/mongodb/data
    ```

4. Connect to MongoDB with authentication:
    ```bash
    mongo -u "admin" -p "password" --authenticationDatabase "admin"
    ```

## Connecting IPAM Lite to MongoDB

The IPAM Lite application is configured to connect to MongoDB running on `localhost` with the default port `27017`. If you have set up user authentication, update the connection string in the backend configuration.

### Update Connection String

1. Open `/home/username/gitprojects/ipam-lite/backend/server.js`.
2. Update the `mongoose.connect` line with your MongoDB connection string:
    ```javascript
    mongoose.connect('mongodb://ipamUser:password@localhost:27017/ipam', { useNewUrlParser: true, useUnifiedTopology: true });
    ```

Now your MongoDB is set up and ready to be used by the IPAM Lite application.
