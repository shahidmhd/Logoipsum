import React from 'react'

function Middlepart() {
    return (
      
 <footer className="text-center text-white h-50" style={{ backgroundColor: '#3187ED' }}>
 <div className="container p-4 pb-0">
     <section className="">
         <form action="">
             <div className="row d-flex justify-content-center">
                 <div className="col-auto">
                     <p className="pt-2">
                         <strong>Sign up for our newsletter</strong>
                     </p>
                 </div>
                 <div className="col-md-5 col-12">
                     <div className="input-group">
                         <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                         <button type="button" className="btn btn-outline-primary ">search</button>
                     </div>
                 </div>
                 <div className="col-auto">
                     <button type="submit" className="btn btn-outline-light mb-4">
                         Subscribe
                     </button>
                 </div>

             </div>

         </form>
     </section>
 </div>
</footer>


    )
}

export default Middlepart