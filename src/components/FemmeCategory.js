import { useLoaderData } from "react-router-dom";

export function FemmeProduct() {
  const articleFemme = useLoaderData();
  const produitsFemme = articleFemme.filter(
    (article) => article.category === "femme"
  );
  return (
    <>
      <h1>Femme</h1>
      <ul>
        {produitsFemme.map((article) => {
          return <li key={article.id}>{article.title}</li>;
        })}
      </ul>
    </>
  );
}

/* <div>Femme</div>,
        loader: () =>
          fetch("http://localhost:3000/products").then((res) => {
            return res.json(res.data);
          }), */
