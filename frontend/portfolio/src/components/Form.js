import { useRef, useEffect, useState } from "react";

export default (props) => {
  const [form, setForm] = useState([]);

  const titleInput = useRef(null);
  const descriptionInput = useRef(null);
  const imageInput = useRef(null);
  const linkInput = useRef(null);

  /////////
  //Read
  /////////
  const fetchForm = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/form");
      const data = await response.json();
      setForm(data);
    } catch (error) {
      console.log(error);
    }
  };

  /////////
  //Delete
  /////////
  const deleteForm = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/form/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      const filteredPost = form.filter((item) => item._id !== data._id);
      setForm(filteredPost);
    } catch (error) {
      console.error(error);
    }
  };

  const createProjectEntry = async (event) => {
    event.preventDefault();
    const title = titleInput.current.value;
    const description = descriptionInput.current.value;
    const image = imageInput.current.value;
    const link = linkInput.current.value;

    const body = JSON.stringify({
      form: {
        title,
        description,
        image,
        link,
      },
    });
    console.log(body);
    event.currentTarget.reset();

    try {
      const response = await fetch("http://localhost:3000/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });
      console.log(response);
      const data = await response.json();
      setForm([...data.form]);
      console.log(event.currentTarget);
      console.log(event.target);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchForm();
  }, [form]);

  return (
    <div>
      <form onSubmit={createProjectEntry} className="projects">
        <input type="text" ref={titleInput} placeholder="title" />
        <input type="text" ref={descriptionInput} placeholder="description" />
        <br />
        <input type="text" ref={imageInput} placeholder="image link" />
        <input type="text" ref={linkInput} placeholder="link" />
        <br />

        <input type="submit" value="Add to portfolio" />
      </form>
      <ul className="posts">
        {form.map((item) => {
          return (
            <li key={item._id} className="journal">
              <br />
              <h3>
                {item.title} {item.description}
              </h3>
              <p>{item.image}</p>
              <br />
              <button
                onClick={(event) => {
                  deleteForm(item._id);
                }}
                id="delete"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
