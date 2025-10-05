import React from 'react';
import { motion } from 'framer-motion';
import './SocialPosts.css';

const SocialPosts = () => {
  const posts = [
    {
      id: 1,
      author: "WhaleShark 🦈",
      time: "2 hours ago",
      content: "Just devoured another weak hand! 💪 The ocean is getting stronger every day! 🦈🌊",
      likes: "1.2K",
      retweets: "450",
      comments: "89"
    },
    {
      id: 2,
      author: "WhaleShark 🦈",
      time: "5 hours ago",
      content: "🚀 TO THE MOON! 🚀 Our pod is growing stronger! Diamond fins only! 💎🦈",
      likes: "2.1K",
      retweets: "780",
      comments: "156"
    },
    {
      id: 3,
      author: "WhaleShark 🦈",
      time: "1 day ago",
      content: "🌊 Swimming through the crypto seas like a boss! Who's ready to ride the wave? 🏄‍♂️",
      likes: "3.4K",
      retweets: "1.2K",
      comments: "234"
    },
    {
      id: 4,
      author: "WhaleShark 🦈",
      time: "2 days ago",
      content: "🦈 HODLing strong in the deep blue! The whale shark community is unstoppable! 💪🌊",
      likes: "4.7K",
      retweets: "1.8K",
      comments: "567"
    }
  ];

  return (
    <motion.section 
      className="social-posts"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Latest from the Ocean 🌊</h2>
      <div className="posts-grid">
        {posts.map((post, index) => (
          <motion.a 
            key={post.id}
            href="https://x.com/whaleshark_coin?s=21" 
            target="_blank" 
            rel="noopener noreferrer"
            className="post-item post-link"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="post-header">
              <img src="./whale-shark-logo.svg" alt="WhaleShark" className="post-avatar" />
              <div className="post-info">
                <span className="post-author">{post.author}</span>
                <span className="post-time">{post.time}</span>
              </div>
            </div>
            <div className="post-content">
              <p>{post.content}</p>
                <img src="./whale-shark-logo.svg" alt="WhaleShark" className="post-image" />
            </div>
            <div className="post-actions">
              <button className="action-btn">❤️ {post.likes}</button>
              <button className="action-btn">🔄 {post.retweets}</button>
              <button className="action-btn">💬 {post.comments}</button>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default SocialPosts;
