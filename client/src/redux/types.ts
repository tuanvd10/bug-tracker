export interface UserState {
  id: number;
  username: string;
  token: string;
}

export type BugPriority = 'low' | 'medium' | 'high';

export interface User {
  id: number;
  username: string;
}

export interface ProjectMember {
  id: number;
  joinedAt: Date;
  member: User;
}

export interface Note {
  id: number;
  bugId: string;
  body: string;
  author: User;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectState {
  id: number;
  name: string;
  members: ProjectMember[];
  bugs: Array<{ id: number }>;
  createdBy: User;
  createdAt: Date;
  updatedAt: Date;
}

export interface BugState {
  id: number;
  projectId: number;
  title: string;
  description: string;
  priority: BugPriority;
  notes: Note[];
  isResolved: boolean;
  createdBy: User;
  updatedBy?: User;
  closedBy?: User;
  reopenedBy?: User;
  closedAt?: Date;
  reopenedAt?: Date;
  updatedAt?: Date;
  createdAt: Date;
}

export type ProjectSortValues =
  | 'newest'
  | 'oldest'
  | 'a-z'
  | 'z-a'
  | 'most-bugs'
  | 'least-bugs'
  | 'most-members'
  | 'least-members';

export type BugSortValues =
  | 'newest'
  | 'oldest'
  | 'a-z'
  | 'z-a'
  | 'closed'
  | 'reopened'
  | 'h-l'
  | 'l-h'
  | 'updated'
  | 'most-notes'
  | 'least-notes';

export type BugFilterValues = 'all' | 'closed' | 'open';

export interface CredentialsPayload {
  username: string;
  password: string;
}

export interface CredentialsPayloadSignUp {
  username: string;
  password: string;
  email: string;
}

export interface ProjectPayload {
  name: string;
  members: number[];
}

export interface BugPayload {
  title: string;
  description: string;
  priority: BugPriority;
}

export interface EditedBugData extends BugPayload {
  updatedAt: Date;
  updatedBy: User;
}

export interface ClosedReopenedBugData {
  isResolved: boolean;
  closedAt: Date;
  closedBy: User;
  reopenedAt: Date;
  reopenedBy: User;
}

export interface NotifPayload {
  message: string;
  type: 'success' | 'error';
}
