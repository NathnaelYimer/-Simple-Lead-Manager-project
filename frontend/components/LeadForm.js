import { useState } from 'react';

export default function LeadForm({ addLead }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('New');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newLead = { name, email, status };
    const response = await fetch('/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newLead),
    });
    const data = await response.json();
    addLead(data);
    setName('');
    setEmail('');
    setStatus('New');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="New">New</option>
        <option value="Engaged">Engaged</option>
        <option value="Proposal Sent">Proposal Sent</option>
        <option value="Closed-Won">Closed-Won</option>
        <option value="Closed-Lost">Closed-Lost</option>
      </select>
      <button type="submit">Add Lead</button>
    </form>
  );
}