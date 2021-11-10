import axios from 'axios';
import backendUrl from '../backendUrl';
import { setConfig } from './auth';

const baseUrl = `${backendUrl}/projects`;

const addMembers = async (projectId: number, members: number[]) => {
  const response = await axios.post(
    `${baseUrl}/${projectId}/members`,
    { members },
    setConfig()
  );
  return response.data;
};

const removeMember = async (projectId: number, memberId: number) => {
  const response = await axios.delete(
    `${baseUrl}/${projectId}/members/${memberId}`,
    setConfig()
  );
  return response.data;
};

const leaveProject = async (projectId: number) => {
  const response = await axios.post(
    `${baseUrl}/${projectId}/members/leave`,
    null,
    setConfig()
  );
  return response.data;
};

const memberService = { addMembers, removeMember, leaveProject };

export default memberService;
