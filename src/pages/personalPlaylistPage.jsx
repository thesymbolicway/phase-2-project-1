import React, {useState} from "react";

function PersonalPlaylistPage() {
    const [name, setName] = useState("")

    return (
        <div className="new PersonalPlaylistPage">
            <h2>Personal Playlist Page</h2>
            <h2>New Song</h2>
        <form>
        <input onChange={(e)=>setName(e.target.value)} value={name} type="text" name="name" placeholder="Song Name" />
        </form>
        </div>
    );
}

export default PersonalPlaylistPage;