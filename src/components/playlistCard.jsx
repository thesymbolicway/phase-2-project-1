function PlaylistCard({playlist, raiseClick}) {
    return (
        <div className='card'>
            <h2 key={playlist.id} onClick={() => raiseClick(playlist.id)} >{playlist.name}</h2>
        </div>
    );
}

export default PlaylistCard;