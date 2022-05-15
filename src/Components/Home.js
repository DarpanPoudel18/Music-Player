import React,{useState,useRef,useEffect} from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {faPlay, faPause} from '@fortawesome/free-solid-svg-icons';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>


const Home = (props) => {
    const theme = useTheme();
    const audioEl = useRef(null);
    const[isPlaying,setIsPlaying] = useState(false);
    const[rotate,setRotate] = useState(false);
   
     useEffect(()=>{
      if(isPlaying){
        setRotate(true); 
        audioEl.current.play();
      }else{
        setRotate(false); 
        audioEl.current.pause();
      }
      console.log(audioEl);
      },[isPlaying])
    

   
   return (
    <>
      <Box className="card-parent container" >
       <br/>
       <h1>Playing Now</h1>
       
       <hr className="bar"></hr>
          <CardContent className="card-content" sx={{ flex: '1 0 auto' }}>
        

             {rotate ?  <CardMedia
                      className="song-img"
                       component="img"
                       sx={{ width: 151 }}
                       image={ props.songs[props.currentSongIndex].img_src}
                       alt="error displaying img"
                       title={ props.songs[props.currentSongIndex].title}
                       /> : <CardMedia  
                      className="song-img-before"
                       image={ props.songs[props.currentSongIndex].img_src}
                       sx={{ width: 151 }}
                       > </CardMedia>
                   }

              <Typography >
                 <span className="song-title">{props.songs[props.currentSongIndex].title }</span>
              </Typography>
           
               <Typography>
                 <span className="song-artist">{props.songs[props.currentSongIndex].artist}</span> 
                <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
               </Typography>

          </CardContent>

<h2 className="p-3 mb-2 bg-primary text-white" style={{textAlign:'center',color:'white'}}>
Next:{props.songs[props.nextSongIndex].title }
</h2>

         <Box className="music-function">
             <IconButton aria-label="previous" onClick={()=> props.SkipSong(false)}>
             {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
             </IconButton>

             <IconButton aria-label="play/pause" onClick=
                 {
                  ()=> {
                    
                    setIsPlaying(!isPlaying);
                   
                    }
                 }>
                 <FontAwesomeIcon icon={isPlaying ? faPause : faPlay}/>
             </IconButton>

             <IconButton aria-label="next" onClick={()=> {
               
                 props.SkipSong()
                
               }}>
               {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
             </IconButton>

           
        </Box>
  </Box>
    
 
        
        
      
    
  </>
  )
}

export default Home





 
 
 
