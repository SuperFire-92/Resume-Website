import React from "react";


interface VidGifProps {
    src: string | undefined;
    style: React.CSSProperties | undefined;
}

//Handles MP4s and gifs, displaying them in the same way. Also works with images UNLESS a file name ends with 4.
function Media({src, style} : VidGifProps) {
    if (src != undefined)
    {
        if (src.charAt(src.length - 1) == '4')
        {
            return (
                <>
                    <video src={src} autoPlay loop muted playsInline style={style}/>
                </>
            )
        }
        else
        {
            return (
                <>
                    <img src={src} style={style} />
                </>
            )
        }
    }
}

export default Media