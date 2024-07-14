"use client";
import withAuth from "@/hocs/withAuth";
import TutorsPage from "@/screens/tutors";

const page = (props) => {
  return <TutorsPage {...props} />;
};

export default withAuth(page);
