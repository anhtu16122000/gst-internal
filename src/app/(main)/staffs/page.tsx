"use client";
import withAuth from "@/hocs/withAuth";
import StaffsScreen from "@/screens/staffs";

const page = (props) => {
  return <StaffsScreen {...props} />;
};

export default withAuth(page);
