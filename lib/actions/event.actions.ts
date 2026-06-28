'use server';

import { Event } from "@/database";
import connectDB from "../mongodb";

export const getEventBySlug = async (slug: string) => {
    try {
        await connectDB();
        const sanitizedSlug = slug.trim().toLowerCase();
        const event = await Event.findOne({ slug: sanitizedSlug }).lean();
        return event ? JSON.parse(JSON.stringify(event)) : null;
    } catch (e) {
        console.error("Error fetching event by slug:", e);
        return null;
    }
}

export const getSimilarEventsBySlug = async (slug: string) =>{
    try {
        await connectDB();

        const event = await Event.findOne({slug});
        if (!event) return [];

        const similar = await Event.find({ _id: {$ne: event._id}, tags: {$in: event.tags}}).lean();
        return JSON.parse(JSON.stringify(similar));
    } catch (e) {
        return [];
    }
}

export const getEvents = async () => {
    try {
        await connectDB();
        const events = await Event.find().sort({ createdAt: -1 }).lean();
        return JSON.parse(JSON.stringify(events));
    } catch (e) {
        console.error("Error fetching events:", e);
        return [];
    }
}