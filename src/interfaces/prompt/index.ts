import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PromptInterface {
  id?: string;
  input: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface PromptGetQueryInterface extends GetQueryInterface {
  id?: string;
  input?: string;
  user_id?: string;
}
