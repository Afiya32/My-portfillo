import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser"
import { IoIosSend } from "react-icons/io";

const Contact = () => {
    const handleSubmit =(e)=>{
        e.preventDefault();
        alert("Form submitted!");
        emailjs.sendForm('service_5a7f0vg', 'template_52azl5h',e.target,'t6LgsS4yTaT6N_nGf')

    }
    return (
        <div>
            <Helmet>
                <title>BH || Contact</title>
            </Helmet>
         <div>
         <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Contact Me</h1>
    
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text"> your Email Address</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your message</span>
          </label>
          <input type="text" placeholder="message" className="input input-bordered" required />
       
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            <IoIosSend/>Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
            </div> 
        </div>
    );
};

export default Contact;