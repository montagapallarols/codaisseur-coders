import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export default function PostsFeed() {
  const [data, setData] = useState({
    loading: true,
    posts: [],
  });

  async function fetchNext5Posts() {
    setData({ ...data, loading: true });

    // TODO
    // fetch next set of posts (use offset+limit),
    //  and define the variable `morePosts`

    const response = await axios.get(`${API_URL}/posts?offset=${data.posts.length}&limit=5`)
    console.log("More posts", response.data.rows)
    const morePosts = response.data.rows


    setData({
      loading: false,
      posts: [...data.posts, ...morePosts],
    });
  }

  useEffect(() => {
    fetchNext5Posts();
  }, []);

  console.log("DATA.POSTS is...", data.posts)

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>

      {/* TODO: render the list of posts */}

        {data.posts.map(post => {
            return <div key={post.id}>
                <h2>{post.title}</h2>
                <p>
                    {moment(post.createdAt).format("DD-MM-YYYY")} &bull;{" "}
                    <span>
                {post.tags.map(tag => {
                  return (
                    <React.Fragment key={tag.id}>
                      <span>{tag.tag}</span>{" "}
                    </React.Fragment>
                  );
                })}
              </span>
                    </p>
                </div>
        })}

      {/* TODO: show a loading indicator when the posts are loading,
        or else a button to load more posts if not */}
    </div>
  );
}