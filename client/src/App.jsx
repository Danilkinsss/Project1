import { useEffect, useState } from "react";
import List from "./components/List";
import Login from "./components/Login";

function App() {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  // save user in local storage
  const userExist = localStorage.getItem("user");
  useEffect(() => {
    if (userExist) {
      setUser(userExist);
    }
  }, []);

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
    // getPosts();
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      text,
      author: user,
    };

    await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setError(data));

    setText("");
  };

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.clear();
    setUser("");
  };

  const bgColor =
    250 - text.length > 0 && 250 - text.length < 20
      ? "bg-orange-400 text-white"
      : 250 - text.length <= 0
      ? "bg-red-500 text-white"
      : "";

  return (
    <div className="min-h-screen gap-4 flex flex-col bg-gray-100">
      <header className="bg-white md:mx-20 py-4 gap-4 flex flex-col px-8 ">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">🐒 Wasap Blog 🐒</h1>
          {user !== "" && (
            <button
              onClick={handleClick}
              className="bg-gray-200 py-2 px-2 rounded-md shadow-sm"
            >
              Logout
            </button>
          )}
        </div>
        {user === "" && <Login user={user} setUser={setUser} />}
        {user !== "" && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4 items-center"
          >
            <textarea
              type="text"
              value={text}
              onChange={handleChange}
              className="border w-full p-2 rounded-md"
              placeholder="Write something..."
            />
            <div className="flex justify-center items-center gap-4">
              <div
                className={`border rounded-full w-16 h-16 md:w-8 md:h-8 flex justify-center text-2xl items-center md:text-[10px] p-2 ${bgColor}`}
              >
                {250 - text.length}
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 text-2xl md:text-xl rounded-full py-2"
              >
                Post
              </button>
            </div>
          </form>
        )}
        {error.success === false && (
          <div className="flex justify-center items-center">
            <p className="bg-red-300 border-red-600 border p-2 rounded-md text-white">
              {error.msg}
            </p>
          </div>
        )}
      </header>
      {user !== "" && (
        <main className="bg-white w-auto md:mx-20">
          <List posts={posts} userExist={userExist} />
        </main>
      )}
    </div>
  );
}

export default App;
