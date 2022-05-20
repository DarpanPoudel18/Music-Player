import React,{useState,useEffect} from 'react'
import Home from './Components/Home'
import './App.css'

const App = () => {
  const[songs,setSongs] = useState(
    [
      {
        id:1,
        title:"Tere Liye",
        artist:"Atif aslam",
        img_src:"./images/tereliye.jpg ",
        src:"./songs/TereLiye.mp3"
      },
      {
        id:2,
        title:"Tera Hone Laga",
        artist:"Atif aslam",
        img_src:"./images/terahonelaga.jpg",
        src:"./songs/TeraHoneLaga.mp3"
      },
      {
        id:3,
        title:"Bakhuda",
        artist:"Atif aslam",
        img_src:"./images/bakhudatum.jpg",
        src:"./songs/Bakhuda.mp3"
      },
      {
        id:4,
        title:"Tu Jane Na",
        artist:"Atif aslam",
        img_src:"./images/tu.jpg",
        src:"./songs/TUJaneNa.mp3"
      },
      {
        id:5,
        title:"Be Intehaan",
        artist:"Atif aslam",
        img_src:"./images/beintehaan.jpeg",
        src:"./songs/BeIntehaan.mp3"
      },
      {
        id:6,
        title:"Doorie",
        artist:"Atif aslam",
        img_src:"./images/doorie.jpeg",
        src:"./songs/Doorie.mp3"
      },
       {
        id:7,
        title:"Kuch Is Tarah",
        artist:"Atif aslam",
        img_src:"./images/kuch.jpeg",
        src:"./songs/KuchIsTarah.mp3"
      },
      {
        id:8,
        title:"Piya ore Piya",
        artist:"Atif aslam",
        img_src:"./images/piyaorepiya.jpg",
        src:"./songs/piya.mp3"
      }
      
    ]
  )

  const[currentSongIndex,setCurrentSongIndex] = useState(0);
  const[nextSongIndex,setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(()=>{
    setNextSongIndex(()=> {
      if(currentSongIndex + 1 > songs.length - 1){
        return 0;
      }else{
        return currentSongIndex + 1;
      }
    });
       },[currentSongIndex]);


       const SkipSong=(forwards=true)=>{
        if(forwards){
          setCurrentSongIndex(()=>{
            let temp = currentSongIndex;
            temp++;
      
            if(temp > songs.length - 1){
              temp = 0;
            }
      
            return temp;
          })
        } else{
          setCurrentSongIndex(()=>{
            let temp = currentSongIndex;
            temp--;
      
            if(temp < 0){
              temp = songs.length - 1;
            }
      
            return temp;
          })
        }
      }

  return (
    <div className="App" >
    
   <Home 
    currentSongIndex={currentSongIndex}
    setCurrentSongIndex={setCurrentSongIndex}
    nextSongIndex={nextSongIndex}
    songs={songs}
    SkipSong={SkipSong}
    title={songs[nextSongIndex].title}
   />
   </div>
  )
}

export default App
