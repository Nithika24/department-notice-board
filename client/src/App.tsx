import { useState, useEffect } from "react";
import NoticeCard from "./NoticeCard";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const [notices, setNotices] = useState<
    { title: string; message: string }[]
  >([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/notices")
      .then((response) => response.json())
      .then((data) => {
        setNotices(data);
      });
  }, []);

  const addNotice = async () => {
    if (title === "" || message === "") {
      alert("Please enter title and message");
      return;
    }

    const response = await fetch("http://localhost:5000/api/notices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        message: message
      })
    });

    const newNotice = await response.json();

    setNotices([...notices, newNotice]);

    setTitle("");
    setMessage("");
  };

  return (
    <div className="container">
      <h1>Department Notice Board</h1>

      <input
        type="text"
        placeholder="Enter notice title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Enter notice message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <br /><br />

      <button onClick={addNotice}>Add Notice</button>

      <hr />

      {notices.map((notice, index) => (
        <NoticeCard
          key={index}
          title={notice.title}
          message={notice.message}
        />
      ))}
    </div>
  );
}

export default App;