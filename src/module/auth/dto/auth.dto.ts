import { PickType } from "@nestjs/swagger";
import { User } from "../../user/schemas/user.entity";

export class AuthDto extends PickType(User, ["username", "password"]){}