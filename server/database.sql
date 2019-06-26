CREATE TABLE "history" ( 
"id" SERIAL PRIMARY KEY,
"operand1" NUMERIC(15, 2),
"operand2" NUMERIC(15, 2),
"operator" VARCHAR(50),
"solution" NUMERIC(30, 2),
"time" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO "history" ("operand1", "operand2", "operator", "solution") 
VALUES (1, 2, 'plus', 3);

SELECT * FROM "history" ORDER BY "time" ASC LIMIT 10;