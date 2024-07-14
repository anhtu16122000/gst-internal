export type MyEntity<T> = {
  id: string;
  createdBy: any;
  updatedBy: any;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
} & T;

export type MyPaginationDTO<T> = {
  page?: number;
  limit?: number;
} & T;

export type TApiResponse<T = any> = {
  data: T;
  message?: string[] | string;
  statusCode?: number;
};
