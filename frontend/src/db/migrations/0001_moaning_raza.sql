DO $$ BEGIN
 CREATE TYPE "difficulty" AS ENUM('easy', 'medium', 'hard');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "language" AS ENUM('cpp', 'python', 'javascript');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "question" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"hints" text,
	"difficulty" "difficulty" NOT NULL,
	"testCases" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "solution" (
	"questionId" integer NOT NULL,
	"language" "language" NOT NULL,
	"userSolution" text NOT NULL,
	"userId" text NOT NULL,
	"isAccepted" boolean NOT NULL,
	"totalTestCases" integer NOT NULL,
	"testCasesPassed" integer NOT NULL,
	"attemptedOn" timestamp DEFAULT now(),
	CONSTRAINT "solution_questionId_userId_pk" PRIMARY KEY("questionId","userId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "validationSchema" (
	"questionId" integer NOT NULL,
	"language" "language" NOT NULL,
	"validationClass" text NOT NULL,
	"solutionClass" text NOT NULL,
	"userClass" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "solution" ADD CONSTRAINT "solution_questionId_question_id_fk" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "solution" ADD CONSTRAINT "solution_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "validationSchema" ADD CONSTRAINT "validationSchema_questionId_question_id_fk" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
