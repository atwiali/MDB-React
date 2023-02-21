import { MDBRow } from "mdbreact";
import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const finalSpaceCharacters = [
  {
    id: "gary",
    name: "Gary Goodspeed",
    Tasks: "51",
    thumb: "/images/Avatar.png",
  },
  {
    id: "cato",
    name: "Little Cato",
    Tasks: "67",
    thumb: "/images/Avatar1.png",
  },
  {
    id: "kvn",
    name: "KVN",
    Tasks: "82",
    thumb: "/images/Avatar2.png",
  },
  {
    id: "mooncake",
    name: "Mooncake",
    Tasks: "48",
    thumb: "/images/Avatar3.png",
  },
  {
    id: "quinn",
    name: "Quinn Ergon",
    Tasks: "77",
    thumb: "/images/Avatar4.png",
  },
];

function App({ email }) {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);
  const [user, setUser] = useState({});
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(email));
    if (data) {
      setUser(data);
      if (data?.characters && data.characters.length > 0) {
        updateCharacters(data.characters);
      }
    }
  }, []);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateCharacters(items);
    user.characters = items;
    localStorage.setItem(email, JSON.stringify(user));
  }
  return (
    <div className="App">
      <header className="App-header-Drag">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <MDBRow>
                <ul
                  className="characters"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {characters.map(({ id, name, thumb, Tasks }, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <li
                            className="drag"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="characters-thumb-drag">
                              <img src={thumb} alt={`${name} Thumb`} />
                            </div>
                            <p
                              className="drag-name"
                              style={{
                                textAlign: "center",
                                marginLeft: "10px",
                              }}
                            >
                              {name}
                            </p>
                            <p className="task-drag"> {Tasks}</p>
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
