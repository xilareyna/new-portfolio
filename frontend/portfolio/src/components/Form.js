import { useRef, useEffect, useState } from "react";

export default (props) => {
  const [form, setForm] = useState([]);

  const titleInput = useRef(null);
  const descriptionInput = useRef(null);
  const imageInput = useRef(null);
  const linkInput = useRef(null);

  const createProjectEntry = async (event) => {
    event.preventDefault();
    const title = titleInput.current.value;
    const description = descriptionInput.current.value;
    const image = imageInput.current.value;
    const link = linkInput.current.value;

    const body = JSON.stringify({
      home: {
        title,
        description,
        image,
        link,
      },
    });
    event.currentTarget.reset();

    try {
      const response = await fetch("https://localhost:3000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });
      const data = await response.json();
      setForm([...data.form]);
      console.log(event.currentTarget);
      console.log(event.target);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={createProjectEntry} className="projects">
      <input type="text" ref={titleInput} placeholder="title" />
      <input type="text" ref={descriptionInput} placeholder="description" />
      <br />
      <input type="text" ref={imageInput} placeholder="image link" />
      <input type="text" ref={linkInput} placeholder="link" />
      <br />

      <input type="submit" value="Add to portfolio" />
    </form>
  );
};
