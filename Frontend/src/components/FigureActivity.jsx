import { Link } from "react-router-dom";
import "./FigureActivity.css"


const Figure = ({ activity, idActivity }) => {
  return (
    <figure>
      <Link to={`/activities/${idActivity}`}>
        {activity.image && <img src={activity.image} alt={activity.name} width="200" />}
        <figcaption>
          <h2>{activity.name}</h2>
          <p>{activity.type}</p>
        </figcaption>
      </Link>
    </figure>
  );
};

export default Figure;
