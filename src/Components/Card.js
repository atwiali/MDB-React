import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MDBIcon, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
import { useTranslation } from "react-i18next";
function App() {
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState(false);

  // Get todos from local storage on component mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    } else {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          setTodos(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  // Save todos to local storage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add todo
  const addTodo = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((response) => {
        const newTodo = {
          id: response.data.id,
          title: title,
          completed: false,
        };
        setTodos([...todos, newTodo]);
        setModal(false);
      })
      .catch((error) => {
        console.error(error);
        setModal(false);
      });
  };

  // Delete todo
  const deleteTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.dir = i18n.dir();
  };

  function handleLang(e) {
    changeLanguage(e.target.value);
  }
  return (
    <div className="axios-body">
      <h1 className="api-h1">
        {" "}
        {t("Fetch API using Axios")}{" "}
        <Button
          className="btn-axios"
          variant="primary"
          onClick={() => setModal(true)}
        >
          {t("Add")}
        </Button>
      </h1>

      <div className="div-api">
        {todos.map((todo) => (
          <Card key={todo.id} className="card-api">
            <Card.Img
              variant="top"
              src={`https://picsum.photos/300/200?random=${todo.id}`}
            />
            <Card.Body>
              <Card.Title className="api-title">{todo.title}</Card.Title>
              <Card.Text className="api-text1">{`ID: ${todo.id}`}</Card.Text>
              <Card.Text className="api-text2">{`Completed: ${
                todo.completed ? "Yes" : "No"
              }`}</Card.Text>
              <Button
                variant="danger"
                onClick={() => deleteTodo(todo.id)}
                className="delete-btn"
              >
                {t("Delete")}
              </Button>
            </Card.Body>
          </Card>
        ))}
        <MDBIcon
          className="axios-scroll"
          onClick={scrollToTop}
          icon="arrow-alt-circle-up"
        />
        <MDBModal
          className="modal-axios"
          isOpen={modal}
          toggle={() => setModal(false)}
        >
          <MDBModalHeader className="title-axios">{t("Add")}</MDBModalHeader>
          <MDBModalBody>
            <Form
              onSubmit={(event) => {
                event.preventDefault();
                addTodo(event.target.title.value, event.target.image.files[0]);
                event.target.title.value = "";
                event.target.image.value = "";
              }}
            >
              <Form.Group controlId="formTitle">
                <Form.Label
                  className="title-api"
                  style={{ fontWeight: "bold" }}
                >
                  {t("Title")}
                </Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder={t("Enter title")}
                />
              </Form.Group>
              <Form.Group controlId="formImage">
                <Form.Label className="title-api">{t("Image")}</Form.Label>
                <Form.Control type="file" name="image" accept="image/*" />
              </Form.Group>
              <Button variant="primary" type="submit" className="add-axios-btn">
                {t("Add")}
              </Button>
            </Form>
          </MDBModalBody>
        </MDBModal>
      </div>
    </div>
  );
}

export default App;
