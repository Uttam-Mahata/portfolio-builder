import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import Button from '../ui/Button';

const Projects = ({ isEditing = false }) => {
  const { portfolio, addItem, updateItem, removeItem } = usePortfolio();
  const { projects } = portfolio;
  
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    link: '',
    image: '',
    technologies: []
  });
  
  const [newTech, setNewTech] = useState('');

  const handleAddProject = () => {
    if (!newProject.title.trim()) return;
    addItem('projects', { ...newProject });
    setNewProject({
      title: '',
      description: '',
      link: '',
      image: '',
      technologies: []
    });
  };

  const handleUpdateProject = (index, field, value) => {
    const updatedProject = { ...projects[index], [field]: value };
    updateItem('projects', index, updatedProject);
  };

  const handleRemoveProject = (index) => {
    removeItem('projects', index);
  };

  const handleAddTechnology = () => {
    if (!newTech.trim()) return;
    setNewProject({
      ...newProject,
      technologies: [...newProject.technologies, newTech]
    });
    setNewTech('');
  };

  const handleRemoveTechnology = (index) => {
    setNewProject({
      ...newProject,
      technologies: newProject.technologies.filter((_, i) => i !== index)
    });
  };
  
  const handleUpdateTechnology = (projectIndex, techIndex, newTechValue) => {
    const updatedProject = { ...projects[projectIndex] };
    if (!updatedProject.technologies) updatedProject.technologies = [];
    
    const updatedTechnologies = [...updatedProject.technologies];
    updatedTechnologies[techIndex] = newTechValue;
    
    updatedProject.technologies = updatedTechnologies;
    updateItem('projects', projectIndex, updatedProject);
  };
  
  const handleRemoveProjectTech = (projectIndex, techIndex) => {
    const updatedProject = { ...projects[projectIndex] };
    updatedProject.technologies = updatedProject.technologies.filter((_, i) => i !== techIndex);
    updateItem('projects', projectIndex, updatedProject);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      setNewProject({ ...newProject, image: event.target.result });
    };
    reader.readAsDataURL(file);
  };
  
  const handleProjectImageChange = (index, e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      handleUpdateProject(index, 'image', event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <section className="py-16 bg-gray-50" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        
        {isEditing && (
          <div className="mb-8 bg-white p-6 rounded-lg shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
                <input
                  type="text"
                  value={newProject.title}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  placeholder="Project Title"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Link</label>
                <input
                  type="text"
                  value={newProject.link}
                  onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={newProject.description}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                placeholder="Project Description"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="3"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Image</label>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {newProject.image && (
                <div className="mt-2">
                  <img 
                    src={newProject.image} 
                    alt="Project preview" 
                    className="max-h-40 rounded"
                  />
                </div>
              )}
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Technologies Used</label>
              <div className="flex space-x-2 mb-2">
                <input
                  type="text"
                  value={newTech}
                  onChange={(e) => setNewTech(e.target.value)}
                  placeholder="Add a technology"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  onClick={handleAddTechnology}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                >
                  Add
                </button>
              </div>
              
              {newProject.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {newProject.technologies.map((tech, idx) => (
                    <div key={idx} className="bg-gray-100 px-3 py-1 rounded-full flex items-center">
                      <span>{tech}</span>
                      <button 
                        onClick={() => handleRemoveTechnology(idx)}
                        className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <Button onClick={handleAddProject}>
              Add Project
            </Button>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
              {isEditing ? (
                <div className="p-4">
                  <div className="flex justify-end mb-2">
                    <button
                      onClick={() => handleRemoveProject(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                  
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) => handleUpdateProject(index, 'title', e.target.value)}
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Link</label>
                    <input
                      type="text"
                      value={project.link}
                      onChange={(e) => handleUpdateProject(index, 'link', e.target.value)}
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      value={project.description}
                      onChange={(e) => handleUpdateProject(index, 'description', e.target.value)}
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      rows="3"
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Image</label>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={(e) => handleProjectImageChange(index, e)}
                      className="w-full"
                    />
                    {project.image && (
                      <div className="mt-2">
                        <img 
                          src={project.image} 
                          alt="Project preview" 
                          className="max-h-40 rounded"
                        />
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Technologies</label>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies && project.technologies.map((tech, techIdx) => (
                        <div key={techIdx} className="bg-gray-100 px-3 py-1 rounded-full flex items-center">
                          <input
                            type="text"
                            value={tech}
                            onChange={(e) => handleUpdateTechnology(index, techIdx, e.target.value)}
                            className="bg-transparent w-full border-none focus:outline-none"
                          />
                          <button 
                            onClick={() => handleRemoveProjectTech(index, techIdx)}
                            className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                    
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIdx) => (
                          <span 
                            key={techIdx}
                            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                      >
                        View Project &rarr;
                      </a>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
          
          {!isEditing && projects.length === 0 && (
            <div className="col-span-3 text-center py-8 text-gray-500">
              No projects added yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;