import React, { useState } from 'react';

function ProcessoDeLocacao() {
    const [carInfo, setCarInfo] = useState({
        placa: 'ABC-1234',
        chassi: '1HGCM82633A123456',
        ano: '2020',
        cor: 'Preto',
        marca: 'Toyota',
        modelo: 'Corolla',
        status: 'Disponível',
    });

    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
        background: 'linear-gradient(135deg, #f3f4f7, #dde1e7)',
        color: '#333',
        padding: '20px',
    };

    const imageStyle = {
        flex: 1,
        maxWidth: '400px',
        height: 'auto',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    };

    const formStyle = {
        flex: 1,
        background: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        marginLeft: '20px',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
    };

    const buttonStyle = {
        background: '#4c6ef5',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCarInfo({ ...carInfo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Informações salvas para o carro: ${carInfo.modelo}`);
    };

    return (
        <div style={containerStyle}>
            {/* Left Side: Image */}
            <img
                src="https://via.placeholder.com/400x300?text=Carro"
                alt="Carro"
                style={imageStyle}
            />

            {/* Right Side: Form */}
            <form style={formStyle} onSubmit={handleSubmit}>
                <h2>Informações do Veículo</h2>
                <input
                    type="text"
                    name="placa"
                    placeholder="Placa"
                    value={carInfo.placa}
                    onChange={handleInputChange}
                    style={inputStyle}
                />
                <input
                    type="text"
                    name="chassi"
                    placeholder="Chassi"
                    value={carInfo.chassi}
                    onChange={handleInputChange}
                    style={inputStyle}
                />
                <input
                    type="text"
                    name="ano"
                    placeholder="Ano de Fabricação"
                    value={carInfo.ano}
                    onChange={handleInputChange}
                    style={inputStyle}
                />
                <input
                    type="text"
                    name="cor"
                    placeholder="Cor"
                    value={carInfo.cor}
                    onChange={handleInputChange}
                    style={inputStyle}
                />
                <input
                    type="text"
                    name="marca"
                    placeholder="Marca"
                    value={carInfo.marca}
                    onChange={handleInputChange}
                    style={inputStyle}
                />
                <input
                    type="text"
                    name="modelo"
                    placeholder="Modelo"
                    value={carInfo.modelo}
                    onChange={handleInputChange}
                    style={inputStyle}
                />
                <input
                    type="text"
                    name="status"
                    placeholder="Status"
                    value={carInfo.status}
                    onChange={handleInputChange}
                    style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>
                    Salvar Informações
                </button>
            </form>
        </div>
    );
}

export default ProcessoDeLocacao;