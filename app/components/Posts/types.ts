import { PostData } from '@/api/types';

export interface ExtendedPostData extends PostData {
  user?: {
    name: string;
    email: string;
  };
}
