import React from 'react'
const QuiryForm = () => {
return (
<>
<section className='Query-form-wrapper pt-pb'>
   <div className='container'>
      <div className='row'>
         <div className='col-lg-6 Query-form-wrapper'> <img className='img-fluid' src="https://www.pngall.com/wp-content/uploads/5/Learning-PNG-Free-Download.png"/> </div>
         <div className='col-lg-6'>
           <form className='inquiry-form'>
            <h2 className='text-white'> Enquiry Form </h2>
            <hr></hr>
            <div className='row'>
            <div className="mb-3 col-sm-6"> 
               <input type="text" className='form-control' name='name' id='name' placeholder='Name' required /> 
               </div>
               <div className="mb-3 col-sm-6"> 
                <input type="email" className='form-control' name='email' id='email' placeholder='Email' required  /> 
                </div>

               <div className="mb-3 col-sm-6"> 
               <input type="text"  className='form-control' name='phone' id='phone' placeholder='Phone Number' required /> 
               </div>
               <div className="mb-3 col-sm-6">
                
                  <select className='form-control' name='course' id='course' required>
                     <option>Select Course</option>
                     
                     <option value={1}>French</option>
                     <option value={2}>German</option>
                     <option value={3}>Spanish</option>
                     <option value={4}>Engilsh Speaking</option>
                     <option value={5}>IELTS Coaching</option>
                     <option value={6}>Arabic</option>
                     <option value={7}>Chinese</option>
                     <option value={8}>Japanese</option>
                     <option value={9}>Russian</option>
                     <option value={10}>Hindi</option>
                     <option value={11}>OET Course</option>
                     <option value={12}>Korean</option>
                     <option value={13}>Study in Abroad</option>


                  </select>
               </div>
               <div className="mb-3 col-sm-12"> 
               
               <textarea className='form-control' name='message' id='message' placeholder='Message'></textarea>
               </div>
             
               </div>
               <button type="submit" className="btn Secondary-orange  text-white"> Submit <i className="fa-solid fa-arrow-right-to-bracket"></i> </button> 
            </form>
         </div>
      </div>
   </div>
</section>
</>
)
}
export default QuiryForm;