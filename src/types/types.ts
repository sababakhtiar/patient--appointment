import { Gender, User } from "../../prisma/generated/type-graphql";
import { ObjectType, Field } from "type-graphql";
export type ContextType = {
  req: {
    headers: {
      authorization?: string;
    };
  };
  user: UserPayload;
};
export type UserPayload = {
  id: string;
  role: string;
};

export type PatientFilter = {
  doctorId: string;
  gender?: Gender;
  age?: {
    gte?: number;
    lte?: number;
  };
};

@ObjectType()
export class LoginResponse {
  @Field(() => User)
  user!: User;

  @Field()
  accessToken!: string;

  @Field()
  refreshToken!: string;

  @Field()
  message?: string;
}
