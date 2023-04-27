import React from 'react'

const ContactForm = () => {
  return (
    
    <section>
    <div className="relative flex justify-center max-h-full overflow-hidden lg:px-0 md:px-12">
      <div className="relative z-10 flex flex-col flex-1 px-4 py-10 bg-white  lg:py-24 md:flex-none md:px-28 sm:justify-center">
        <div className="w-full max-w-4xl mx-auto md:max-w-4xl md:px-0  sm:px-4">
          <div className="flex flex-col">
            <div>
              <h2 className="text-4xl text-black">Let's get started!</h2>
              <p className="mt-2 text-sm text-gray-500">
                Complete the details below so I can process your request and then
                schedule a time to discuss your goals.
              </p>
            </div>
          </div>
          <form className='max-w-xl mx-auto text-left'>
            <input autoComplete="false" name="hidden" className=' hidden'/>
            <input name="_redirect" type="hidden" value="#"/>
            <div className="mt-4 space-y-6">
              <div>
                <label className="block mb-3 text-sm font-medium text-gray-600" name="name">
                  First name
                </label>
                <input required className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder="Your name"/>
              </div>
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600" name="company">
                  What is the name of your company / organisation?
                </label>
                <input  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder="Company name"/>
              </div>
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600" name="email">
                  How shall we contact you?
                </label>
                <input required className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder="email@example.com" autoComplete="on" type="email"/>
              </div>
              <div>
                <div>
                  <label className="block mb-3 text-sm font-medium text-gray-600" name="message">
                    Project details
                  </label>
                  <div className="mt-1">
                    <textarea required className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder="What are you working on?" rows="4"></textarea>
                  </div>
                </div>
              </div>
              <div className="col-span-full">
                <button className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black" type="submit">
                  Submit your request
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
     
    </div>
  </section>

  )
}

export default ContactForm