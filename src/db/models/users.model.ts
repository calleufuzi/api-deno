import {
  BaseModel,
  dso,
  Field,
  FieldType,
  Model,
  Defaults,
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("Users")
class UserModel extends BaseModel {
  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true,
  })
  id: number;

  @Field({ type: FieldType.STRING, length: 30 })
  name: string;

  @Field({ type: FieldType.STRING, length: 30 , })
  email: string;

  @Field({ type: FieldType.STRING, length: 256 })
  password: string;

  @Field({
    type: FieldType.DATE,
    autoUpdate: true,
    default: Defaults.CURRENT_TIMESTAMP,
    property: "updated_at",
  })
  updated_at: Date;

  @Field({
    type: FieldType.DATE,
    default: Defaults.CURRENT_TIMESTAMP,
    property: "created_at",
  })
  created_at: Date;
}

const userModel = dso.define(UserModel);

export default userModel;
