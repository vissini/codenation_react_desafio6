import React from 'react'
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup';

class Find extends React.Component {
    
    isAlphaNumeric = (text) => {
        //ignoro '-' e '_' aqui
        text = text.replace(/-/g, '');
        text = text.replace(/_/g, '');
        return text.match(/^[0-9a-zA-Z]+$/);
    }

    validateUsername = (userName) => {

        let error;

        //Deve ser informado
        if (userName.trim().length === 0) {
            error = 'Necessário informar o nome de usuário!'
        }

        //Máximo de 39 caracteres
        if (userName.length > 39) {
            error = 'O nome de usuário pode conter no máximo 39 caracteres!'
        }

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
                        .matches(/^[a-z0-9\-]+$/i,"Fora do Padrão")
                      })}
                    onSubmit={ values => {
                        let { userName } = values
                        this.props.handleFind(userName)
                    }}
                    >
                    <Form>
                    <label htmlFor="userName">User Name</label>
                    <Field name="userName" type="text" />
                    <ErrorMessage name="userName" />
                    </Form>
                </Formik>

            </div>

        )
    }

}

export {Find}