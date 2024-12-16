import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

function LocacaoPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const carId = searchParams.get('carId');
    const [carInfo, setCarInfo] = useState({
        placa: '',
        chassi: '',
        anofabricacao: '',
        cor: '',
        marca: '',
        modelo: '',
        status: '',
        imagemPath: 'car1.jpeg',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    let isEditing = Boolean(carId);

    useEffect(() => {
        if (isEditing) {
            const fetchCarDetails = async () => {
                setLoading(true);
                try {
                    const response = await fetch(`http://localhost:9090/getCar?carId=${carId}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }

                    const data = await response.json();
                    setCarInfo(data.availableCar || {}); // Set car details or empty object
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchCarDetails();
        }
    }, [carId, isEditing]);

    const appStyle = {
        background: 'linear-gradient(135deg, #4c6ef5, #b197fc)',
        fontFamily: 'Arial, sans-serif',
        color: '#fff'
    };

    const headerStyle = {
        padding: '20px',
        textAlign: 'center',
        width: '100%',
        background: 'rgba(0,0,0,0.2)', // semi-transparent background
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
    };

    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        padding: '20px',
    };

    const imageStyle = {
        flex: 1,
        maxWidth: '700px',
        height: 'auto',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    };

    const formStyle = {
        flex: 1,
        background: '#fff',
        padding: '20px 40px 20px 20px',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        margin: '20px',
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
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const url = isEditing
                ? 'http://localhost:9090/updateCar' 
                : 'http://localhost:9090/createCar';

            const method = isEditing ? 'PUT' : 'POST';


            console.log(carInfo);

            
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...(isEditing && { carId }), // Include carId only for editing
                    ...carInfo,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            alert(isEditing ? 'Car updated successfully!' : 'Car created successfully!');
            navigate('/'); // Redirect to the main page or another page
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!isEditing) return;

        setLoading(true);
        try {
            const response = await fetch('http://localhost:9090/deleteCar', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ carId }),
            });

            if (!response.ok) {
                throw new Error('Failed to delete the car');
            }

            alert('Car deleted successfully');
            navigate('/');
        } catch (err) {
            console.error('Error deleting car:', err);
            alert('Failed to delete the car');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (

        <div style={appStyle}>

            <header  style={headerStyle}>
                <h2 style={{textAlign: 'center'}}>{isEditing ? 'Editando ' + carInfo.marca + ' ' + carInfo.modelo : 'Novo carro'}</h2>
            </header>
            
            <div style={containerStyle}>
                <img
                    src={`/assets/${carInfo.imagemPath}`}
                    alt="Carro"
                    style={imageStyle}
                />
                <form style={formStyle} onSubmit={handleSubmit}>
                    <label>
                        Placa:
                        <input
                            type="text"
                            name="placa"
                            value={carInfo.placa}
                            onChange={handleInputChange}
                            style={inputStyle}
                        />
                    </label>
                    <label>
                        Chassi:
                        <input
                            type="text"
                            name="chassi"
                            value={carInfo.chassi}
                            onChange={handleInputChange}
                            style={inputStyle}
                        />
                    </label>
                    {/* <label>
                        Ano de Fabricação:
                        <input
                            type="date"
                            name="anofabricacao"
                            value={carInfo.anofabricacao}
                            onChange={handleInputChange}
                            style={inputStyle}
                        />
                    </label> */}
                    <label>
                        Cor:
                        <input
                            type="text"
                            name="cor"
                            value={carInfo.cor}
                            onChange={handleInputChange}
                            style={inputStyle}
                        />
                    </label>
                    <label>
                        Marca:
                        <input
                            type="text"
                            name="marca"
                            value={carInfo.marca}
                            onChange={handleInputChange}
                            style={inputStyle}
                        />
                    </label>
                    <label>
                        Modelo:
                        <input
                            type="text"
                            name="modelo"
                            value={carInfo.modelo}
                            onChange={handleInputChange}
                            style={inputStyle}
                        />
                    </label>
                    <label>
                        Status:
                        <input
                            type="text"
                            name="status"
                            value={carInfo.status}
                            onChange={handleInputChange}
                            style={inputStyle}
                        />
                    </label>

                    <button type="submit">{isEditing ? 'Savar' : 'Cadastrar'}</button>
                    {isEditing && (
                        <button type="button" onClick={handleDelete}>
                            Deletar carro
                        </button>
                    )}
                </form>
            </div>

        </div>
    );
}

export default LocacaoPage;