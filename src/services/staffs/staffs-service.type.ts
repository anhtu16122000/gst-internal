import { GENDER, ROLES } from "@/types/enum";

export type CreateStaffDto = {
  password: string;
  firstName: string;
  lastName: string;
  gender: GENDER;
  email: string;
  role: ROLES;
};

export type EditStaffDto = {} & Omit<CreateStaffDto, "role">;

export type EditStaffSecretDto = CreateStaffDto;
