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
  onDropdownOpenChange?: (isOpened: boolean) => void;
}

const UsersList = ({
  users,
  disableOptionText,
  onUserChange,
  onDropdownOpenChange,
}: UsersListProps) => {
  const handleUserChange = (userId: string | number | null) => {
    userId = userId ? Number(userId) : null;
    onUserChange?.(userId);
  };

  const handleOpenChange = (isOpened: boolean) => {
    onDropdownOpenChange?.(isOpened);
  };

  return (
    <Select onValueChange={handleUserChange} onOpenChange={handleOpenChange}>
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
