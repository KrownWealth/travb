"use client";

import React, { useEffect, useState } from 'react';
import { BlogType } from '@/types/blog';
import BlogCard from './blogCard';
import { getAllPosts } from '@/lib/actions';
import Link from 'next/link';

const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState<BlogType[]>([]);
  const [displayedBlogs, setDisplayedBlogs] = useState<BlogType[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const allPosts = await getAllPosts();
        console.log("Blog post here", allPosts);
        setAllBlogs(allPosts);
        setDisplayedBlogs(allPosts.slice(0, visibleCount));
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchPosts();
  }, [visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 3);
  };

  return (
    <section className="container my-20">
      <div className="gap-8 grid grid-cols-1 sm:grid-cols-3">
        {displayedBlogs.map((blog, index) => (
          <Link key={index} href={`/posts/${blog.slug}`}>
            <BlogCard
              date={blog.date}
              title={blog.title}
              featuredImage={blog.featuredImage}
              author={blog.author}
              excerpt={blog.excerpt}
              categories={blog.categories}
              slug={blog.slug}
            />
          </Link>
        ))}
      </div>
      {visibleCount < allBlogs.length && (
        <div className='flex items-center justify-center my-10'>
          <button 
            onClick={handleLoadMore} 
            className='bg-black text-white w-[20rem] text-3xl p-2 font-bold'
          >Load More </button>
        </div>
      )}
    </section>
  );
}

export default Blogs;
