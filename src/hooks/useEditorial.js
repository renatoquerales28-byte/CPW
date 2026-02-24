import { useState, useEffect } from 'react';

const INITIAL_POSTS = [
    {
        id: '1',
        type: 'news',
        title: 'Blockchain Integration in Supply Chain',
        description: 'Exploring how blockchain is revolutionizing transparency in global logistics.',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
        status: 'active',
        date: new Date().toISOString()
    },
    {
        id: '2',
        type: 'announcement',
        title: 'New Strategic Partnership with Tech Giants',
        description: 'Centhropy announces a major collaboration to scale AI infrastructure.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
        status: 'active',
        date: new Date().toISOString()
    },
    {
        id: '3',
        type: 'impact_study',
        title: 'Retail Transformation Case Study',
        description: 'How our data solutions increased efficiency by 40% for a leading retailer.',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
        status: 'active',
        date: new Date().toISOString()
    },
    {
        id: '4',
        type: 'news',
        title: 'AI Governance and Ethics in 2026',
        description: 'New frameworks for responsible AI deployment are being adopted worldwide.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
        status: 'active',
        date: new Date().toISOString()
    }
];

const INITIAL_SLOTS = {
    news: '1',
    news2: '4',
    announcement: '2',
    impact: '3'
};

export const useEditorial = () => {
    const [posts, setPosts] = useState(() => {
        const saved = localStorage.getItem('ces_posts');
        return saved ? JSON.parse(saved) : INITIAL_POSTS;
    });

    const [slots, setSlots] = useState(() => {
        const saved = localStorage.getItem('ces_slots');
        return saved ? JSON.parse(saved) : INITIAL_SLOTS;
    });

    useEffect(() => {
        localStorage.setItem('ces_posts', JSON.stringify(posts));
    }, [posts]);

    useEffect(() => {
        localStorage.setItem('ces_slots', JSON.stringify(slots));
    }, [slots]);

    const addPost = (post) => {
        const newPost = {
            ...post,
            id: Date.now().toString(),
            date: new Date().toISOString(),
            status: 'active'
        };
        setPosts([newPost, ...posts]);
    };

    const updatePost = (id, updates) => {
        setPosts(posts.map(p => p.id === id ? { ...p, ...updates } : p));
    };

    const deletePost = (id) => {
        setPosts(posts.filter(p => p.id !== id));
        // If deleted post was in a slot, clear the slot
        const newSlots = { ...slots };
        let changed = false;
        Object.keys(newSlots).forEach(key => {
            if (newSlots[key] === id) {
                newSlots[key] = null;
                changed = true;
            }
        });
        if (changed) setSlots(newSlots);
    };

    const togglePostStatus = (id) => {
        const post = posts.find(p => p.id === id);
        if (post) {
            updatePost(id, { status: post.status === 'active' ? 'inactive' : 'active' });
        }
    };

    const setSlot = (slotName, postId) => {
        setSlots({ ...slots, [slotName]: postId });
    };

    return {
        posts,
        slots,
        addPost,
        updatePost,
        deletePost,
        togglePostStatus,
        setSlot
    };
};
