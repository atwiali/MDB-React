import axios from "axios";
import { MDBRow } from "mdbreact";
import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Spinner } from "react-bootstrap";

const finalSpaceCharacters = [
  {
    id: "gary",
    name: "Cody Fisher",
    thumb: "/images/Avatar5.png",
  },
  {
    id: "cato",
    name: "Dries vincent",
    thumb: "/images/Avatar6.png",
  },
  {
    id: "kvn",
    name: "Cameron william",
    thumb: "/images/Avatar7.png",
  },
  {
    id: "mooncake",
    name: "Ether howard",
    thumb: "/images/Avatar8.png",
  },
  {
    id: "quinn",
    name: "Kristin Waston ",
    thumb: "/images/Avatar9.png",
  },
];

function App() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?nat=lb&results=5")
      .then((response) => {
        setLoading(false);
        updateCharacters(response.data.results);
      });
    // .catch((err) => console.log(err));
  }, []);
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateCharacters(items);
  }

  if (loading) {
    return (
      <div>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header-Drop">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <MDBRow>
                <ul
                  className="characters"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {characters.map(({ id, name, picture, dob }, index) => {
                    return (
                      <Draggable
                        key={id?.value || index.toString()}
                        draggableId={id?.value || index.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <li
                            className="drag"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="characters-thumb-drop">
                              <img
                                src={picture?.thumbnail}
                                alt={`${name.first} Thumb`}
                              />
                            </div>
                            <p
                              className="drag-name"
                              style={{
                                textAlign: "center",
                                marginLeft: "10px",
                              }}
                            >
                              {name.first}
                            </p>
                            <p
                              className="drop-age"
                              style={{
                                marginLeft: "auto",
                                color: "#695cfe",
                                fontSize: "40px",
                              }}
                            >
                              {dob?.age}%
                            </p>
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              </MDBRow>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}

export default App;
