import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id:1,
        title:"SaaS landing page",
        description: "A beautifull Landing page using react and tailwiand",
        image: "/projects/P1.jpg",
        tags:["React" , "Tailwind" ],
        demoUrl: "#",
        githubURL :"#",
    },
     {
        id:2,
        title:"SaaS landing page",
        description: "A beautifull Landing page using react and tailwiand",
        image: "/projects/P2.png",
        tags:["React" , "Tailwind" ],
        demoUrl: "#",
        githubURL :"#",
    },
     {
        id:3,
        title:"SaaS landing page",
        description: "A beautifull Landing page using react and tailwiand",
        image: "/projects/P3.jpg",
        tags:["React" , "Tailwind" ],
        demoUrl: "#",
        githubURL :"#",
    }

]

 export const ProjectSection = ()=>{

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div classname="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Features <span className="text-primary">Projects</span>
                </h2>

                <p className="text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
                    Here are a few projects I've worked on recently
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key)=>(
                        <div key={key} className="groupbg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img
                                src={project.image}
                                 alt={project.title}
                                 className="w-full h-full object-cover transition-transform duration-500 goup-hover:scale-110"
                                 />
                            </div>
                            <div className="p-6 ">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag,key)=>(
                                        <span key={key} className="text-xs px-2 py-1 font-medium border rounded-full bg-primary/30 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                            </div>
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex items-center justify-between">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20}/>
                                        </a>
                                        <a href={project.githubURL} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20}/>
                                        </a>
                                    </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                    <div className="text-center mt-12">
                        <a href="https://github.com/KartikManral092006" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                            Check My Github<ArrowRight size={20}/>
                        </a>

                    </div>
            </div>

        </section>


    )
 }
