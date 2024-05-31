import React, { useState } from "react";

const Login = ({ user, setUser }) => {
  const [data, setData] = useState("");

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", data);
    setUser(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-4 items-center">
        <input
          type="text"
          value={data}
          onChange={handleChange}
          className="border w-full p-2 rounded-md"
          placeholder="Introduce yourself, sir/madam"
        />
        <button
          type="submit"
          className="bg-green-600 text-white w-24 px-4 rounded-full py-2"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
