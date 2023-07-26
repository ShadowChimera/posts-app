'use client';

import { UserData } from '@/api/types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export interface UsersListProps {
  users: UserData[];
  disableOptionText?: string;
  onUserChange?: (userId: number | null) => void;
}

const UsersList = ({
  users,
  onUserChange,
  disableOptionText,
}: UsersListProps) => {
  const handleUserChange = (userId: string | number | null) => {
    userId = userId ? Number(userId) : null;
    onUserChange?.(userId);
  };

  return (
    <Select onValueChange={handleUserChange}>
      <SelectTrigger>
        <SelectValue placeholder="Select user" />
      </SelectTrigger>
      <SelectContent>
        {disableOptionText && (
          <SelectItem value="">{disableOptionText}</SelectItem>
        )}
        {users.map((user) => (
          <SelectItem key={user.id} value={`${user.id}`}>
            {user.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default UsersList;
