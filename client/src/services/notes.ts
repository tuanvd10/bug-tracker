import axios from 'axios';
import backendUrl from '../backendUrl';
import { setConfig } from './auth';

const baseUrl = `${backendUrl}/projects`;

const createNote = async (
  projectId: number,
  bugId: number,
  noteBody: string
) => {
  const response = await axios.post(
    `${baseUrl}/${projectId}/bugs/${bugId}/notes`,
    { body: noteBody },
    setConfig()
  );
  return response.data;
};

const editNote = async (
  projectId: number,
  noteId: number,
  noteBody: string
) => {
  const response = await axios.put(
    `${baseUrl}/${projectId}/notes/${noteId}`,
    { body: noteBody },
    setConfig()
  );
  return response.data;
};

const deleteNote = async (projectId: number, noteId: number) => {
  const response = await axios.delete(
    `${baseUrl}/${projectId}/notes/${noteId}`,
    setConfig()
  );
  return response.data;
};

const noteService = {
  createNote,
  editNote,
  deleteNote,
};

export default noteService;
