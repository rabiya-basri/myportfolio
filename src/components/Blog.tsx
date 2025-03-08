import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Hoisting in JavaScript',
    excerpt: 'JavaScript hoisting moves variable and function declarations to the top of their scope before execution. However, only declarations are hoisted, not initializations.',
    date: 'Oct 24, 2021',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80',
    readMoreLink:"https://rabiyabasri.hashnode.dev/hoisting-in-javascript"
  },
  {
    title: 'Datatypes in JavaScript',
    excerpt: 'JavaScript has dynamic typing, meaning variables can hold different data types without explicit declarations. ',
    date: 'Oct 14, 2021',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1715&q=80',
    readMoreLink:"https://rabiyabasri.hashnode.dev/datatypes-in-javascript?source=more_articles_bottom_blogs"
  },
  {
    title: 'SQL and types of Commands',
    excerpt: 'SQL stands for "structured Query Language" it is a database language that is design for storing, manipulating and retrieving data from a relational database.',
    date: 'Jan 29, 2021',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1715&q=80',
    readMoreLink:"https://rabiyabasri.hashnode.dev/sql-and-types-of-commands?source=more_articles_bottom_blogs"
  },
  {
    title: 'what is Internet,IP Address and Domain?',
    excerpt: 'The Internet is a global network enabling communication and data sharing. Every device on the internet has a unique IP address for identification. Domains serve as user-friendly names that map to IP addresses, making website access easier.',
    date: 'Dec 20, 2020',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1715&q=80',
    readMoreLink:"https://rabiyabasri.hashnode.dev/what-is-internetip-address-and-domain?source=more_articles_bottom_blogs"
  }
];

export const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-gray-600">Thoughts, tutorials, and insights about software development</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>{post.date}</span>
                  <Clock size={16} className="ml-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href={post.readMoreLink} target="_blank" className="flex items-center text-purple-600 group-hover:text-purple-700">
                  Read More
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-2" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};