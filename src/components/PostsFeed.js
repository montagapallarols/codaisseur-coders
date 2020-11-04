import React, { useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, postsFetched } from "../store/feed/actions";
import { selectFeedLoading, selectFeedPosts } from "../store/feed/selectors";


const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export default function PostsFeed() {

  const dispatch = useDispatch()

  const feedLoading = useSelector(selectFeedLoading);
  const feedPosts = useSelector(selectFeedPosts)
 

  async function fetchNext5Posts() {
    dispatch(setLoading(true));

    const response = await axios.get(`${API_URL}/posts?offset=${feedPosts.length}&limit=5`)
    console.log("More posts", response.data.rows)
    const morePosts = response.data.rows


    dispatch(postsFetched(morePosts));
  }

  useEffect(() => {
    fetchNext5Posts();
  }, []);

  console.log("FEED POSTS.....", feedPosts)
  dispatch(setLoading(false))

  return (
    <div>
      <h2>Recent posts</h2>

        {feedPosts.map(post => {
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

        {feedLoading ? <p>Loading...</p> : <button onClick={fetchNext5Posts}>Load more posts...</button>}
    </div>
  );
}