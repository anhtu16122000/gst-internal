// @Entity('administrative_regions')
// export class AdministrativeRegionEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   name: string;

//   @Column({ name: 'name_en' })
//   nameEn: string;

//   @Column({ name: 'code_name', nullable: true })
//   codeName: string;

//   @Column({ name: 'code_name_en', nullable: true })
//   codeNameEn: string;
// }

type AdministrativeRegionEntity = {
  id: number;
  name: string;
  nameEn: string;
  codeName: string;
  codeNameEn: string;
};

export default AdministrativeRegionEntity;
