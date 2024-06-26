import Image from "next/image";
import bg from "../../../public/background/projects-background.png"
import ProjectList from "@/components/projects";
import { projectsData} from "../data";
import Staff from "@/components/models/Staff";
import RenderModel from "@/components/RenderModel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt ="background-image" fill className="w-full h-full object-cover object-center opacity-25"/>
  

  <ProjectList projects={projectsData} />
<div className="flex items-center justify-center fixed top-20 left-0 h-screen"> 
  <RenderModel>
  <Staff/>
  </RenderModel>
  </div>
    </main>
  )
}