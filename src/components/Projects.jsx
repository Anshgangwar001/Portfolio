import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className="pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Projects
            </motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className="mb-12 flex flex-wrap items-center lg:flex-nowrap lg:justify-center"
                    >
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/3 flex justify-center mb-6 lg:mb-0"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-64 h-40 object-cover rounded-xl shadow-md"
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-2xl lg:w-2/3 px-4"
                        >
                            <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>
                            <p className="mb-4 text-stone-400">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="rounded bg-stone-900 px-3 py-1 text-sm font-medium text-stone-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
