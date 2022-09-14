function TrackListDetails({data}) {
    console.log(data);
    return (
        <div>
            <ul>
                {
                    data.map(track => <li>{track.track.name}</li>)
                }
            </ul>
        </div>
    );
}

export default TrackListDetails;