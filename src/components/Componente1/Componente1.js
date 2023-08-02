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

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Envía los datos a la API ficticia (ajusta la URL según tu caso)
            const response = await fetch("https://mi-api.com/api/usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            // Comprueba si la respuesta fue exitosa
            if (response.ok) {
                console.log("Datos enviados exitosamente");
            } else {
                console.error("Error al enviar los datos");
            }
        } catch (error) {
            console.error("Error en la conexión con la API:", error);
        }

        // Reinicia el formulario después del envío
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
            {/* Mueve el botón de "Agregar Usuario" al final del formulario */}
            <button type="submit">Agregar Usuario</button>
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
            {/* Agrega una opción para confirmar la información */}
            <label>La información es correcta </label>

            <button type="submit">Confirmar</button>
        </div>
    );

    return (
        <div className="componente1-container">
            <h1>Agregar Usuario</h1>
            {renderFormulario()}
            {/* Muestra la sección "Información ingresada" solo si el formulario ha sido enviado */}
            {Object.values(formData).some((value) => value !== "") && renderInformacionIngresada()}
        </div>
    );
}

export default Componente1;
