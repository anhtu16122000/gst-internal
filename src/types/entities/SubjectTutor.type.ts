// export class SubjectTutorEntity extends MyEntity {
//   @Column({
//     type: 'enum',
//     enum: SUBJECT,
//   })
//   subjectCode;
//   @ManyToOne(() => TutorEntity, (tutor) => tutor.subjectTutors)
//   tutor: TutorEntity;
// }

import { MyEntity } from "../common.type";
import { SUBJECT } from "../enum";
import { TutorEntity } from "./tutor.type";

type SubjectTutorEntity = MyEntity<{
  subjectCode: SUBJECT;
  tutor: TutorEntity;
}>;

export default SubjectTutorEntity;
