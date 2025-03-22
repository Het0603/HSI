'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const textVariants = {
     hidden: { opacity: 0, y: 20 },
     visible: (i = 1) => ({
          opacity: 1,
          y: 0,
          transition: { delay: 0.2 * i, duration: 0.6, ease: "easeOut" },
     }),
};

const fetchVideos = async () => {
     try {
          const apiUrl = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ITEMS_API;
          const playlistId = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLISTID;
          const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_KEY;

          const response = await axios.get(apiUrl, {
               params: {
                    part: 'snippet',
                    playlistId,
                    maxResults: 50,
                    key: apiKey,
               },
          });

          return response.data.items.map((item) => ({
               id: item.snippet.resourceId.videoId,
               title: item.snippet.title,
               description: item.snippet.description,
               thumbnail: item.snippet.thumbnails?.medium?.url || '',
          }));
     } catch (error) {
          console.error('Error fetching YouTube videos:', error);
          return [];
     }
};

export default function YouTubePlaylist() {
     const [videos, setVideos] = useState([]);

     useEffect(() => {
          const getVideos = async () => {
               const data = await fetchVideos();
               setVideos(data);
          };
          getVideos();
     }, []);

     return (
          <div className="container mx-auto p-4">
               <motion.h2
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-[#00352C] text-3xl sm:text-4xl md:text-5xl font-bold p-3 mb-2"
                    style={{ fontFamily: "SharpGrotesk" }}
               >
                    Training Resources
               </motion.h2>
               <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    {videos.map((video) => (
                         <div key={video.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                              <iframe
                                   className="w-full h-56"
                                   src={`https://www.youtube.com/embed/${video.id}`}
                                   title={video.title}
                                   allowFullScreen
                              ></iframe>
                              <div className="p-4">
                                   <h2 className="text-lg font-semibold">{video.title}</h2>
                                   <p className="text-gray-600 text-sm mt-2">{video.description.substring(0, 100)}...</p>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
}
