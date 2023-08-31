import {mutation, query} from "./_generated/server"

//Taking the sketches into the database
export const saveSketches = mutation(
async({db},{prompt}:{prompt:string})=>{
await db.insert("sketches",{
    prompt,
}) 
    return{
        message:"success"
    }
})


export const getSketches = query(
    async({db}) => {
    const sketches = await db.query("sketches").collect();
    return sketches;
    }
)

