import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import SmoothScroll from './SmoothScroll';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '863c7e1f-f108-4eb8-bb5b-6fcf2ee75a11', // process.env.REACT_APP_NEWS_API_KEY
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'New Contact Form Submission',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ success: true, message: 'Message transmitted successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: error.message || 'Transmission failed! Try again.' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const socialLinks = [
    { icon: <FaGithub className="text-xl" />, url: 'https://github.com/Krushil-00', label: 'github/Krushil-00' },
    { icon: <FaLinkedin className="text-xl" />, url: 'https://linkedin.com/in/dangar-krushil-092aba2ba?utm_source=share&utm_Campagin=share_via&utm_content=profile&utm_medium=android_app', label: 'linkedin/Dangar krushil' },
    { icon: <FaEnvelope className="text-xl" />, url: 'mailto:dangarkrushil04@gmail.com', label: 'dangarkrushil04@gmail.com' },
    { icon: <FaPhoneAlt className="text-xl" />, url: 'tel:+919998118239', label: '+91 (999) 811-8239' }
  ];

  return (
    <SmoothScroll id="contact">
      <section id="contact" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 max-w-6xl">
          {/* Terminal Header */}
          <div className="flex items-center mb-6">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <h2 className="text-2xl md:text-3xl font-mono text-hacker glow-text">
              $ ./contact_me.sh --secure-channel
            </h2>
          </div>

          {/* Status Message */}
          {submitStatus && (
            <div className={`mb-6 p-3 rounded-md border ${submitStatus.success ? 'bg-green-900/30 border-green-500 text-green-400' : 'bg-red-900/30 border-red-500 text-red-400'} font-mono`}>
              <span className="text-matrix">$</span> {submitStatus.message}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form - Left Panel */}
            <div className="bg-gray-900/50 border border-hacker/30 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <span className="text-matrix mr-2 font-mono">❯</span>
                <h3 className="text-xl font-mono text-hacker">initiate_contact()</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5" autoComplete='off'>
                <div className="group">
                  <div className="flex items-center mb-1">
                    <span className="text-hacker font-mono mr-2">[user@terminal ~]$</span>
                    <label className="text-gray-300 font-mono text-sm">enter_name</label>
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-800/70 border border-gray-700 rounded-md py-3 px-4 text-white font-mono focus:border-hacker focus:ring-1 focus:ring-hacker/50 outline-none transition-all"
                    required
                    placeholder="_"
                  />
                </div>

                <div className="group">
                  <div className="flex items-center mb-1">
                    <span className="text-hacker font-mono mr-2">[user@terminal ~]$</span>
                    <label className="text-gray-300 font-mono text-sm">enter_email</label>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-800/70 border border-gray-700 rounded-md py-3 px-4 text-white font-mono focus:border-hacker focus:ring-1 focus:ring-hacker/50 outline-none transition-all"
                    required
                    placeholder="_"
                  />
                </div>

                <div className="group">
                  <div className="flex items-center mb-1">
                    <span className="text-hacker font-mono mr-2">[user@terminal ~]$</span>
                    <label className="text-gray-300 font-mono text-sm">enter_message</label>
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    style={{ resize: 'none' }}
                    className="w-full bg-gray-800/70 border border-gray-700 rounded-md py-3 px-4 text-white font-mono focus:border-hacker focus:ring-1 focus:ring-hacker/50 outline-none transition-all"
                    required
                    placeholder="_"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 font-mono rounded-md border flex items-center justify-center space-x-2 transition-all ${isSubmitting ? 'bg-hacker/20 border-hacker/50 text-hacker/50 cursor-not-allowed' : 'bg-hacker/10 border-hacker text-hacker hover:bg-hacker hover:text-black'}`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-pulse">[</span>
                      <span className="loading-dots">Sending</span>
                      <span className="animate-pulse">]</span>
                    </>
                  ) : (
                    <>
                      <span>[</span>
                      <span>Execute Transmission</span>
                      <span>]</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Social Links - Right Panel */}
            <div className="bg-gray-900/50 border border-hacker/30 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <span className="text-matrix mr-2 font-mono">❯</span>
                <h3 className="text-xl font-mono text-hacker">active_connections()</h3>
              </div>

              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-gray-800/40 rounded-md hover:bg-gray-800/70 transition-all border border-gray-700 hover:border-hacker group"
                  >
                    <span className="text-hacker mr-4 group-hover:text-matrix transition-colors">
                      {link.icon}
                    </span>
                    <span className="text-white font-mono text-sm md:text-base">
                      {link.label}
                    </span>
                    <span className="ml-auto text-gray-500 group-hover:text-hacker transition-colors">
                      {/* <span className="hidden md:inline">[click_to_connect]</span> */}
                      {/* <span className="md:hidden">[connect]</span> */}
                    </span>
                  </a>
                ))}
              </div>

              {/* Encryption Note */}
              <div className="mt-8 p-3 bg-gray-900/30 border border-hacker/20 rounded-md">
                <p className="text-xs text-gray-400 font-mono">
                  <span className="text-hacker">[SECURITY NOTICE]</span> All communications are encrypted end-to-end. Your data is protected.
                </p>
              </div>
            </div>
          </div>

          {/* Terminal Footer */}
          <div className="mt-8 font-mono text-gray-500 text-sm flex items-center">
            <span className="text-matrix mr-2">$</span>
            <span className="typing-animation">connection_established:ready_for_input</span>
            <span className="ml-2 animate-blink"></span>
          </div>
        </div>

        <style>{`
        .loading-dots:after {
          content: '.';
          animation: dots 1.5s steps(5, end) infinite;
        }
        @keyframes dots {
          0%, 20% { content: '.'; }
          40% { content: '..'; }
          60% { content: '...'; }
          80%, 100% { content: ''; }
        }
        .glow-text {
          text-shadow: 0 0 8px rgba(57, 255, 20, 0.6);
        }
        .typing-animation {
          display: inline-block;
          overflow: hidden;
          border-right: 2px solid #39ff14;
          white-space: nowrap;
          animation: typing 3.5s steps(30, end), blink-caret 0.75s step-end infinite;
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #39ff14 }
        }
      `}</style>
      </section>
    </SmoothScroll>
  );
};

export default Contact;