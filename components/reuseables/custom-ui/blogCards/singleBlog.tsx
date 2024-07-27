'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { SinglePostResponse } from '@/types/blog';
import { getSinglePost } from '@/lib/actions';
import Image from 'next/image';
import SingleBlogsLoading from '../skeletons/singleBlogSkeleton';

const SinglePost: React.FC = () => {
  const [post, setPost] = useState<SinglePostResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const params = useParams();
  const slug = params?.slug;

  useEffect(() => {
    if (!slug) return;

    async function fetchPost() {
      try {
        const fetchedPost = await getSinglePost(slug as string);
        setPost(fetchedPost);
      } catch (err) {
        setError('Error fetching post');
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (loading) return <SingleBlogsLoading />;
  if (error) return <p>{error}</p>;

  if (!post) return <p>No post found</p>;

  const defaultImageUrl = '/images/man-hiking.svg';
  const featuredImageUrl = post.featuredImage?.node?.mediaDetails?.sizes?.[0]?.sourceUrl || defaultImageUrl;

  return (
    <section className="w-full h-auto">
      <article className="container my-20 lg:px-12">
      <h1 className=" text-2xl lg:text-4xl font-bold pb-4">{post.title}</h1>
      <p className="text-gray-500 pb-2">{new Date(post.date).toLocaleDateString()}</p>

      <div className="relative w-full h-52 mt-10">
        <Image
          src={featuredImageUrl}
          alt={post.title}
          width={100}
          height={100}
         
          style={{height: "100%", width: "100%", objectFit: "cover"}}
        />
      </div>

      <p dangerouslySetInnerHTML={{ __html: post.content }}
      className='text-sm lg:text-xl text-justify py-4'></p>
    </article>
    </section>
   
  );
};

export default SinglePost;
