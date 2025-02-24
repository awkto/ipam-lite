import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [ipBlocks, setIpBlocks] = useState([]);

  useEffect(() => {
    axios.get('/api/ipblocks').then(response => {
      setIpBlocks(response.data);
    });
  }, []);

  return (
    <div>
      <h1>IPAM Lite</h1>
      {ipBlocks.map(block => (
        <IPBlock key={block._id} block={block} />
      ))}
    </div>
  );
}

function IPBlock({ block }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div onClick={() => setExpanded(!expanded)}>
        {block.cidr} {expanded ? '-' : '+'}
      </div>
      {expanded && (
        <div>
          {block.subnets.map(subnet => (
            <Subnet key={subnet._id} subnet={subnet} />
          ))}
        </div>
      )}
    </div>
  );
}

function Subnet({ subnet }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div onClick={() => setExpanded(!expanded)}>
        {subnet.cidr} {expanded ? '-' : '+'}
      </div>
      {expanded && (
        <div>
          {subnet.ips.map(ip => (
            <IPAddress key={ip._id} ip={ip} />
          ))}
        </div>
      )}
    </div>
  );
}

function IPAddress({ ip }) {
  return <div>{ip.address} - {ip.state}</div>;
}

export default App;
