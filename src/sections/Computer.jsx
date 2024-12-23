import {myProjects} from "../constants/index.js";
import {Suspense, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {Center, OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import DemoComputer from "../components/DemoComputer.jsx";

const projectCount = myProjects.length;
const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const currentProject = myProjects[selectedProjectIndex];

    return (
        <section className={`c-space my-20`}>

                    <div className={`flex items-center justify-between flex-wrap
                    gap-5`}>


                    </div>

                    <div className={`flex justify-between items-center
                     mt-7`}>


                    </div>

                <div className={`border border-black-300 
                bg-black-200 rounded-lg h-96 md:h-full`}>
                    <Canvas>
                        <ambientLight intensity={Math.PI} />
                        <directionalLight position={[10, 10, 5]} />
                        <Center >
                            <Suspense fallback={<CanvasLoader />}>
                                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                    <DemoComputer texture={currentProject.texture}/>
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI / 2}
                                       enableZoom={false}/>
                    </Canvas>

                </div>
        </section>
    )
}
export default Projects
