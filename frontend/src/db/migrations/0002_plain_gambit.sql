CREATE TABLE IF NOT EXISTS "questionTag" (
	"questionId" integer NOT NULL,
	"tag" text NOT NULL,
	CONSTRAINT "questionTag_tag_questionId_pk" PRIMARY KEY("tag","questionId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tag" (
	"tag" text PRIMARY KEY NOT NULL,
	CONSTRAINT "tag_tag_unique" UNIQUE("tag")
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "difficulty_idx" ON "question" ("difficulty");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "solutions_question_idx" ON "solution" ("questionId");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_idx" ON "solution" ("userId");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "validation_schema_question_idx" ON "validationSchema" ("questionId");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "questionTag" ADD CONSTRAINT "questionTag_questionId_question_id_fk" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "questionTag" ADD CONSTRAINT "questionTag_tag_tag_tag_fk" FOREIGN KEY ("tag") REFERENCES "tag"("tag") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
