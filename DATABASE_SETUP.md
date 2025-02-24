# MongoDB Setup for IPAM Lite

This guide will help you install and set up MongoDB for use with the IPAM Lite application.

## Prerequisites

- MongoDB

## Installation

### Install MongoDB on Ubuntu 24

Follow these steps to install MongoDB on Ubuntu 24:

1. Import the public key used by the package management system:
    ```bash
    wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
    ```

2. Create a list file for MongoDB:
    ```bash
    echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
    ```

3. Reload the local package database:
    ```bash
    sudo apt-get update
    ```

4. Install the MongoDB packages:
    ```bash
    sudo apt-get install -y mongodb-org
    ```

5. Start MongoDB:
    ```bash
    sudo systemctl start mongod
    ```

6. Verify that MongoDB has started successfully:
    ```bash
    sudo systemctl status mongod
    ```

7. Enable MongoDB to start on boot:
    ```bash
    sudo systemctl enable mongod
    ```

### Start MongoDB

1. Create a directory for MongoDB data (if not already created):
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

1. Open `/home/altanc/gitprojects/ipam-lite/backend/server.js`.
2. Update the `mongoose.connect` line with your MongoDB connection string:
    ```javascript
    mongoose.connect('mongodb://ipamUser:password@localhost:27017/ipam', { useNewUrlParser: true, useUnifiedTopology: true });
    ```

Now your MongoDB is set up and ready to be used by the IPAM Lite application.
