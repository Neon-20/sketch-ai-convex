"use client";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function Home() {
const saveSketchMutation = useQuery(api.sketches.getSketches);
//fetches all the sketches from the backend

return (
    <div className='bg-black'>
        {/* loop over the sketches */}
    {saveSketchMutation?.map((sketch) => (  
        <div key={sketch._id}>{sketch.prompt}</div>
    ))}
    </div>
);
}
