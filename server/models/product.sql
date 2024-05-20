-- Create Product table
CREATE TABLE IF NOT EXISTS Products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price INTEGER,
    img1 TEXT,
    img2 TEXT,
    img3 TEXT,
    img4 TEXT,
    category VARCHAR(255),
    stocks INTEGER,
    originalPrice INTEGER,
    promotionPercent INTEGER
);

-- Create ProductVariant table
CREATE TABLE IF NOT EXISTS ProductVariants (
    id SERIAL PRIMARY KEY,
    productId INTEGER REFERENCES Products(id) ON DELETE CASCADE,
    color VARCHAR(255) NOT NULL,
    price INTEGER,
    FOREIGN KEY (productId) REFERENCES Products(id)
);
