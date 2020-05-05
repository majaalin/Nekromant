import React from 'react';
import './event.css';
import client from '../../contentful';
import Button from './../../components/Button';

const dateFormat = require('dateformat');

const Event = () => {
  const [event, setEvent] = React.useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'event',
        limit: 4,
        order: 'fields.date',
      })
      .then((entries) => {
        setPosts(entries.items);
      });
  }, []);
  return (
    <div className="Events" id="events">
      {event &&
        events.map((event, i) => {
          const date = dateFormat(event.fields.date, 'dd mmm');
          return (
            <div className="Event" key={i}>
              <div className="Info">
                <p className="Date">{date}</p>
                <p className="Title">{event.fields.title}</p>
              </div>
              {post.fields.link ? (
                <Button href={event.fields.link} title="Attend" />
              ) : null}
            </div>
          );
        })}
    </div>
  );
};

export default Event;
