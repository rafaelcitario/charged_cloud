-- CreateTable
CREATE TABLE "Actor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birth_day" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,

    CONSTRAINT "Actor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "release_date" TEXT NOT NULL,
    "is_available" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActorsOnMovies" (
    "actorId" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,

    CONSTRAINT "ActorsOnMovies_pkey" PRIMARY KEY ("actorId","movieId")
);

-- AddForeignKey
ALTER TABLE "ActorsOnMovies" ADD CONSTRAINT "ActorsOnMovies_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "Actor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActorsOnMovies" ADD CONSTRAINT "ActorsOnMovies_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
