import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCard} from "../components/VideoCard"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard 
      title ={"how to learn MERN in 90 days | Code with me"} 
      author={"Raghav-live"} 
      views={"10M"} 
      timestamp={"10 days ago"} 
      image ={"photo1.jpg"} 
      thumbimage={"thumb.jpg"} />
    </div>
  );
}
