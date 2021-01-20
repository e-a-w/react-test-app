import React, { useEffect, useState } from "react";

const Person = ({ match }) => {
  const [person, setPerson] = useState({});
  const [world, setWorld] = useState({});
  const { id } = match.params;

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${id}`)
      .then(res => res.json())
      .then(json => setPerson(json.result.properties))
      .catch(err => console.log(err));
  }, [id]);

  useEffect(() => {
    fetch(person.homeworld)
      .then(res => res.json())
      .then(json => setWorld(json.result.properties))
      .catch(err => console.log(err));
  }, [person]);

  return (
    <div id="list-container">
      <h2>{person.name}</h2>
      <p>
        {person.gender === "male" ? "He " : "She "}was born in{" "}
        {person.birth_year} and grew up on {world.name}, population{" "}
        {world.population}.{person.gender === "male" ? " His " : " Her "}eye
        color is {person.eye_color} and height is {person.height}.
      </p>
    </div>
  );
};

export default Person;
