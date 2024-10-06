import React, { useEffect, useState } from "react";
import { getDeportesInfo } from "../lib/get-deportes-info";
import { Card } from "./Card/Card";

export const Deportes = () => {
  const [deportesInfo, setDeportesInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDeportesInfo();
      console.log("Datos de deportes:", data);
      if (data) setDeportesInfo(data);
    };

    fetchData();
  }, []);
  const sportsInfo = [
    {
      title: "Learning to Code",
      subtitle: "Opening a door to the future",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.",
      author: "John Doe",
      date: "Aug. 24, 2015",
      imageUrl:
        "https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg",
    },
    {
      title: "Mastering the Language",
      subtitle: "Java is not the same as JavaScript",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.",
      imageUrl:
        "https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg",
    },
  ];
  console.log("Deportes Info COMPONENTE:", deportesInfo[0]);

  return (
    <div>
      <h1>Los Deportes</h1>
      <ul>
        {deportesInfo.length > 0 ? (
          deportesInfo.map((deporte, index) => (
            <div>
              <li key={index}>
                <p>{deporte.name}</p>
                {deporte.image && (
                  <img
                    src={`http://localhost:1337${deporte.image.url}`}
                    alt={deporte.name}
                    style={{ width: "200px" }}
                  />
                )}
              </li>
              <Card
                key={index}
                title={deporte.name}
                subtitle={"texto de subtitulo"}
                description={"descipcion de ejemplo"}
                author={"autor"}
                date={"fecha"}
                imageUrl={deporte.image.url}
              />
            </div>
          ))
        ) : (
          <p>Cargando datos...</p>
        )}
      </ul>
      {sportsInfo.map((info, index) => (
        <Card
          key={index}
          title={info.title}
          subtitle={info.subtitle}
          description={info.description}
          author={info.author}
          date={info.date}
          imageUrl={info.imageUrl}
        />
      ))}
    </div>
  );
};
