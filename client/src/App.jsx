import { useEffect, useState } from "react";
import List from "./components/List";

function App() {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");

  const BASE_URL = "http://localhost:8080";
  useEffect(() => {
    const getPosts = () => {
      fetch(`${BASE_URL}/posts`)
        .then((res) => res.json())
        .then((data) => setPosts(data));
    };

    setInterval(() => {
      getPosts();
    }, 1000);
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      text,
      author: "Milo",
    };

    fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setText("");
  };

  const bgColor = ((250-text.length) > 0 && (250-text.length) < 20) ? "bg-orange-400 text-white" : (250-text.length) <= 0 ? "bg-red-500 text-white" : ""

  return (
    <div className="min-h-screen gap-4 flex flex-col bg-gray-100">
      <header className="bg-white mx-20 py-4 gap-4 flex flex-col px-8 ">
        <h1 className="text-2xl font-bold">Home</h1>
        <form onSubmit={handleSubmit} className="flex gap-4 items-center">
          <input
            type="text"
            value={text}
            onChange={handleChange}
            className="border w-full p-2 rounded-md"
            placeholder="Write something..."
          />
          <div className={`border rounded-full w-8 h-8 flex justify-center items-center text-[10px] p-2 ${bgColor}`}>{250 - text.length}</div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 rounded-full py-2"
          >
            Post
          </button>
        </form>
      </header>
      <main className="bg-white w-auto mx-20">
        <List posts={posts} />
      </main>
    </div>
  );
}

export default App;
