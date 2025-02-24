# IPAM Lite

IPAM Lite is a web application to manage IP blocks, subnets, and IP addresses. It provides a modern and easy-to-use interface with expandable and collapsible views for IP blocks and subnets.

## Prerequisites

- Node.js
- MongoDB

## Getting Started

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/ipam-lite.git
    cd ipam-lite
    ```

2. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Start MongoDB:
    ```bash
    mongod --dbpath /path/to/your/mongodb/data
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

The backend server will be running on `http://localhost:3000`.

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm start
    ```

The frontend server will be running on `http://localhost:3001`.

### Accessing the Application

Open your web browser and navigate to `http://localhost:3001` to access the IPAM Lite application.

## API Endpoints

### IP Blocks

- `POST /api/ipblocks`: Create a new IP block.
- `GET /api/ipblocks`: Get all IP blocks.

### Subnets

- `POST /api/subnets`: Create a new subnet.
- `GET /api/subnets`: Get all subnets.

### IP Addresses

- `POST /api/ips`: Create a new IP address.
- `GET /api/ips`: Get all IP addresses.

## Data Models

### IPBlock

- `cidr`: String (required)
- `subnets`: Array of Subnet references

### Subnet

- `cidr`: String (required)
- `ips`: Array of IPAddress references

### IPAddress

- `address`: String (required)
- `state`: String (enum: ['Free', 'Static', 'Reserved'], default: 'Free')

## License

This project is licensed under the MIT License.
