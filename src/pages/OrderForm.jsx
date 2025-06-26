import React, { useState } from 'react';
import { FaFileUpload, FaCheckCircle } from 'react-icons/fa';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    projectType: '',
    description: '',
    urgency: 'standard',
    clientName: '',
    email: '',
    phone: '',
    address: '',
    materialType: '',
    thickness: '',
    length: '',
    width: '',
    height: '',
    notes: '',
    uploadedFiles: [],
    specialRequirements: ''
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  const projectTypes = [
    'Structural Framework',
    'Custom Gates & Fencing',
    'Machinery Components',
    'Architectural Elements',
    'Industrial Equipment',
    'Automotive Parts',
    'Marine Hardware',
    'Agricultural Equipment',
    'HVAC Components',
    'Custom Brackets & Mounts',
    'Decorative Metalwork',
    'Other'
  ];

  const materialTypes = {
    'mild-steel': 'Mild Steel',
    'stainless-steel': 'Stainless Steel',
    'aluminum': 'Aluminum',
    'copper': 'Copper',
    'brass': 'Brass',
    'galvanized-steel': 'Galvanized Steel',
    'carbon-steel': 'Carbon Steel',
    'tool-steel': 'Tool Steel'
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      uploadedFiles: [...formData.uploadedFiles, ...files]
    });
  };

  const removeFile = (index) => {
    const updatedFiles = formData.uploadedFiles.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      uploadedFiles: updatedFiles
    });
  };

  const validateStep = (step) => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.projectName.trim()) newErrors.projectName = 'Project name is required';
      if (!formData.projectType) newErrors.projectType = 'Project type is required';
      if (!formData.description.trim()) newErrors.description = 'Project description is required';
    }
    if (step === 2) {
      if (!formData.clientName.trim()) newErrors.clientName = 'Client name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    }
    if (step === 3) {
      if (!formData.materialType) newErrors.materialType = 'Material type is required';
      if (!formData.thickness.trim()) newErrors.thickness = 'Material thickness is required';
      if (!formData.length.trim()) newErrors.length = 'Length is required';
      if (!formData.width.trim()) newErrors.width = 'Width is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) setCurrentStep(currentStep + 1);
  };
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;
    const orderData = {
      ...formData,
      submissionDate: new Date().toISOString(),
      orderId: `MF-${Date.now()}`
    };
    console.log('Order Submitted:', orderData);
    alert('Your order has been submitted! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 mt-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Custom Metal Fabrication Order
            </h1>
            <p className="text-gray-600 text-lg">
              Tell us about your project and we'll reach out to discuss your needs.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`w-8 h-1 ${
                      currentStep > step ? 'bg-blue-600' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Labels */}
          <div className="grid grid-cols-4 gap-2 mb-8 text-center text-xs text-gray-600">
            <div className={currentStep >= 1 ? 'text-blue-600 font-medium' : ''}>Project Info</div>
            <div className={currentStep >= 2 ? 'text-blue-600 font-medium' : ''}>Client Details</div>
            <div className={currentStep >= 3 ? 'text-blue-600 font-medium' : ''}>Specs</div>
            <div className={currentStep >= 4 ? 'text-blue-600 font-medium' : ''}>Review</div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
            {/* Step 1: Project Information */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Project Information</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Name *
                    </label>
                    <input
                      type="text"
                      name="projectName"
                      value={formData.projectName}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none ${
                        errors.projectName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="e.g., Custom Staircase Railing"
                    />
                    {errors.projectName && <p className="text-red-500 text-sm mt-1">{errors.projectName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none ${
                        errors.projectType ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows="4"
                      className={`w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none ${
                        errors.description ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Provide detailed description of your project requirements..."
                    />
                    {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Urgency
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    >
                      <option value="standard">Standard (2-4 weeks)</option>
                      <option value="urgent">Urgent (1-2 weeks)</option>
                      <option value="rush">Rush (Less than 1 week)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Client Information */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Client Information</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="clientName"
                      value={formData.clientName}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none ${
                        errors.clientName ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.clientName && <p className="text-red-500 text-sm mt-1">{errors.clientName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Address
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows="2"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="Where will this project be installed/delivered?"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Material & Dimensions */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Material & Dimensions</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Material Type *
                    </label>
                    <select
                      name="materialType"
                      value={formData.materialType}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none ${
                        errors.materialType ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select material type</option>
                      {Object.entries(materialTypes).map(([key, value]) => (
                        <option key={key} value={key}>{value}</option>
                      ))}
                    </select>
                    {errors.materialType && <p className="text-red-500 text-sm mt-1">{errors.materialType}</p>}
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Thickness (mm) *
                      </label>
                      <input
                        type="text"
                        name="thickness"
                        value={formData.thickness}
                        onChange={handleInputChange}
                        className={`w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none ${
                          errors.thickness ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="e.g., 3"
                      />
                      {errors.thickness && <p className="text-red-500 text-sm mt-1">{errors.thickness}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Length (mm) *
                      </label>
                      <input
                        type="text"
                        name="length"
                        value={formData.length}
                        onChange={handleInputChange}
                        className={`w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none ${
                          errors.length ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="e.g., 1000"
                      />
                      {errors.length && <p className="text-red-500 text-sm mt-1">{errors.length}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Width (mm) *
                      </label>
                      <input
                        type="text"
                        name="width"
                        value={formData.width}
                        onChange={handleInputChange}
                        className={`w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none ${
                          errors.width ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="e.g., 500"
                      />
                      {errors.width && <p className="text-red-500 text-sm mt-1">{errors.width}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Height (mm)
                    </label>
                    <input
                      type="text"
                      name="height"
                      value={formData.height}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="e.g., 100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="Any specific requirements or notes..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Upload Files (Drawings, References, etc.)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <FaFileUpload className="mx-auto text-gray-400 text-3xl mb-4" />
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png,.gif"
                        className="hidden"
                        id="file-upload"
                      />
                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Click to upload files
                      </label>
                      <p className="text-gray-500 text-sm mt-2">
                        Supported: PDF, DWG, DXF, JPG, PNG (Max 10MB each)
                      </p>
                    </div>
                    {formData.uploadedFiles.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-medium mb-2">Uploaded Files:</h4>
                        <div className="space-y-2">
                          {formData.uploadedFiles.map((file, index) => (
                            <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                              <span className="text-sm">{file.name}</span>
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="text-red-500 hover:text-red-700"
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review & Submit */}
            {currentStep === 4 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Review & Submit</h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Project Overview</h3>
                    <p><strong>Name:</strong> {formData.projectName}</p>
                    <p><strong>Type:</strong> {formData.projectType}</p>
                    <p><strong>Urgency:</strong> {formData.urgency}</p>
                    <p><strong>Description:</strong> {formData.description}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Client Information</h3>
                    <p><strong>Name:</strong> {formData.clientName}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                    {formData.address && <p><strong>Address:</strong> {formData.address}</p>}
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Specs</h3>
                    <p><strong>Material:</strong> {materialTypes[formData.materialType]}</p>
                    <p><strong>Thickness:</strong> {formData.thickness}mm</p>
                    <p><strong>Length:</strong> {formData.length}mm</p>
                    <p><strong>Width:</strong> {formData.width}mm</p>
                    {formData.height && <p><strong>Height:</strong> {formData.height}mm</p>}
                    {formData.notes && <p><strong>Notes:</strong> {formData.notes}</p>}
                  </div>
                  {formData.uploadedFiles.length > 0 && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Uploaded Files</h3>
                      <ul className="text-sm">
                        {formData.uploadedFiles.map((file, index) => (
                          <li key={index}>• {file.name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {formData.specialRequirements && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Special Requirements</h3>
                      <p>{formData.specialRequirements}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Previous
                </button>
              )}
              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors ml-auto"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors ml-auto flex items-center"
                >
                  <FaCheckCircle className="mr-2" />
                  Submit Order
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;