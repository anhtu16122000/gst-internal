import numberHandler from "@/utils/numberHandler";
import { Table } from "antd";
import { TableProps } from "antd/lib";
export type TMyTableProps = {} & TableProps;

const MyTable: React.FC<TMyTableProps> = (props) => {
  const { pagination = {}, ...rest } = props;

  return (
    <Table
      scroll={{
        x: "max-content",
      }}
      pagination={{
        showTotal: (total) => {
          return `Tổng cộng: ${numberHandler.formatNumber(total)}`;
        },
        ...pagination,
      }}
      {...rest}
    />
  );
};

export default MyTable;
