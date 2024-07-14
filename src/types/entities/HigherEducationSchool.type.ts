import { MyEntity } from "../common.type";

type HigherEducationSchoolEntity = MyEntity<{
  name: string;
  shortHandName: string;
  image: string;
}>;

export default HigherEducationSchoolEntity;
