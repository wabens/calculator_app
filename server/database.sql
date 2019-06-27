CREATE TABLE "history" ( 
  "id" SERIAL PRIMARY KEY,
  "operand1" VARCHAR(50),
  "operand2" VARCHAR(50),
  "operator" VARCHAR(50),
  "solution" VARCHAR(100),
  "time" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "history" ("operand1", "operand2", "operator", "solution") 
VALUES (1, 2, 'plus', 3);

SELECT * FROM "history" ORDER BY "time" DESC LIMIT 10;