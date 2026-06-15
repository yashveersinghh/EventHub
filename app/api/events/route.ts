import Event from "@/database/event.model";
import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST (req: NextRequest) {
    try {
        await connectDB();

        const formData = await req.formData();

        let event;

        try {
            event = Object.fromEntries(formData.entries());
        } catch (e) {
            return NextResponse.json({ message: 'Invalid JSON data format', error: e}, { status: 400 })
        }

        const createdEvent = await Event.create(event);

        return NextResponse.json({ message: 'Event created successfully', event: createdEvent }, { status: 201 });
    } catch (e) {
        console.error('Error creating event:', e);
        return NextResponse.json({ message: 'Error creating event', error: e instanceof Error ? e.message : 'Unknown error'}, { status: 500 });
    }
}