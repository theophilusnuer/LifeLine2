import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
    return (
        // <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">Login</h2>
                <Formik
                    initialValues={{ emailOrPhone: '', password: '' }}
                    validationSchema={Yup.object().shape({
                        emailOrPhone: Yup.string()
                            .required('Email or phone number is required'),
                        password: Yup.string()
                            .required('Password is required')
                            .min(6, 'Password must be at least 6 characters long')
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="mb-4">
                                <label htmlFor="emailOrPhone" className="block text-gray-700 text-sm font-bold mb-2">Email or Phone Number</label>
                                <Field
                                    type="text"
                                    id="emailOrPhone"
                                    name="emailOrPhone"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                />
                                <ErrorMessage name="emailOrPhone" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                <Field
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div className="mb-6">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                                >
                                    {isSubmitting ? 'Logging in...' : 'Login'}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        // </div>
    );
};

export default LoginForm;
