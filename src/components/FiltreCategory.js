import { useParams } from "react-router-dom";

export function ArticleFiltrer() {
  const { category } = useParams();

  return (
    <div>
      <h1>Catégorie : {category}</h1>
    </div>
  );
}
