import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/leads';

export const fetchLeads = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (err) {
    console.error('Error fetching leads:', err);
    throw err;
  }
};

export const addLead = async (lead) => {
  try {
    const response = await axios.post(API_URL, lead);
    return response.data;
  } catch (err) {
    console.error('Error adding lead:', err);
    throw err;
  }
};