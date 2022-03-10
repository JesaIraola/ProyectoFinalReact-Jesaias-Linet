import React from 'react';
import './Registrarse.css';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form } from 'formik';
import { RegisElements } from './Registrarse.elements';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


const useStyles = makeStyles((theme) => ({
    Button: {
        backgroundColor: '#white',
        color: 'black',
        padding: '5px 35px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        borderRadius: '10px',
        border: '1px solid #646464'
    },
}));

const Registrarse = () => {
    const img = styled.image`
    float: right; width: 50px;`;
    const classes = useStyles();
    const validate = Yup.object({
        nombre: Yup.string()
            .max(15, 'No mas de 15 caracteres')
            .required('Requerido'),
        apellidos: Yup.string()
            .max(15, 'No mas de 20 caracteres')
            .required('Requerido'),
        email: Yup.string()
            .email('Gmail invalido')
            .required('Gmail requerido'),
        contraseña: Yup.string()
            .min(6, 'La contraseña debe tener al menos 6 caracteres')
            .required('Contraseña requerido'),
        confirmarContraseña: Yup.string()
            .oneOf([Yup.ref('contraseña'), null], 'Contraseña debe coincidir')
            .required('Confirmar contraseña es requerido'),
    })
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-5">
                    <Formik
                    initialValues={{
                        nombre:'',
                        apellidos: '',
                        gmail:'',
                        contraseña:'',
                        confirmarContraseña:''
                    }}
                    validationSchema={validate}
                    onSubmit={values => {
                        console.log(values)
                    }}>
                        {formik => (
                            <div>
                                <h1 className="my-4 font-weight-bold .display-4">Registro</h1>
                                <Form>
                                    <RegisElements label="Nombre" name="nombre" type="text"/>
                                    <RegisElements label="Apellidos" name="apellidos" type="text"/>
                                    <RegisElements label="Gmail" name="gmail" type="email"/>
                                    <RegisElements label="Contraseña" name="contraseña" type="password"/>
                                    <RegisElements label="Confirmar Contraseña" name="confirmarContraseña" type="password"/>
                                    <buttom className="btn btn-dark mt-3" type="submit">Registrar</buttom>
                                    <buttom className="btn btn-danger mt-3 ml-3" type="reset">Eliminar</buttom>
                                </Form>
                            </div>
                        )}
                    </Formik>
                </div>
                <div className="col-md-7 my-auto">
                    <img className="img-fluid w-60" src='/rocket.png'/>
                </div>
            </div>
        </div>
    );
};
export default Registrarse;