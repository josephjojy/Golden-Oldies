import React from 'react';
import songs from './songs.json';
import './SongList.css';
import cd from './cd.png';
import hiRes from './hi_res.png';
function SongList(props) {
    return(
        <div className="SongList">
        {
            songs.map((item) => {
            if(item.HiRes) {
                return(
                    <div className="Song" key={item.id}>
                        <span className="SongTitle">{item.Composer} - {item.Name}</span>
                        <span className="More">
                            <img src={hiRes} className="Quality" alt="Hi-Res"/>&nbsp;&nbsp;
                            <span>{item.Sampling}k</span>&nbsp;&nbsp;
                        </span>
                    </div>
                    );
                }
            else 
                return(
                <div className="Song" key={item.id}>
                    <span className="SongTitle">{item.Composer} - {item.Name}</span>
                    <span className="More">
                        <img src={cd} className="Quality" alt="CD"/>&nbsp;&nbsp;
                        <span>{item.Sampling}k</span>&nbsp;&nbsp;
                    </span>
                </div>
                );
            })
        }
        </div>
    )
}

export default SongList;