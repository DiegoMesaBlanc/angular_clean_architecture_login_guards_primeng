import { UserEntity } from '../../../modules/back-office/users/domain/entities/user.entity';


export interface RequestEntity {
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  data: UserEntity[];
  support: {
    url: string;
    text: string;
  }
}