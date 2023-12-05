-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

INSERT INTO "Todo"
    ("title")
VALUES
    ('Buy groceries'),
    ('Walk the dog'),
    ('Do laundry');
