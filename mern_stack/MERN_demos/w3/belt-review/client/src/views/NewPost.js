import React, { useState } from "react";

import axios from "axios";
import { navigate } from "@reach/router";

const NewPost = (props) => {
  // useState("initial value of the state var")
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [primaryCategory, setPrimaryCategory] = useState("");
  const [secondaryCategory, setSecondaryCategory] = useState("");
  const [errors, setErrors] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const newPost = {
      // long-form key value pair - must be used when var is named differently
      title: title,
      // shorthand key value pair when the var name is same as key name
      description,
      imgUrl,
      primaryCategory,
    };

    // because secondaryCategory is NOT required but HAS a minlength validation
    // if user submits empty input box, it will be an empty string that has length 0
    // triggering minlength error, so we will exclude it from the object altogether
    if (secondaryCategory !== "") {
      newPost.secondaryCategory = secondaryCategory;
    }
    // console.log(newPost);

    axios
      .post("http://localhost:8000/api/posts", newPost)
      .then((res) => {
        navigate("/posts");
      })
      .catch((err) => {
        console.log(err.response);
        // validation errors come to .catch because controller method has
        // res.status(400).json - without this the validation errors go to the .then
        setErrors(err.response.data.errors);
      });
  }

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <div>
        <label>Title: </label>
        <input
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        {errors?.title && (
          <span style={{ color: "red" }}>{errors?.title?.message}</span>
        )}
      </div>

      <div>
        <label>Description: </label>
        <input
          type="text"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        {errors?.description && (
          <span style={{ color: "red" }}>{errors?.description?.message}</span>
        )}
      </div>

      <div>
        <label>Image Url: </label>
        <input
          type="text"
          onChange={(event) => {
            setImgUrl(event.target.value);
          }}
        />
        {errors?.imgUrl && (
          <span style={{ color: "red" }}>{errors?.imgUrl?.message}</span>
        )}
      </div>

      <div>
        <label>Primary Category: </label>
        <input
          type="text"
          onChange={(event) => {
            setPrimaryCategory(event.target.value);
          }}
        />
        {errors?.primaryCategory && (
          <span style={{ color: "red" }}>
            {errors?.primaryCategory?.message}
          </span>
        )}
      </div>

      <div>
        <label>Secondary Category: </label>
        <input
          type="text"
          onChange={(event) => {
            setSecondaryCategory(event.target.value);
          }}
        />
        {errors?.secondaryCategory && (
          <span style={{ color: "red" }}>
            {errors?.secondaryCategory?.message}
          </span>
        )}
      </div>

      <button>Submit</button>
    </form>
  );
};

export default NewPost;
