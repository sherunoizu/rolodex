import { Card } from "../card/card.component";

import type { Monster } from "../../App";

import "./card-list.styles.css";

type CardListProps = {
  monsters: Monster[];
};

export const CardList = ({ monsters }: CardListProps) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id} />;
    })}
  </div>
);
