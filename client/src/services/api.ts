import axios from "axios";

const API_URL = `${process.env.API_URL}/api`;

export const getPatientDetails = async (id: string) => {
  return axios.get(`${API_URL}/patients/${id}`).then(res => res.data);
};

export const createPatient = async (name:string, ownerContact:string) => {
  return axios.post(`${API_URL}/patients`,{name, ownerContact}).then(res => res.data);
};

export const getFollowUps = async () => {
  return axios.get(`${API_URL}/follow-ups`).then(res => res.data);
};

export const getNotifications = async () => {
  return axios.get(`${API_URL}/notifications`).then(res => res.data);
};

export const respondToFollowUp = async (patientId: string, followupDate: string, status: string) => {
  return axios.post(`${API_URL}/respond`, { patientId, followupDate, status }).then(res=> res.data);
};
