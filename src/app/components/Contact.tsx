import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const emailAddress = 'sajid244113@gmail.com';
  const phoneNumber = '+880 1827356445';
//   const whatsappNumber = '+880 1234-567890';

  return (
    <footer id="contact" className="bg-neutral-950 text-white border-t border-neutral-800">
      
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left*/}
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
            <div className="h-1 w-12 bg-blue-600 mt-2 mx-auto md:mx-0 rounded"></div>
            <p className="text-neutral-400 max-w-sm mx-auto md:mx-0 pt-2 leading-relaxed">
              Have an exciting project idea, a position open, or just want to chat about web technologies? Drop a line anytime!
            </p>
          </div>


          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 space-y-4">
            
            <div className="flex items-center space-x-4 p-3 bg-neutral-800/40 rounded-xl border border-neutral-800/50">
              <div className="p-2.5 bg-blue-600/10 text-blue-500 rounded-lg">
                <FiMail />

              </div>
              <div>
                <span className="block text-xs font-semibold text-neutral-500 uppercase">Email Me</span>
                <a href={`mailto:${emailAddress}`} className="text-sm font-medium text-neutral-200 hover:text-blue-500 transition break-all">
                  {emailAddress}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-3 bg-neutral-800/40 rounded-xl border border-neutral-800/50">
              <div className="p-2.5 bg-blue-600/10 text-blue-500 rounded-lg">
                <FiPhone />
              </div>
              <div>
                <span className="block text-xs font-semibold text-neutral-500 uppercase">Call Me</span>
                <a href={`tel:${phoneNumber}`} className="text-sm font-medium text-neutral-200 hover:text-blue-500 transition">
                  {phoneNumber}
                </a>
              </div>
            </div>

            {/*WhatsApp */}
            {/* {whatsappNumber && (
              <div className="flex items-center space-x-4 p-3 bg-neutral-800/40 rounded-xl border border-neutral-800/50">
                <div className="p-2.5 bg-green-600/10 text-green-500 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-neutral-500 uppercase">WhatsApp</span>
                  <a 
                    href={`https://wa.me{whatsappNumber.replace(/[^0-9]/g, '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-medium text-neutral-200 hover:text-green-500 transition"
                  >
                    Send a Message
                  </a>
                </div>
              </div>
            )} */}

          </div>
        </div>
      </div>

      {/*Footer Layout */}
      <div className="bg-neutral-950 border-t border-neutral-900 py-6 text-center text-xs text-neutral-600">
        {/* <p>&copy; {new Date().getFullYear()} Sajid Sarman Portfolio. All Rights Reserved.</p> */}
        <p>Sajid Sarman. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Contact;