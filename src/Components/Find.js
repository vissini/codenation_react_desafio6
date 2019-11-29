import React from 'react'
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup';

class Find extends React.Component {
    
    isAlphaNumeric = (text) => {
        return text.match(/^[a-z0-9\-]+$/i);
    }

    validateUsername = (userName) => {

        let error;

        if(userName){
            //Não pode começar ou terminar com hífen
            if (userName.startsWith('-') || userName.endsWith('-')) {
                error = 'O nome de usuário não pode começar ou terminar com hífen!'
            }

            //Somente caracteres alfanuméricos (ignoro '-' e '_' aqui)
            if (!this.isAlphaNumeric(userName)) {
                error = 'Somente é possível utilizar caracteres alfanuméricos!'
            }

            //um único hífen    
            if (userName.includes('--')) {
                error = 'Somente é possível utilizar um único hífen!'
            }
        }

        return error;
    }

    render() {
        return (              
            <div>
                <Formik
                    initialValues={{
                        userName: ''
                    }}
                    validationSchema={Yup.object({
                      userName: Yup.string()
                        .max(39, 'Must be 15 characters or less')
                        .required('Required')
                        .test("len", "Must be exactly 5 characters", val => {
                            console.log("val ", val);
                            const error = this.validateUsername(val)
                            console.log(error)
                            if(error){
                                return false
                            }
                            return true;
                          })
                      })}
                    onSubmit={ values => {
                        let { userName } = values
                        this.props.handleFind(userName)
                    }}
                    >
                    <Form>
                    <label htmlFor="userName">User Name</label>
                    <Field name="userName" type="text" data-test="entrada" />
                    <ErrorMessage name="userName" />
                    </Form>
                </Formik>

            </div>

        )
    }

}

export {Find}