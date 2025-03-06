import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import Button from '../ui/Button';

const Certificates = ({ isEditing = false }) => {
  const { portfolio, addItem, updateItem, removeItem } = usePortfolio();
  const { certificates } = portfolio;
  
  const [newCertificate, setNewCertificate] = useState({
    title: '',
    issuer: '',
    date: '',
    credentialId: '',
    credentialURL: '',
    image: ''
  });

  const handleAddCertificate = () => {
    if (!newCertificate.title.trim()) return;
    addItem('certificates', { ...newCertificate });
    setNewCertificate({
      title: '',
      issuer: '',
      date: '',
      credentialId: '',
      credentialURL: '',
      image: ''
    });
  };

  const handleUpdateCertificate = (index, field, value) => {
    const updatedCertificate = { ...certificates[index], [field]: value };
    updateItem('certificates', index, updatedCertificate);
  };

  const handleRemoveCertificate = (index) => {
    removeItem('certificates', index);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      setNewCertificate({ ...newCertificate, image: event.target.result });
    };
    reader.readAsDataURL(file);
  };
  
  const handleCertificateImageChange = (index, e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      handleUpdateCertificate(index, 'image', event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <section className="py-16 bg-gray-50" id="certificates">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Certificates</h2>
        
        {isEditing && (
          <div className="mb-8 bg-white p-6 rounded-lg shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Certificate Title</label>
                <input
                  type="text"
                  value={newCertificate.title}
                  onChange={(e) => setNewCertificate({ ...newCertificate, title: e.target.value })}
                  placeholder="Certificate Title"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Issuing Organization</label>
                <input
                  type="text"
                  value={newCertificate.issuer}
                  onChange={(e) => setNewCertificate({ ...newCertificate, issuer: e.target.value })}
                  placeholder="e.g., Coursera, Udemy, etc."
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input
                  type="text"
                  value={newCertificate.date}
                  onChange={(e) => setNewCertificate({ ...newCertificate, date: e.target.value })}
                  placeholder="Month Year (e.g., June 2023)"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Credential ID</label>
                <input
                  type="text"
                  value={newCertificate.credentialId}
                  onChange={(e) => setNewCertificate({ ...newCertificate, credentialId: e.target.value })}
                  placeholder="Certificate ID (optional)"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Credential URL</label>
              <input
                type="text"
                value={newCertificate.credentialURL}
                onChange={(e) => setNewCertificate({ ...newCertificate, credentialURL: e.target.value })}
                placeholder="Link to verify certificate"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Certificate Image</label>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {newCertificate.image && (
                <div className="mt-2">
                  <img 
                    src={newCertificate.image} 
                    alt="Certificate preview" 
                    className="max-h-40 rounded"
                  />
                </div>
              )}
            </div>
            
            <Button onClick={handleAddCertificate}>
              Add Certificate
            </Button>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((certificate, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              {isEditing ? (
                <div>
                  <div className="flex justify-end mb-2">
                    <button
                      onClick={() => handleRemoveCertificate(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Certificate Title</label>
                      <input
                        type="text"
                        value={certificate.title}
                        onChange={(e) => handleUpdateCertificate(index, 'title', e.target.value)}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Issuing Organization</label>
                      <input
                        type="text"
                        value={certificate.issuer}
                        onChange={(e) => handleUpdateCertificate(index, 'issuer', e.target.value)}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                      <input
                        type="text"
                        value={certificate.date}
                        onChange={(e) => handleUpdateCertificate(index, 'date', e.target.value)}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Credential ID</label>
                      <input
                        type="text"
                        value={certificate.credentialId}
                        onChange={(e) => handleUpdateCertificate(index, 'credentialId', e.target.value)}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Credential URL</label>
                      <input
                        type="text"
                        value={certificate.credentialURL}
                        onChange={(e) => handleUpdateCertificate(index, 'credentialURL', e.target.value)}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Certificate Image</label>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={(e) => handleCertificateImageChange(index, e)}
                        className="w-full"
                      />
                      {certificate.image && (
                        <div className="mt-2">
                          <img 
                            src={certificate.image} 
                            alt="Certificate" 
                            className="max-h-40 rounded"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col">
                  {certificate.image && (
                    <div className="mb-4">
                      <img 
                        src={certificate.image} 
                        alt={certificate.title} 
                        className="w-full rounded-lg object-contain h-48"
                      />
                    </div>
                  )}
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{certificate.title}</h3>
                    
                    <div className="flex justify-between items-start mb-4">
                      <p className="text-gray-700">{certificate.issuer}</p>
                      {certificate.date && (
                        <span className="text-sm text-gray-600">{certificate.date}</span>
                      )}
                    </div>
                    
                    {certificate.credentialId && (
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Credential ID:</strong> {certificate.credentialId}
                      </p>
                    )}
                    
                    {certificate.credentialURL && (
                      <a 
                        href={certificate.credentialURL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-block mt-2"
                      >
                        Verify Certificate &rarr;
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {!isEditing && certificates.length === 0 && (
            <div className="col-span-2 text-center py-8 text-gray-500">
              No certificates added yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certificates;