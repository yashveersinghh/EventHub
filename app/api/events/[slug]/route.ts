import { Event } from "@/database";
import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET (req: NextRequest, { params }: { params: { slug: string } }) {
    try {
        await connectDB();
        const { slug } = await params;

        if(!slug || typeof slug !== 'string') {
            return NextResponse.json({ message: 'Invalid slug parameter' }, { status: 400 });
        }

        const sanitizedSlug = slug.trim().toLowerCase();

        const event = await Event.findOne({ slug: sanitizedSlug });

        if (!event) {
            return NextResponse.json({ message: 'Event not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Event fetched successfully', event }, { status: 200 });
    } catch (e) {
        return NextResponse.json({ message: 'Error fetching event by slug', error: e }, { status: 500 });
    }
}