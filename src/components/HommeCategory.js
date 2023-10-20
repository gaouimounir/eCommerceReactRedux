import { useParams } from "react-router-dom";

export function HommeProducts() {
  const { category } = useParams();

  return (
    <div>
      <h1>Hommes</h1>
    </div>
  );
}
