import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, description, music}) {
  return (
    <div className='videoFooter'>
        <div className='videoFooter_text'>
            <h4>@{ name }</h4>
            <p>{ description }</p>
            <div className='videoFooter_music'>
                <MusicNoteIcon className="videoFooter_icon"/>
                <div className='videoFooterMusic_text'>
                    <p>{ music }</p>
                </div>
                
            </div>
            
        </div>
        <img 
            className='videoFooter_record'
            alt="Imagem de vinil girando"
            src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z'
        />
    </div>
  )
}

export default VideoFooter