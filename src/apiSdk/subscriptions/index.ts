import axios from 'axios';
import queryString from 'query-string';
import { SubscriptionInterface, SubscriptionGetQueryInterface } from 'interfaces/subscription';
import { GetQueryInterface } from '../../interfaces';

export const getSubscriptions = async (query?: SubscriptionGetQueryInterface) => {
  const response = await axios.get(`/api/subscriptions${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createSubscription = async (subscription: SubscriptionInterface) => {
  const response = await axios.post('/api/subscriptions', subscription);
  return response.data;
};

export const updateSubscriptionById = async (id: string, subscription: SubscriptionInterface) => {
  const response = await axios.put(`/api/subscriptions/${id}`, subscription);
  return response.data;
};

export const getSubscriptionById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/subscriptions/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSubscriptionById = async (id: string) => {
  const response = await axios.delete(`/api/subscriptions/${id}`);
  return response.data;
};
