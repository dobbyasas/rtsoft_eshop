import { useState } from 'react';

import Item from '../Item/Item';
import { produkty } from '../Item/ItemData';

function Main() {
    const [activeCategory] = useState(0);
    return (
        <div id="main" className="col" style={{ backgroundColor: '#cccfcd' }}>
            <div className="row">
                {(activeCategory === 0
                    ? produkty
                    : produkty.filter(
                          (produkt) => produkt.category === activeCategory
                      )
                ).map((produkt) => (
                    <div className="col-12 col-lg-4" key={produkt.id}>
                        <Item
                            name={produkt.name}
                            imagePath={produkt.imagePath}
                            description={produkt.description}
                            price={produkt.price}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Main;
