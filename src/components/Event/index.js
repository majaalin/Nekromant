import React from 'react';
import './event.css';
import client from '../../contentful';
import Button from '../Button';

const dateFormat = require('dateformat');

const Event = () => {
  const [posts, setPosts] = React.useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'post',
        limit: 4,
        order: 'fields.date',
      })
      .then((entries) => {
        setPosts(entries.items);
      });
  }, []);
  return (
    <div className="Events" id="events">
      {posts &&
        posts.map((post, i) => {
          const date = dateFormat(post.fields.date, 'dd mmm');
          return (
            <div className="Event" key={i}>
              <div className="Info">
                <p className="Date">{date}</p>
                <p className="Title">{post.fields.title}</p>
              </div>
              {post.fields.link ? (
                <Button href={post.fields.link} title="Attend" />
              ) : null}
            </div>
          );
        })}
    </div>
  );
};

export default Event;
