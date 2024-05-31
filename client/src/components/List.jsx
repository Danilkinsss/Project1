import moment from 'moment'

/* eslint-disable react/prop-types */
export default function List({ posts }) {
  return (
    <ul className="flex flex-col">
      {posts.map((post) => (
        <li className="py-4 gap-2 px-8 border-b-2 flex flex-col" key={post.id}>
          <div className="flex justify-between items-center">
            <span className="font-bold">{post.author} </span>
            <span className="text-pink-800 text-xs">
              {moment(post.postDate).fromNow()}
            </span>
          </div>
          <span className="font-thin">{post.text}</span>
        </li>
      ))}
    </ul>
  )
}
