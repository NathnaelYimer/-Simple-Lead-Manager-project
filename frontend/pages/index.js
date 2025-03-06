import { useState, useEffect } from 'react';
import { fetchLeads, addLead } from '../services/leadService';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [leads, setLeads] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('New');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLeads = async () => {
      setLoading(true);
      try {
        const leads = await fetchLeads();
        setLeads(leads);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch leads');
        setLoading(false);
      }
    };
    getLeads();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newLead = { name, email, status };
    setLoading(true);
    try {
      const addedLead = await addLead(newLead);
      setLeads([...leads, addedLead]);
      setName('');
      setEmail('');
      setStatus('New');
      setLoading(false);
    } catch (err) {
      setError('Failed to add lead');
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Lead Manager</h1>
      {error && <p className={styles.error}>{error}</p>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <select className={styles.select} value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="New">New</option>
          <option value="Engaged">Engaged</option>
          <option value="Proposal Sent">Proposal Sent</option>
          <option value="Closed-Won">Closed-Won</option>
          <option value="Closed-Lost">Closed-Lost</option>
        </select>
        <button className={styles.button} type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Lead'}
        </button>
      </form>
      {loading && <p className={styles.loading}>Loading...</p>}
      <ul className={styles.list}>
        {leads.map((lead) => (
          <li className={styles.listItem} key={lead.id}>
            {lead.name} ({lead.email}) - {lead.status}
          </li>
        ))}
      </ul>
    </div>
  );
}