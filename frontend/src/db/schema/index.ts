import { questions, solutions, validationSchema, tag, questionTag } from "@/db/schema/question";
import { users } from "@/db/schema/user";

import * as userSchema from "@/db/schema/user"
import * as questionSchema from "@/db/schema/question"
import * as relations from "@/db/schema/relations"

const schema = {
    ...userSchema,
    ...questionSchema,
    ...relations
}



export { questions, solutions, tag, questionTag, validationSchema, users, schema }