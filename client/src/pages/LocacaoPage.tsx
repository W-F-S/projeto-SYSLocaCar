import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';


function LocacaoPage() {
    const [serachParams] = useSearchParams();
    const carId = serachParams.get('carId');
    const [carInfo, setCarInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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


    useEffect(() => {
        const fetchCarDetails = async () => {
            try {

                const response = await fetch('http://localhost:9090/getCar', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ carId: carId }), // Send car ID in the POST request body
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setCarInfo(data.availableCars); // Set the car details in state

                console.log(data);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCarDetails();
    }, [carId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCarInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value, // Update the specific field in carInfo
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div style={containerStyle}>
            {/* Left Side: Image */}
            <img
                src={`/assets/${carInfo.imagemPath}`}
                alt="Carro"
                style={imageStyle}
            />

            {/* Right Side: Form */}
            <form style={formStyle} onSubmit={handleSubmit}>
                <h2>Informações do Veículo</h2>
                <label>
                    Placa:
                    <input
                        type="text"
                        name="placa"
                        placeholder="Placa"
                        value={carInfo.placa || ''}
                        onChange={handleInputChange}
                        style={inputStyle}
                    />
                </label>

                <label>
                    Chassi:
                    <input
                        type="text"
                        name="chassi"
                        placeholder="Chassi"
                        value={carInfo.chassi || ''}
                        onChange={handleInputChange}
                        style={inputStyle}
                    />
                </label>

                <label>
                    Ano de Fabricação:
                    <input
                        type="text"
                        name="ano"
                        placeholder="Ano de Fabricação"
                        value={carInfo.ano || ''}
                        onChange={handleInputChange}
                        style={inputStyle}
                    />
                </label>

                <label>
                    Cor:
                    <input
                        type="text"
                        name="cor"
                        placeholder="Cor"
                        value={carInfo.cor || ''}
                        onChange={handleInputChange}
                        style={inputStyle}
                    />
                </label>

                <label>
                    Marca:
                    <input
                        type="text"
                        name="marca"
                        placeholder="Marca"
                        value={carInfo.marca || ''}
                        onChange={handleInputChange}
                        style={inputStyle}
                    />
                </label>

                <label>
                    Modelo:
                    <input
                        type="text"
                        name="modelo"
                        placeholder="Modelo"
                        value={carInfo.modelo || ''}
                        onChange={handleInputChange}
                        style={inputStyle}
                    />
                </label>

                <label>
                    Status:
                    <input
                        type="text"
                        name="status"
                        placeholder="Status"
                        value={carInfo.status || ''}
                        onChange={handleInputChange}
                        style={inputStyle}
                    />
                </label>
                <button type="submit" style={buttonStyle}>
                    Salvar Informações
                </button>
            </form>
        </div>
    );
}

export default LocacaoPage;