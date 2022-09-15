function TrackListDetails({data}) {
    console.log(data);
    return (
        <>
                {
                    data.map(track => <div className="card">{track.track.name}</div>)
                }
        </>
    );
}

export default TrackListDetails;