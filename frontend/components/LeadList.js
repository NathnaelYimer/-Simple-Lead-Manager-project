export default function LeadList({ leads }) {
    return (
      <ul>
        {leads.map((lead) => (
          <li key={lead._id}>
            {lead.name} ({lead.email}) - {lead.status}
          </li>
        ))}
      </ul>
    );
  }