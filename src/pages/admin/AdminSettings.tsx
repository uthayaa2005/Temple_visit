import React, { useState } from 'react';
import { Settings, Save, Globe, BellRing, Shield, Mail, Layout } from 'lucide-react';

const AdminSettings: React.FC = () => {
  const [generalSettings, setGeneralSettings] = useState({
    siteName: 'Tamil Nadu Temple Guide',
    siteDescription: 'Comprehensive guide to Tamil Nadu\'s ancient temples',
    contactEmail: 'info@tamilnadutemples.com',
    enableMapFeature: true,
    enableUserReviews: true,
    enableNotifications: true
  });

  const [emailSettings, setEmailSettings] = useState({
    emailServer: 'smtp.example.com',
    emailPort: '587',
    emailUsername: 'notifications@tamilnadutemples.com',
    enableWelcomeEmail: true,
    enableNewsletters: true
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    passwordExpiry: '90',
    minPasswordLength: '8',
    requireSpecialChars: true
  });

  const [activeTab, setActiveTab] = useState<'general' | 'email' | 'security'>('general');
  const [saved, setSaved] = useState(false);

  const handleGeneralSettingsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setGeneralSettings({
      ...generalSettings,
      [name]: newValue
    });
    
    if (saved) setSaved(false);
  };

  const handleEmailSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? e.target.checked : value;
    
    setEmailSettings({
      ...emailSettings,
      [name]: newValue
    });
    
    if (saved) setSaved(false);
  };

  const handleSecuritySettingsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setSecuritySettings({
      ...securitySettings,
      [name]: newValue
    });
    
    if (saved) setSaved(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would save to a backend
    console.log('Saving settings:', {
      generalSettings,
      emailSettings,
      securitySettings
    });
    
    setSaved(true);
    
    // Reset saved status after 3 seconds
    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold">System Settings</h2>
        <p className="text-gray-600 mt-1">
          Configure how the Tamil Nadu Temple Guide works
        </p>
      </div>
      
      {/* Settings Tabs */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="flex border-b border-gray-200">
          <button
            className={`px-6 py-4 text-sm font-medium flex items-center ${
              activeTab === 'general' 
                ? 'text-primary-600 border-b-2 border-primary-600' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('general')}
          >
            <Globe size={18} className="mr-2" />
            General
          </button>
          <button
            className={`px-6 py-4 text-sm font-medium flex items-center ${
              activeTab === 'email' 
                ? 'text-primary-600 border-b-2 border-primary-600' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('email')}
          >
            <Mail size={18} className="mr-2" />
            Email
          </button>
          <button
            className={`px-6 py-4 text-sm font-medium flex items-center ${
              activeTab === 'security' 
                ? 'text-primary-600 border-b-2 border-primary-600' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('security')}
          >
            <Shield size={18} className="mr-2" />
            Security
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="p-6">
            {/* General Settings */}
            {activeTab === 'general' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">General Settings</h3>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="siteName" className="block text-sm font-medium text-gray-700 mb-1">
                        Site Name
                      </label>
                      <input
                        type="text"
                        id="siteName"
                        name="siteName"
                        value={generalSettings.siteName}
                        onChange={handleGeneralSettingsChange}
                        className="input"
                      />
                    </div>
                    <div>
                      <label htmlFor="siteDescription" className="block text-sm font-medium text-gray-700 mb-1">
                        Site Description
                      </label>
                      <textarea
                        id="siteDescription"
                        name="siteDescription"
                        rows={3}
                        value={generalSettings.siteDescription}
                        onChange={handleGeneralSettingsChange}
                        className="input"
                      ></textarea>
                    </div>
                    <div>
                      <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
                        Contact Email
                      </label>
                      <input
                        type="email"
                        id="contactEmail"
                        name="contactEmail"
                        value={generalSettings.contactEmail}
                        onChange={handleGeneralSettingsChange}
                        className="input"
                      />
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium text-gray-700">Features</h4>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="enableMapFeature"
                          name="enableMapFeature"
                          checked={generalSettings.enableMapFeature}
                          onChange={handleGeneralSettingsChange}
                          className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                        />
                        <label htmlFor="enableMapFeature" className="ml-2 block text-sm text-gray-700">
                          Enable Map Feature
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="enableUserReviews"
                          name="enableUserReviews"
                          checked={generalSettings.enableUserReviews}
                          onChange={handleGeneralSettingsChange}
                          className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                        />
                        <label htmlFor="enableUserReviews" className="ml-2 block text-sm text-gray-700">
                          Enable User Reviews
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="enableNotifications"
                          name="enableNotifications"
                          checked={generalSettings.enableNotifications}
                          onChange={handleGeneralSettingsChange}
                          className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                        />
                        <label htmlFor="enableNotifications" className="ml-2 block text-sm text-gray-700">
                          Enable User Notifications
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Email Settings */}
            {activeTab === 'email' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Email Settings</h3>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="emailServer" className="block text-sm font-medium text-gray-700 mb-1">
                        SMTP Server
                      </label>
                      <input
                        type="text"
                        id="emailServer"
                        name="emailServer"
                        value={emailSettings.emailServer}
                        onChange={handleEmailSettingsChange}
                        className="input"
                      />
                    </div>
                    <div>
                      <label htmlFor="emailPort" className="block text-sm font-medium text-gray-700 mb-1">
                        SMTP Port
                      </label>
                      <input
                        type="text"
                        id="emailPort"
                        name="emailPort"
                        value={emailSettings.emailPort}
                        onChange={handleEmailSettingsChange}
                        className="input"
                      />
                    </div>
                    <div>
                      <label htmlFor="emailUsername" className="block text-sm font-medium text-gray-700 mb-1">
                        SMTP Username
                      </label>
                      <input
                        type="text"
                        id="emailUsername"
                        name="emailUsername"
                        value={emailSettings.emailUsername}
                        onChange={handleEmailSettingsChange}
                        className="input"
                      />
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium text-gray-700">Email Notifications</h4>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="enableWelcomeEmail"
                          name="enableWelcomeEmail"
                          checked={emailSettings.enableWelcomeEmail}
                          onChange={handleEmailSettingsChange}
                          className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                        />
                        <label htmlFor="enableWelcomeEmail" className="ml-2 block text-sm text-gray-700">
                          Send Welcome Email to New Users
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="enableNewsletters"
                          name="enableNewsletters"
                          checked={emailSettings.enableNewsletters}
                          onChange={handleEmailSettingsChange}
                          className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                        />
                        <label htmlFor="enableNewsletters" className="ml-2 block text-sm text-gray-700">
                          Enable Newsletter Subscription
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Security Settings */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Security Settings</h3>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="twoFactorAuth"
                        name="twoFactorAuth"
                        checked={securitySettings.twoFactorAuth}
                        onChange={handleSecuritySettingsChange}
                        className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                      />
                      <label htmlFor="twoFactorAuth" className="ml-2 block text-sm text-gray-700">
                        Enable Two-Factor Authentication
                      </label>
                    </div>
                    <div>
                      <label htmlFor="passwordExpiry" className="block text-sm font-medium text-gray-700 mb-1">
                        Password Expiry (days)
                      </label>
                      <input
                        type="number"
                        id="passwordExpiry"
                        name="passwordExpiry"
                        value={securitySettings.passwordExpiry}
                        onChange={handleSecuritySettingsChange}
                        className="input"
                        min="0"
                        max="365"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Set to 0 to disable password expiry
                      </p>
                    </div>
                    <div>
                      <label htmlFor="minPasswordLength" className="block text-sm font-medium text-gray-700 mb-1">
                        Minimum Password Length
                      </label>
                      <select
                        id="minPasswordLength"
                        name="minPasswordLength"
                        value={securitySettings.minPasswordLength}
                        onChange={handleSecuritySettingsChange}
                        className="input"
                      >
                        <option value="6">6 characters</option>
                        <option value="8">8 characters</option>
                        <option value="10">10 characters</option>
                        <option value="12">12 characters</option>
                      </select>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="requireSpecialChars"
                        name="requireSpecialChars"
                        checked={securitySettings.requireSpecialChars}
                        onChange={handleSecuritySettingsChange}
                        className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                      />
                      <label htmlFor="requireSpecialChars" className="ml-2 block text-sm text-gray-700">
                        Require Special Characters in Passwords
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
            <div>
              {saved && (
                <span className="text-green-600 inline-flex items-center">
                  <svg className="w-4 h-4 mr-1\" fill="currentColor\" viewBox="0 0 20 20">
                    <path fillRule="evenodd\" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clipRule="evenodd" />
                  </svg>
                  Settings saved successfully
                </span>
              )}
            </div>
            <button
              type="submit"
              className="btn bg-temple-red hover:bg-red-800 text-white inline-flex items-center"
            >
              <Save size={18} className="mr-2" />
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminSettings;