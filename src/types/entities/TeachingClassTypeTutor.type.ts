// @Entity('teachingClassType_tutors')
// export class TeachingClassTypeTutorEntity extends MyEntity {
//   @Column({
//     type: 'enum',
//     enum: TeachingClassType,
//   })
//   teachingClassTypeCode;

//   @ManyToOne(() => TutorEntity, (tutor) => tutor.teachingClassTypeTutors)
//   tutor: TutorEntity;
// }

import { MyEntity } from "../common.type";
import { TeachingClassType } from "../enum";
import { TutorEntity } from "./tutor.type";

type TeachingClassTypeTutorEntity = MyEntity<{
  teachingClassTypeCode: TeachingClassType;
  tutor: TutorEntity;
}>;

export default TeachingClassTypeTutorEntity;
