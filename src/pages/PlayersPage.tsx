import { Table } from "@avaya/neo-react";
import { translations } from "../mock-data";

export type Player = {
  name: string;
  seasons: number;
  photo: string;
  goals: number;
  assists: number;
};

export const playerData: Player[] = [
  {
    name: "Lionel Messi",
    seasons: 19,
    photo: "messi.jpg",
    goals: 806,
    assists: 357,
  },
  {
    name: "Pele",
    seasons: 20,
    photo: "pele.jpg",
    goals: 762,
    assists: 352,
  },
  {
    name: "Diego Maradona",
    seasons: 21,
    photo: "maradona.jpg",
    goals: 311,
    assists: 254,
  },
  {
    name: "Cristiano Ronaldo",
    seasons: 21,
    photo: "cr7.jpg",
    goals: 837,
    assists: 236,
  },
  {
    name: "Romario",
    seasons: 22,
    photo: "romario.jpg",
    goals: 755,
    assists: 10,
  },
];

export function getPlayers(): Promise<Player[]> {
  return new Promise((resolve, reject) => {
    resolve(playerData);
    reject(console.log("Failed fetching players"));
  }
  );
}

const PlayersPage = () => {
  const theTranslations = translations;
  return (
    <section>
      <h1> Legends of Soccer</h1>
      <Table
        data={playerData.map((item) => {
          return { ...item, id: item.goals };
        })}
        columns={[
          { Header: "Name", accessor: "name" },
          { Header: "Seasons", accessor: "seasons" },
          { Header: "Goals", accessor: "goals" },
          { Header: "Assists", accessor: "assists" },
        ]}
        itemsPerPageOptions={[5, 10]}
        translations= {theTranslations}
      />
    </section>
  );
};

export default PlayersPage;
