// React Imports
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Sanity Imports
import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/sanity';
// Custom Imports
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

const Feed = () => {
  const { categoryId } = useParams();

  // States
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);

  useEffect(() => {
    setLoading(true);

    if (categoryId) {
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if (loading) return <Spinner message='We are adding ideas to your feed!' />;

  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
