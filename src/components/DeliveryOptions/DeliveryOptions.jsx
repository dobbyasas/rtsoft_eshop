import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DeliveryOptions() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const deliveryInfo = { name, surname, email, phone };
        localStorage.setItem('deliveryInfo', JSON.stringify(deliveryInfo));
        navigate('/Thanks');
    };

    return (
        <div className="container">
            <header className="header">
                <h1 id="title" className="text-center">
                    Dodací údaje
                </h1>
            </header>
            <div className="form-wrap">
                <form id="survey-form" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label id="name-label" htmlFor="name">
                                    Jméno
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="form-control"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label id="email-label" htmlFor="email">
                                    Příjmení
                                </label>
                                <input
                                    type="text"
                                    name="surname"
                                    id="surname"
                                    className="form-control"
                                    required
                                    value={surname}
                                    onChange={(e) => setSurname(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label id="email-label" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-control"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label id="telefon" htmlFor="telefon">
                                    Číslo telefonu
                                </label>
                                <input
                                    type="phone"
                                    name="telefon"
                                    id="telefon"
                                    className="form-control"
                                    required
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <h1>PŘIDAT VOLBU ADRESY</h1>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label> Poznámka k objednávce</label>
                                <textarea
                                    id="comments"
                                    className="form-control"
                                    name="comment"
                                    placeholder="Enter your comment here..."
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <button
                                type="submit"
                                id="submit"
                                className="btn btn-custom btn-block"
                            >
                                Objednat
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DeliveryOptions;
