import axios from 'axios';
import backendUrl from '../backendUrl';
import { setConfig } from './auth';
import { BugPayload } from '../redux/types';

const baseUrl = `${backendUrl}/projects`;

const getBugs = async (projectId: number) => {
  const response = await axios.get(`${baseUrl}/${projectId}/bugs`, setConfig());
  console.log(response.data);
  return response.data;
};

const createBug = async (projectId: number, bugData: BugPayload) => {
  const response = await axios.post(
    `${baseUrl}/${projectId}/bugs`,
    bugData,
    setConfig()
  );
  return response.data;
};

const updateBug = async (
  projectId: number,
  bugId: number,
  bugData: BugPayload
) => {
  const response = await axios.put(
    `${baseUrl}/${projectId}/bugs/${bugId}`,
    bugData,
    setConfig()
  );
  return response.data;
};

const deleteBug = async (projectId: number, bugId: number) => {
  const response = await axios.delete(
    `${baseUrl}/${projectId}/bugs/${bugId}`,
    setConfig()
  );
  return response.data;
};

const closeBug = async (projectId: number, bugId: number) => {
  const response = await axios.post(
    `${baseUrl}/${projectId}/bugs/${bugId}/close`,
    null,
    setConfig()
  );
  return response.data;
};

const reopenBug = async (projectId: number, bugId: number) => {
  const response = await axios.post(
    `${baseUrl}/${projectId}/bugs/${bugId}/reopen`,
    null,
    setConfig()
  );
  return response.data;
};

const bugService = {
  getBugs,
  createBug,
  updateBug,
  deleteBug,
  closeBug,
  reopenBug,
};

export default bugService;
