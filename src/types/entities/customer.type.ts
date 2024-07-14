import AccountEntity from "./account.type";

type CustomerEntity = {
  id: string;
  code: string;
  phoneNumber: string;
  note: string;
  account: AccountEntity;
  deletedAt: string;
};

export default CustomerEntity;
