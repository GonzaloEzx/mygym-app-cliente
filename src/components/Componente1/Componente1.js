// src/components/Componente1/Componente1.js
import React, { useState } from 'react';
import './Componente1.css';

function Componente1() {
    // Estado para mantener los valores del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        ingreso: '',
        cuenta: '',
        // Agrega más campos si los necesitas
    });

    // Manejador para actualizar el estado al ingresar información en el formulario
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Manejador para enviar los datos del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes implementar el envío de datos a través de una API o función de gestión de usuarios
        console.log(formData);
        setFormData(formData);
        // También puedes reiniciar el formulario después del envío si es necesario
        setFormData({
            nombre: '',
            correo: '',
            ingreso: '',
            cuenta: '',
        });
    };

    return (
        <div className="componente1-container">
            <h1>Agregar Usuario</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre & Apellido del cliente:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email del cliente:</label>
                    <input
                        type="email"
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Fecha de ingreso del cliente:</label>
                    <input
                        type="text"
                        name="ingreso"
                        value={formData.ingreso}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Cuenta del cliente:</label>
                    <input
                        type="text"
                        name="cuenta"
                        value={formData.cuenta}
                        onChange={handleChange}
                    />
                </div>
                {/* Agrega más campos del formulario si es necesario */}
                <button type="submit">Agregar Usuario</button>
            </form>
        </div>
    );
}

export default Componente1;

