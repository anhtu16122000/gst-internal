// @Entity('administrative_units')
// export class AdministrativeUnitEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ name: 'full_name', nullable: true })
//   fullName: string;

//   @Column({ name: 'full_name_en', nullable: true })
//   fullNameEn: string;

//   @Column({ name: 'short_name', nullable: true })
//   shortName: string;

//   @Column({ name: 'short_name_en', nullable: true })
//   shortNameEn: string;

//   @Column({ name: 'code_name', nullable: true })
//   codeName: string;

//   @Column({ name: 'code_name_en', nullable: true })
//   codeNameEn: string;
// }

type AdministrativeUnitEntity = {
  id: number;
  fullName: string;
  fullNameEn: string;
  shortName: string;
  shortNameEn: string;
  codeName: string;
  codeNameEn: string;
};

export default AdministrativeUnitEntity;
