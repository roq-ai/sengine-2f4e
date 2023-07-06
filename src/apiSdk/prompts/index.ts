import axios from 'axios';
import queryString from 'query-string';
import { PromptInterface, PromptGetQueryInterface } from 'interfaces/prompt';
import { GetQueryInterface } from '../../interfaces';

export const getPrompts = async (query?: PromptGetQueryInterface) => {
  const response = await axios.get(`/api/prompts${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createPrompt = async (prompt: PromptInterface) => {
  const response = await axios.post('/api/prompts', prompt);
  return response.data;
};

export const updatePromptById = async (id: string, prompt: PromptInterface) => {
  const response = await axios.put(`/api/prompts/${id}`, prompt);
  return response.data;
};

export const getPromptById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/prompts/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePromptById = async (id: string) => {
  const response = await axios.delete(`/api/prompts/${id}`);
  return response.data;
};
