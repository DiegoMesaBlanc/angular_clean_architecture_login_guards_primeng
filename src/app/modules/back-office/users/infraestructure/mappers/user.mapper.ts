import { Mapper } from 'src/app/core/models/mappers/mapper';
import { UserModel } from 'src/app/modules/back-office/users/domain/models/user.model';
import { UserEntity } from '../../domain/entities/user.entity';



export class UserImplementationRepositoryMapper extends Mapper<UserEntity, UserModel> {
  mapFrom(param: UserEntity): UserModel {
    return {
      id: param.id,
      email: param.email,
      firstName: param.first_name,
      lastName: param.last_name,
      avatar: param.avatar,
    }
  }

  mapTo(param: UserModel): UserEntity {
    return {
      id: param.id,
      email: param.email,
      first_name: param.firstName,
      last_name: param.lastName,
      avatar: param.avatar,
    }
  }
}