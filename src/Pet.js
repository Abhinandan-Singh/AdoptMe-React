import { Link } from "react-router-dom";

const Pet = ({ name, breed, animal, images, location, id }) => {
  let hero = `http://pets-images.dev-apis.com/pets/none.jpg`;

  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="relative block">
      <div>
        <img src={hero} alt={name} />
      </div>
      <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-purple-300 to-transparent px-2 pt-2">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
