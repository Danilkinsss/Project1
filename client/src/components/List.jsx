import moment from "moment";

/* eslint-disable react/prop-types */
export default function List({ posts, userExist }) {
  return (
    <ul className="flex flex-col">
      {posts.map((post) => (
        <li className="py-4 gap-2 px-8 border-b-2 flex flex-col" key={post.id}>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 justify-center items-center">
              <span className="font-bold flex">{post.author}</span>
              <div>
                {userExist === post.author && (
                  <div className="border bg-green-200 text-2xl rounded-full w-8 h-8 flex justify-center items-center  p-2">
                    🥸
                  </div>
                )}
              </div>
            </div>
            <span className="text-pink-800 text-xs">
              {moment(post.postDate).fromNow()}
            </span>
          </div>
          <span className="font-thin">{post.text}</span>
        </li>
      ))}
    </ul>
  );
}
