// src/components/Componente1/Componente1.js
import React, { useState } from "react";
import "./Componente1.css";

function Componente1() {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        ingreso: "",
        cuenta: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            nombre: "",
            apellido: "",
            correo: "",
            ingreso: "",
            cuenta: "",
        });
    };

    // Función para renderizar el formulario
    const renderFormulario = () => (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre del cliente:</label>
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Apellido del cliente:</label>
                <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
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


        </form>
    );

    // Función para renderizar la sección "Información ingresada"
    const renderInformacionIngresada = () => (
        <div className="informacion-ingresada">
            <h2>Información ingresada:</h2>
            <p>Nombre: {formData.nombre}</p>
            <p>Apellido: {formData.apellido}</p>
            <p>Correo Electrónico: {formData.correo}</p>
            <p>Fecha de ingreso: {formData.ingreso}</p>
            <p>Cuenta: {formData.cuenta}</p>
            <label>La informacion es correcta</label>

        </div>
    );

    return (
        <div className="componente1-container">
            <h1>Agregar Usuario</h1>
            {renderFormulario()}
            {formData.nombre && formData.apellido && formData.correo && formData.ingreso && formData.cuenta && renderInformacionIngresada()}
            <button type="submit">Agregar Usuario</button>
        </div>
    );
}

export default Componente1;
