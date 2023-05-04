import {Field, Form, Formik, ErrorMessage} from 'formik'
import Header from '../Header';
import whatsapp from '../assets/wa-icon.png'
import mail from '../assets/mail-ico.png'

function Contact(){
    return(
        <>
        <Header/>
        <div className="form-container">

        <Formik
            initialValues={{message:"Hola, te contacto por..."}}
            validate={values=>{
                let errors = {};
                if(!values.name){
                    errors.name="Este campo es requerido";
                }else if(!values.email){
                    errors.email="Este campo es requerido";
                }else if(
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ){
                    errors.email = "El correo no es válido"
                }
                return errors;
            }}
            onSubmit={
                (values, {setSubmitting}) => {
                    let url = "https://formspree.io/f/xpzekjpy";
                    let form_data = new FormData();
                    form_data.append("name",values.name);
                    form_data.append("email",values.email);
                    form_data.append("message",values.message);

                    fetch(url,{
                        method: "POST",
                        body: form_data,
                        headers: {
                            'Accept': 'application/json'
                        }
                    }).then(response => {
                        setSubmitting(false);
                        alert("Gracias por contactarme!")
                    })
                }
            }
        >
            {
                ({isSubmitting, values}) => (
                    <Form>
                        <div>
                            <label htmlFor="name">Nombre</label>
                            <Field type="text" name="name" placeholder="Ingresa tu nombre"/>
                            <ErrorMessage name="name" component="p" />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" placeholder="Ingresa tu correo"/>
                            <ErrorMessage name="email" component="p" />

                        </div>
                        <br />
                        <div>
                            <label htmlFor="message">Mensaje</label>
                            <Field component="textarea" value={values.message} name="message"/>
                        </div>
                        <br />
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Enviando" : "Enviar mensaje"}
                        </button>
                    </Form>
                    
                )
            }
        </Formik>
            </div>
            <div className="container-contact-card">   
                <div className="contact-card">
                    <div className="icon">
                        <img src={mail} alt="" />
                    </div>
                    <div className="contact-text">
                        <span>Mi correo:</span><br />
                        <span>ggyahir96@gmail.com</span>
                    </div>
                </div>
                <div className="contact-card">
                    <div className="icon">
                        <img src={whatsapp} alt="" />
                    </div>
                    <div className="contact-text">
                        <span>Mi whatsapp:</span><br />
                        <span>55 2820 4879</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;