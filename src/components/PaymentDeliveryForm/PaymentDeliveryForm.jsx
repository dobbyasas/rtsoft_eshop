import { useState } from 'react';
import './PaymentDeliveryForm.scss';

const PaymentDeliveryForm = ({ setIsFormVisible }) => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [deliveryMethod, setDeliveryMethod] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const orderInfo = { paymentMethod, deliveryMethod };
        localStorage.setItem('orderInfo', JSON.stringify(orderInfo));
        setIsFormVisible(false); // Hide the form
    };

    return (
        <div className="container">
            <header className="header">
                <h1 id="title" className="text-center">
                    Doprava a platba:
                </h1>
            </header>
            <div className="form-wrap">
                <form id="survey-form" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Způsob platby</label>
                                        <select
                                            id="dropdown"
                                            name="role"
                                            className="form-control"
                                            required
                                            value={paymentMethod}
                                            onChange={(e) =>
                                                setPaymentMethod(e.target.value)
                                            }
                                        >
                                            <option disabled selected value>
                                                Vyberte možnost
                                            </option>
                                            <option value="kartouOnline">
                                                Kartou Online
                                            </option>
                                            <option value="googlePay">
                                                Google Pay
                                            </option>
                                            <option value="payPal">
                                                Pay Pall
                                            </option>
                                            <option value="platba24">
                                                Platba 24
                                            </option>
                                            <option value="bankovnimPrevodem">
                                                Bankovním převodem
                                            </option>
                                            <option value="hotovePriVyzvednuti">
                                                Hotově nebo kartou při vyzvenutí
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Způsob dopravy</label>
                                        <select
                                            id="dropdown"
                                            name="role"
                                            className="form-control"
                                            required
                                            value={deliveryMethod}
                                            onChange={(e) =>
                                                setDeliveryMethod(
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option disabled selected value>
                                                Vyberte možnost
                                            </option>
                                            <option value="vyzvednutiNaProdejne">
                                                Vyzvednutí na prodejně
                                            </option>
                                            <option value="zasilkovna">
                                                Zásilkovna
                                            </option>
                                            <option value="doruceniNaPostu">
                                                Doručení na poštu
                                            </option>
                                            <option value="balikDomu">
                                                Balík domů
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img
                                src="/img/delivery.png"
                                style={{ margin: '40px', width: '150%' }}
                            />
                        </div>
                    </div>

                    <br />

                    <div className="row">
                        <div className="col-md-4">
                            <button
                                type="submit"
                                id="submit"
                                className="btn btn-custom btn-block"
                            >
                                K dodacím údajům
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PaymentDeliveryForm;
