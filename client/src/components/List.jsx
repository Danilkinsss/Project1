/* eslint-disable react/prop-types */
export default function List({ posts }) {
  return (
    <ul className="flex flex-col">
      {posts.map((post) => (
        <li className="py-4 gap-2 px-8 border-b-2 flex flex-col" key={post.id}>
          <span className="font-bold">{post.author}</span>
          <span className="font-thin">{post.text}</span>
        </li>
      ))}
    </ul>
  );
}
